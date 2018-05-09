var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();	

var squares = document.querySelectorAll(".square");
var rgbVal = document.getElementById("rgb-val");
var messageDisplay = document.querySelector("#message-display");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var allButtons = document.querySelectorAll("button");
var modeButtons = document.querySelectorAll(".mode");

rgbVal.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
	// sets square to a color in list of randomly generated colors
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			changeColor(pickedColor);
			resetButton.textContent = "Play Again?"
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
};

// event listener for new colors button
resetButton.addEventListener("click", function() {
	reset();

});

// easy/hard mode interactivity
for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		for(var j = 0; j < modeButtons.length; j++){
			modeButtons[j].classList.remove("selected");
		};
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
};

// change color of navbar buttons on mouseover
allButtons.forEach(button => {
	button.addEventListener("mouseover", function(){
	button.classList.add("hover-color");
	});
});

// remove color of navbar buttons on mouseout
allButtons.forEach(button => {
	button.addEventListener("mouseout", function(){
	button.classList.remove("hover-color");
	});
});

function reset() {
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change rgbval color display to match picked color
	rgbVal.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block"
		} else {
			squares[i].style.display = "none";
		};
		
	};
	h1.style.backgroundColor = "steelblue";
};
	
// changes the color of all squares and the header to the color 
// of the correctly picked square when it is clicked on 
function changeColor(color) {
	squares.forEach(square => {
		square.style.backgroundColor = color;
	});
	h1.style.backgroundColor = color;
};

// picks one color randomly from the grid of colors
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

// generates a list of n rgb value strings
function generateRandomColors(n) {
	var colorArray = [];
	for(var i = 0; i < n; i++) {
		color = randomColor();
		colorArray.push(color);
	};
	return colorArray;
};

//generates a random rgb value string
function randomColor() {
	r = Math.floor(Math.random() * 256); 
	g = Math.floor(Math.random() * 256); 
	b = Math.floor(Math.random() * 256); 
	return "rgb(" + r + ", " + g + ", " + b + ")";
};
