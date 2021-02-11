// Set date
var countdownDate = new Date(
	"February 12, 2021 00:00:00"
).getTime(); /* hrs: min: sec */

// Update the count down every 1 second
var x = setInterval(function () {
	// Get todays date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countdownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element
	document.querySelector("#d").innerText = addZero(days);
	document.querySelector("#h").innerText = addZero(hours);
	document.querySelector("#m").innerText = addZero(minutes);
	document.querySelector("#s").innerText = addZero(seconds);

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown-box").innerHTML =
		document.querySelector(".title").innerText = "";
		window.location.href = "index1.html";

		

	}
}, 1000);
function addZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
function isMobile() {
	if (window.innerWidth < 775) {
		return true;
	} else {
		return false;
	}
}

// snow


class Snowflake {
	constructor() {
	  this.x = 0;
	  this.y = 0;
	  this.vx = 0;
	  this.vy = 0;
	  this.radius = 0;
	  this.alpha = 0;
  
	  this.reset();
	}
  
	reset() {
	  this.x = this.randBetween(0, window.innerWidth);
	  this.y = this.randBetween(0, -window.innerHeight);
	  this.vx = this.randBetween(-3, 3);
	  this.vy = this.randBetween(2, 5);
	  this.radius = this.randBetween(1, 4);
	  this.alpha = this.randBetween(0.1, 0.9);
	}
  
	randBetween(min, max) {
	  return min + Math.random() * (max - min);
	}
  
	update() {
	  this.x += this.vx;
	  this.y += this.vy;
  
	  if (this.y + this.radius > window.innerHeight) {
		this.reset();
	  }
	}
  }
  
  class Snow {
	constructor() {
	  this.canvas = document.createElement("canvas");
	  this.ctx = this.canvas.getContext("2d");
  
	  document.body.appendChild(this.canvas);
  
	  window.addEventListener("resize", () => this.onResize());
	  this.onResize();
	  this.updateBound = this.update.bind(this);
	  requestAnimationFrame(this.updateBound);
  
	  this.createSnowflakes();
	}
  
	onResize() {
	  this.width = window.innerWidth;
	  this.height = window.innerHeight;
	  this.canvas.width = this.width;
	  this.canvas.height = this.height;
	}
  
	createSnowflakes() {
	  const flakes = window.innerWidth / 4;
  
	  this.snowflakes = [];
  
	  for (let s = 0; s < flakes; s++) {
		this.snowflakes.push(new Snowflake());
	  }
	}
  
	update() {
	  this.ctx.clearRect(0, 0, this.width, this.height);
  
	  for (let flake of this.snowflakes) {
		flake.update();
  
		this.ctx.save();
		this.ctx.fillStyle = "#fff";
		this.ctx.beginPath();
		this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
		this.ctx.closePath();
		this.ctx.globalAlpha = flake.alpha;
		this.ctx.fill();
		this.ctx.restore();
	  }
	  requestAnimationFrame(this.updateBound);
	}
  }
  
  new Snow();

