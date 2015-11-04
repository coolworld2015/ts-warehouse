module types {
	//declare let angular;
	let any1 = 'angular';

	let num1: number = 1;
	let hasCheck: boolean = true;

	let name: string = 'ed';
	let names: string[] = ['ed', 'john'];

	let empty: any = null;

	let person = {
		id: num1,
		name: name,
		sayHelloOld: function() {
			return console.log(this.name);
		},
		sayHello: () => console.log('Cool') 
	};
	person.sayHello();

	let doSomething: Function = () => console.log(any1);
	doSomething();

	let addTwo = (a: number, b: number) => a + b;
	console.log(addTwo(2,3));

	interface TestInterface {
		(x: number): number;
	}

	let testInterface: TestInterface =
		(num) => (num * num);
	console.log(testInterface(5));

	interface Developer {
		name: string;
		skills: string[];
		sayHello: () => string;
	}

	let ed: Developer = {
		name: 'ed',
		skills: ['js', ' html'],
		sayHello: function() {
			return this.name + ' has skills: ' +this.skills;
		}
	};
	console.log(ed.sayHello());
    ed.skills
}