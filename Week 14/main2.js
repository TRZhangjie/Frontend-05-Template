function createElement(type, attributes, ...children) {
	let element;
	if (typeof type === "string") {
		//当html标签全小写时，传入的是string类型
		element = new ElementWrapper(type);
	} else {
		//当html标签首字母大写时，传入的是function类型
		element = new type();
	}

	for (const key in attributes) {
		element.setAttribute(key, attributes[key]); // 设置属性
	}
	for (let child of children) {
		if (typeof child === "string") {
			child = new TextWrapper(child); //如果子节点是文本，就创建文本节点，不然appenChild会报错
		}
		element.appendChild(child);
	}
	return element;
}

class ElementWrapper {
	//由于原生的element不具备mountTo方法，所以我们封装一个ElementWrapper
	constructor(type) {
		this.root = document.createElement(type);
	}
	setAttribute(name, value) {
		this.root.setAttribute(name, value);
	}
	appendChild(child) {
		child.mountTo(this.root);
	}
	mountTo(parent) {
		parent.appendChild(this.root);
	}
}

class TextWrapper {
	//由于原生的TextNode不具备mountTo方法，所以我们封装一个TextWrapper
	constructor(text) {
		this.root = document.createTextNode(text);
	}
	setAttribute(name, value) {
		this.root.setAttribute(name, value);
	}
	appendChild(child) {
		child.mountTo(this.root);
	}
	mountTo(parent) {
		parent.appendChild(this.root);
	}
}

class Div {
	constructor() {
		this.root = document.createElement("div");
	}
	mountTo(parent) {
		parent.appendChild(this.root);
	}
	appendChild(child) {
		child.mountTo(this.root);
	}
	setAttribute(key, value) {
		this.root.setAttribute(key, value);
	}
}
let a = (
	<div>
		<Div id="xyz">
			<span>1</span>
			<span>2</span>
			<span>3</span>
		</Div>
		<div id="xyz">
			<span>1</span>
			<span>2</span>
			<span>3</span>
		</div>
	</div>
);

a.mountTo(document.body);