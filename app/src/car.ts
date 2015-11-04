class Car {
	private _name: string;

	constructor (name: string) {
 		this.name = name;
	}
	
	get name(): string {
		return this._name;
	}	
	
	set name(value: string) {
		if (value === undefined) {
			throw 'Error';
		}
		this._name = value;
	}	
}

let car = new Car('Smart');
console.log(car.name);
car.name = 'Cool';
console.log(car.name);