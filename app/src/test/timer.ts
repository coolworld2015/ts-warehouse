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