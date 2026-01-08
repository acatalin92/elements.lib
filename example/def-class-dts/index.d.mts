abstract class IElement<Data> {
	static template($: Number): String;
	static style($: Number): String;
	onCreate(): void;
	onLoad(): void;
}

class Element<Data> extends IElement<Data> {
}

export function define<Data>(configuration: {
	tag: String,
	data: Data,
}): typeof Element<Data>;
