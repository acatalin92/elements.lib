type Template = {
	HTML: ($: Number) => String;
	CSS: ($: CSS) => String;
};

export function define<Data>(
	configuration: { tag: String, data: Data },
	implementation: any
): [HTMLElement, Template];
