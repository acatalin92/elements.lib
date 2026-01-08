function parse(code) {
  const result = {};

  let skip = null;
  let escaped = false;
  let inString = false, stringMarker = null,
      inTemplateLiteral = false;
  const expressions = [];
  let expression = null,
      inExpression = false;
  let inComment = false, commentType = null;
  const encapsulation = new Encapsulation();
  let previous = [];
  let inRegExp = false, regExpEncapsulation = null;
  let temp;

  for (let i = 0, len = code.length; i < len; i++) {
    const c = code[i], n = code[i + 1];

    if (skip) {
      if (skip === i) {
        skip = null;
      }
      continue;
    }

    if (escaped) {
      escaped = false;
      continue;
    } else if (!inComment) {
      if (c === '\\') {
        escaped = true;
        continue;
      }
    }

    if (inRegExp) {
      if (c === '/') {
        inRegExp = regExpEncapsulation > 0;
      } else if (c === '(' || c === '[' || c === '{') {
        regExpEncapsulation++;
      } else if (c === ')' || c === ']' || c === '}') {
        regExpEncapsulation--;
      }
      continue;
    } else if (!inString && !inComment) {
      if (c === '/' && n !== '/' && n !== '*' && isRegExpStart(previous, code)) {
        inRegExp = true;
        regExpEncapsulation = 0;
        continue;
      }
    }

    if (inString) {
      if (c === stringMarker) {
        inString = false;
        stringMarker = null;
        inTemplateLiteral = false;
        previous = [c, i];
        continue;
      }
      if (inTemplateLiteral) {
        if (c === '$' && n === '{') {
          inString = false;
          stringMarker = null;
          inTemplateLiteral = false;
          inExpression = true;
          temp = expression;
          expression = new Expression();
          expression.previous = temp;
          expression.encapsulation = encapsulation.get('{');
          expressions.push(expression);
        }
        continue;
      }
      continue;
    } else if (!inComment) {
      if (c === '"' || c === "'" || c === '`') {
        inString = true;
        stringMarker = c;
        inTemplateLiteral = c === '`';
        continue;
      }
      if (
        inExpression &&
        c === '}' &&
        expression.encapsulation === encapsulation.get('{') - 1
      ) {
        inString = true;
        stringMarker = '`';
        inTemplateLiteral = true;
        expressions.pop();
        expression = expression.previous;
        inExpression = !!expression;
      }
    }

    if (inComment) {
      if (commentType === 'ml') {
        if (c === '*' && n === '/') {
          inComment = false;
          commentType = null;
          skip = i + 1;
        }
      } else {
        temp = c.charCodeAt(0);
        if (temp === 10 || temp === 13) {
          inComment = false;
          commentType = null;
        }
      }
      continue;
    } else {
      if (c === '/' && n === '*') {
        inComment = true;
        commentType = 'ml';
        skip = i + 1;
        continue;
      }
      if (c === '/' && n === '/') {
        inComment = true;
        commentType = 'sl';
        skip = i + 1;
        temp = code[i + 2];
        if ((temp === '@' || temp === '#') && isSourceMapStart(i + 2, code)) {
          break;
        }
        continue;
      }
    }

    if (c === '(' || c === '[' || c === '{') {
      encapsulation.update(c, 1);
      previous = [c, i];
    } else if (c === ')' || c === ']' || c === '}') {
      encapsulation.update(c, -1);
      previous = [c, i];
    } else if (!isWhiteSpace(c)) {
      previous = [c, i];
    }
  }

  return result;
}

function isWhiteSpace(c) {
  const code = c.charCodeAt(0);
  return code === 32 || (code >= 9 && code <= 13);
}

function isRegExpStart(previous, code) {
  const [character, index] = previous;
  return (
    !character ||
    !/[a-zA-Z0-9$_)}\]]/.test(character) ||
    code.slice(index - 6 + 1, index + 1) === 'return' ||
    code.slice(index - 5 + 1, index + 1) === 'throw' ||
    code.slice(index - 5 + 1, index + 1) === 'yield' ||
    code.slice(index - 5 + 1, index + 1) === 'using'
  );
}

function isSourceMapStart(index, code) {
  return (
  	code.slice(index + 2, index + 11) === 'sourceURL' ||
    code.slice(index + 2, index + 18) === 'sourceMappingURL'
  );
}

class Encapsulation {
  map = { '(': 1, ')': 1, '{': 2, '}': 2, '[': 3, ']': 3 };
  count = { 1: 0, 2: 0, 3: 0 };
  get(id) {
    return this.count[this.map[id]];
  }
  update(id, value) {
    return this.count[this.map[id]] += value;
  }
  test() {
    return this.count[1] + this.count[2] + this.count[3] > 0;
  }
  sum() {
    return this.count[1] + this.count[2] + this.count[3];
  }
}

class Expression {
  previous = null;
  encapsulation = null;
}

export default parse;
