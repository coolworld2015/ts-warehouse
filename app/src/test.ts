var num1: number = 1;
class Developer {
	private name: string;
	constructor(name: string) {
		this.name = name;
	}
	sayHello() {
		return 'Dev name is ' + this.name;
	}
}
var ed = new Developer('Edward');
