class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
var greeter = new Greeter('CoolWorld');

function greeting() {
	div.innerHTML = '<div style="font-size:24px">' + '<center>' + ed.sayHello();
	timer.startJS();
	timer.startTS();
	timer.intervalTS();
}	

var button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = greeting;

document.body.appendChild(button);

window.onload = greeting;

var div = document.createElement('div');
document.body.appendChild(div);

var divTime = document.createElement('div');
document.body.appendChild(divTime);
