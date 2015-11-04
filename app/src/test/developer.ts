class Developer {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}
	public sayHello() {
		return 'Dev name is ' + this.name;
	}
}
var ed = new Developer('Edward');
console.log(ed.sayHello());
