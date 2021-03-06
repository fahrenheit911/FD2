let inp = document.getElementById("size clock");

function addClock() {

	let diam = inp.value;
	diam = parseInt(diam);
	let hours = 12;
	let mainSize = diam;
	let miniSize = diam * 0.1;
	let radius = diam / 2;
	

	if (diam < 200 || diam > 800) {
		alert('alarm');
		btn.preventDefault()
	}

	let circleBig = document.createElement('div');
	document.body.appendChild(circleBig);
	circleBig.setAttribute('id', 'circleBig');
	circleBig.style.position = 'absolute';
	circleBig.style.marginLeft = '92px';
	circleBig.style.marginTop = '70px';
	circleBig.style.width = mainSize + "px";
	circleBig.style.height = mainSize + "px";
	circleBig.style.borderRadius = '50%';
	circleBig.style.backgroundColor = 'RGB(0 110 187)';
	let circleBigCentreX = circleBig.offsetLeft + circleBig.offsetWidth / 2;
	let circleBigCentreY = circleBig.offsetTop + circleBig.offsetHeight / 2;

	let delta = Math.PI * 2 / hours;
	let angle = delta;

	for (let i = 1; i <= hours; i++) {

		let circleSmall = document.createElement('div');
		circleBig.appendChild(circleSmall);
		circleSmall.setAttribute('id', 'circleSmall');
		circleSmall.style.position = 'absolute';
		circleSmall.style.width = miniSize + "px";
		circleSmall.style.height = miniSize + "px";
		circleSmall.style.borderRadius = '50%';
		circleSmall.style.backgroundColor = 'RGB(255 216 0)';
		let circleSmallCentreX = circleSmall.offsetLeft + circleSmall.offsetWidth / 2;
		let circleSmallCentreY = circleSmall.offsetTop + circleSmall.offsetHeight / 2;

		let span = document.createElement('span');
		circleSmall.appendChild(span);
		span.innerHTML = i;
		span.style.fontSize = miniSize * 0.9 + 'px';
		span.style.position = 'absolute';
		let spanCentreX = span.offsetLeft + span.offsetWidth / 2;
		let spanCentreY = span.offsetTop + span.offsetHeight / 2;
		span.style.top = circleSmallCentreY - spanCentreY + 'px';
		span.style.left = circleSmallCentreX - spanCentreX + 'px';


		circleSmall.style.left = Math.round(circleBigCentreX - circleBigCentreX + radius - (miniSize / 2)) + ((radius - miniSize / 2) * (Math.sin(angle))) + 'px';//Math.round(circleBigCentreX - circleBigCentreX + radius - (miniSize / 2)) + 'px';
		circleSmall.style.top = Math.round(circleBigCentreY - circleBigCentreY + radius - (miniSize / 2)) + ((radius - miniSize / 2) * -(Math.cos(angle))) + 'px';//Math.round(circleBigCentreY - circleBigCentreY + (miniSize / 2)) + 'px';

		angle += delta;
	}

	let secondHand = document.createElement('div');
	circleBig.appendChild(secondHand);
	secondHand.setAttribute('id', 'secondhand');
	secondHand.style.position = 'absolute';
	let secondWidth = 2.5;
	secondHand.style.width = secondWidth + 'px';
	let secondHeight = radius;
	secondHand.style.height = secondHeight + 'px';
	secondHand.style.backgroundColor = 'black';
	let secondHandPointTopX = secondHand.offsetLeft / 2;
	let secondHandPointTopY = secondHand.offsetTop + secondHeight - secondHeight * 0.8;
	secondHand.style.transformOrigin = "center 80%";
	secondHand.style.left = Math.round(circleBigCentreX - circleBigCentreX + radius - secondWidth / 2) + 'px';
	secondHand.style.top = Math.round(circleBigCentreY - circleBigCentreY + secondHandPointTopY) + 'px';

	let minuteHand = document.createElement('div');
	circleBig.appendChild(minuteHand);
	minuteHand.setAttribute('id', 'minutehand');
	minuteHand.style.position = 'absolute';
	let minuteWidth = 4.5;
	minuteHand.style.width = minuteWidth + 'px';
	let minuteHeight = radius * 0.9;
	minuteHand.style.height = minuteHeight + 'px';
	minuteHand.style.backgroundColor = 'black';
	minuteHand.style.borderRadius = '1000px';
	let minuteHandPointTopX = minuteHand.offsetLeft / 2;
	let minuteHandPointTopY = minuteHand.offsetTop + minuteHeight - minuteHeight * 0.2;
	minuteHand.style.transformOrigin = "center 80%";
	minuteHand.style.left = Math.round(circleBigCentreX - circleBigCentreX + radius - minuteWidth / 2) + 'px';
	minuteHand.style.top = Math.round(circleBigCentreY - circleBigCentreY + radius - minuteHandPointTopY) + 'px';

	let hourHand = document.createElement('div');
	circleBig.appendChild(hourHand);
	hourHand.setAttribute('id', 'hourhand');
	hourHand.style.position = 'absolute';
	let hourWidth = 6;
	hourHand.style.width = hourWidth + 'px';
	let hourHeight = radius * 0.6;
	hourHand.style.height = hourHeight + 'px';
	hourHand.style.backgroundColor = 'black';
	hourHand.style.borderRadius = '1000px';
	let hourHandPointTopX = hourHand.offsetLeft / 2;
	let hourHandPointTopY = hourHand.offsetTop + hourHeight - hourHeight * 0.2;
	hourHand.style.transformOrigin = "center 80%";
	hourHand.style.left = Math.round(circleBigCentreX - circleBigCentreX + radius - hourWidth / 2) + 'px';
	hourHand.style.top = Math.round(circleBigCentreY - circleBigCentreY + radius - hourHandPointTopY) + 'px';

	let digitalClock = document.createElement('div');
	circleBig.appendChild(digitalClock);
	digitalClock.setAttribute('id', 'clock');
	digitalClock.style.textAlign = 'center';
	digitalClock.style.marginTop = '25%';
   digitalClock.style.fontSize = miniSize * 0.9 + 'px';
  

	function TTT() {
		let d = new Date();
		let dg = 360 / 60;
		let hdg = 360 / hours;			
		
		let hour = d.getHours() * hdg;
		let min = d.getMinutes() * dg;
		let sec = d.getSeconds() * dg;

		hourHand.style.transform = `rotate(${ (hour) + (min/hours) }deg)`;
		minuteHand.style.transform = `rotate(${min}deg)`;
		secondHand.style.transform = `rotate(${sec}deg)`;

		document.getElementById('clock').innerHTML = d.toLocaleTimeString();
		console.log(d);

		setTimeout(TTT, 1000 - d.getMilliseconds());
	};

	TTT();

	let btn = document.getElementById('btn');
	btn.style.display = 'none';

	let sz = document.getElementById('size clock');
	sz.style.display = 'none';
}




