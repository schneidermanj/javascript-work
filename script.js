// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

// For the 1st box (index = 0), change the background color to "blue".
boxes[0].style.backgroundColor = "green";

// For the 3rd box (index = 1), change the background color to "yellow".
boxes[1].style.backgroundColor = "purple";

// For the 3rd box (index = 2), change the background color to "yellow".
boxes[2].style.backgroundColor = "#191919";

// For the 4rd box (index = 3), change the background color to "blanchedalmond".
boxes[3].style.backgroundColor = "blanchedalmond";

// For the 5rd box (index = 4), change the background color to "default".
boxes[4].style.backgroundColor = "default";

// Variable to hold the current left margin.
var leftMargin0 = 0;
var leftMargin1 = 0;
var leftMargin2 = 0;
var leftMargin3 = 0;
var leftMargin4 = 0;

// Variable to hold the current top margin.
var topMargin = 0;

// Variable used to add to the left margin.
var moveAmount0 = 5;
var moveAmount1 = 10;
var moveAmount2 = 15;
var moveAmount3 = 20;
var moveAmount4 = 25;

function boxClicked0() {
    leftMargin0 += moveAmount0;
    boxes[0].style.marginLeft = leftMargin0 + "px";
}
boxes[0].addEventListener("click", boxClicked0);

function boxClicked1() {
 leftMargin1 += moveAmount1;
 console.log("Hey, box clicked!");
 boxes[1].style.marginLeft = leftMargin1 + "px";
}
boxes[1].addEventListener("click", boxClicked1);

function boxClicked2() {
 leftMargin2 += moveAmount2;
 console.log("Hey, box clicked!");
 boxes[2].style.marginLeft = leftMargin2 + "px";
}
boxes[2].addEventListener("click", boxClicked2);

function boxClicked3() {
 leftMargin3 += moveAmount3;
 console.log("Hey, box clicked!");
 boxes[3].style.marginLeft = leftMargin3 + "px";
}
boxes[3].addEventListener("click", boxClicked3);
 
function boxClicked4() {
 topMargin += moveAmount4;
 boxes[4].style.marginTop = topMargin + "px";
}
boxes[4].addEventListener("click", boxClicked4);

