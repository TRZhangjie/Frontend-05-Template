function createElement(type, attributes, ...children) {
	const element = document.createElement(type);
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
	for (let child of children) {
		if (typeof child === "string") {
			child = document.createTextNode(child);
		}
		element.appendChild(child);
	}
	return element;
}
let a = (
	<div id="xyz">
		<span>1</span>
		<span>2</span>
		<span>3</span>
	</div>
);

document.body.appendChild(a);