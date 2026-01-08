class ElementBase<Data> {
	static template($: Number): String;
	static style($: Number): String;
	onCreate(): void;
	onLoad(): void;
}

type Element<Data> = ElementBase<Data>;

// type TemplateSetter = (builder: ($: Number) => String) => void;

// type Interface = {
// 	template: TemplateSetter,
// };

interface Interface {
	static template: {
		HTML: ($: Number) => String;
		CSS: ($: Number) => String;
	}
};

export function define<Data>(
	configuration: { tag: String, data: Data },
	implementation: any
): [HTMLElement, Interface];
