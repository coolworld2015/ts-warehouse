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
var base = new Base();
var test:Derived = new Derived();

class Timer {
	public startJS() {
		var that = this;
		setTimeout(function() {
			div.innerHTML += 'Hi JS';
		}, 1000);
	}
	
	public startTS() {
		setTimeout(()=>	div.innerHTML += '<br>' + 'Hi TS', 2000);
	}
	
	public intervalJS() {
		setTimeout(function() {
			setInterval(function() {
				var d = new Date();
				var t = d.toLocaleTimeString();
				divTime.innerHTML = t;
			}, 1000);
		}, 2000);

	}
	
	public intervalTS() {
		setTimeout(()=>{setInterval(() => {this.myTimer()}, 1000)}, 2000)
	}	
	
	public secondMethod(){
	   this.myTimer();
	}
	
	public secondMethodTS = () => {
	   this.myTimer();
	}
	
	private myTimer() {
		var d = new Date();
		var t = d.toLocaleTimeString();
		divTime.innerHTML = t;
	}
}
var timer = new Timer();

class Developer {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	sayHello() {
		return "Dev name is " + this.name;
	}
}
var ed = new Developer('Edward');

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
var greeter = new Greeter("CoolWorld");

function greeting() {
	div.innerHTML = '<div style="font-size:24px">' + '<center>' + ed.sayHello();
	timer.startJS();
	timer.startTS();
	timer.intervalTS();
}	

var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = greeting;

//document.body.appendChild(button);

window.onload = greeting;

var div = document.createElement('div');
document.body.appendChild(div);

var divTime = document.createElement('div');
document.body.appendChild(divTime);
