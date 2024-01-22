const reviewWrap = document.getElementById("reviewWrap");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const imgDiv = document.getElementById("imgDiv");
const personName = document.getElementById("personName");
const profession = document.getElementById("profession");
const description = document.getElementById("description");
const surpriseMeBtn = document.getElementById("surpriseMeBtn");
const chicken = document.querySelector(".chicken");

let isChickenVisible;

let people = [
	{
		photo:
			'',
		name: "Eric Hildebrandt",
		profession: "",
		description:
			"Have to take a minute and thank Connor Lacouvee for the online goalie coaching session with my 10U goalie. Having a professional goalie review his game footage, praise his highlights, and offer constructive feedback was a great boost to his confidence. Looking forward to booking another session to mentally prepare for try outs! I highly recommend booking a session with him for your tendy!"
	},

	{
		photo:
			"",
		name: "Zach Sanford",
		profession: "",
		description:
			"Connor is a true professional when it comes to his knowledge and competitiveness for the game of hockey. He's always pushing you to be the best you can be and will do anything it takes to make you better. His skating and ability to stop the puck is excellent which makes him have many great ways of teaching anyon until they perfect their craft"
	},

	{
		photo:
			"",
		name: "Sean Kelly",
		profession: "",
		description:
			"Thanks for the awesome workouts this summer. Very refreshing. As a goalie yourself with a solid resume I believe you under the principal of being efficient vs being perfect, and your way of communicating this and your coaching philosophy/ drills are tailored perfectly to this principal. As I get older and reflect on my path as a goalie, I definitely would have appreciated this type of approach in my younger days. I believe this is the way to go to develop quality athletes but more importantly quality individuals."
	},

	{
		photo:
			"",
		name: "Alice Maher",
		profession: "",
		description:
			"My daughter is working to move up to a more competitive level for fall so we scheduled a :30 minute film review with Connor. The insights he gave my daughter are great for her to focus on during spring season and continue to hone into her strengths. Connor did a great job breaking down her ice time. It boosted her confidence and she is planning on working in his suggestions during spring. Highly recommend signing up with Connor for a film review! "
	}
];

imgDiv.style.backgroundImage = people[0].photo;
personName.innerText = people[0].name;
profession.innerText = people[0].profession;
description.innerText = people[0].description;
let currentPerson = 0;

//Select the side where you want to slide
function slide(whichSide, personNumber) {
	let reviewWrapWidth = reviewWrap.offsetWidth + "px";
	let descriptionHeight = description.offsetHeight + "px";
	//(+ or -)
	let side1symbol = whichSide === "left" ? "" : "-";
	let side2symbol = whichSide === "left" ? "-" : "";

	let tl = gsap.timeline();

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 0
		});
	}

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 0,
		translateX: `${side1symbol + reviewWrapWidth}`
	});

	tl.to(reviewWrap, {
		duration: 0,
		translateX: `${side2symbol + reviewWrapWidth}`
	});

	setTimeout(() => {
		imgDiv.style.backgroundImage = people[personNumber].photo;
	}, 400);
	setTimeout(() => {
		description.style.height = descriptionHeight;
	}, 400);
	setTimeout(() => {
		personName.innerText = people[personNumber].name;
	}, 400);
	setTimeout(() => {
		profession.innerText = people[personNumber].profession;
	}, 400);
	setTimeout(() => {
		description.innerText = people[personNumber].description;
	}, 400);

	tl.to(reviewWrap, {
		duration: 0.4,
		opacity: 1,
		translateX: 0
	});

	if (isChickenVisible) {
		tl.to(chicken, {
			duration: 0.4,
			opacity: 1
		});
	}
}

function setNextCardLeft() {
	if (currentPerson === 3) {
		currentPerson = 0;
		slide("left", currentPerson);
	} else {
		currentPerson++;
	}

	slide("left", currentPerson);
}

function setNextCardRight() {
	if (currentPerson === 0) {
		currentPerson = 3;
		slide("right", currentPerson);
	} else {
		currentPerson--;
	}

	slide("right", currentPerson);
}

leftArrow.addEventListener("click", setNextCardLeft);
rightArrow.addEventListener("click", setNextCardRight);

surpriseMeBtn.addEventListener("click", () => {
	if (chicken.style.opacity === "0") {
		chicken.style.opacity = "1";
		imgDiv.classList.add("move-head");
		surpriseMeBtn.innerText = "Remove the chicken";
		surpriseMeBtn.classList.remove("surprise-me-btn");
		surpriseMeBtn.classList.add("hide-chicken-btn");
		isChickenVisible = true;
	} else if (chicken.style.opacity === "1") {
		chicken.style.opacity = "0";
		imgDiv.classList.remove("move-head");
		surpriseMeBtn.innerText = "Surprise me";
		surpriseMeBtn.classList.add("surprise-me-btn");
		surpriseMeBtn.classList.remove("hide-chicken-btn");
		isChickenVisible = false;
	}
});

window.addEventListener("resize", () => {
	description.style.height = "100%";
});
