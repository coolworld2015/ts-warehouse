class Car {
	// public name: string; Dont needed !!!

	private _name: string;
	
	constructor (public name: string) {
 
	}
	
	get name1(): string {
		return this._name;
	}	
	
	set name1(value: string) {
		this._name = value;
	}	
}