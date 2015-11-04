class Base {
	constructor(){
		setTimeout(()=>{
			this.initialized();
		}, 5000);
	}
	
	initialized(){
		div.innerHTML += '<br>' + "Base initialized";
	}
}

class Derived extends Base {
	initialized(){
		div.innerHTML += '<br>' + "Derived initialized";
	}
}
//var base = new Base();
//var test:Derived = new Derived();
