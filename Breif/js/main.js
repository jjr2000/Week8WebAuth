//define vars
var mousePressed = false;
var lastX, lastY, my_context;

var linecolour = "#000000";
var line_widthval = 1
var line_width;
var texture;
var canvas;

// add othe global vars ready for input fields

//create an image programatically for drawing 

var crayonTextureImage = new Image();
crayonTextureImage.src = "assets/crayon-texture.png";
var crayon = false;

function Init() {
	//get all elements and and assignt to global variables i.e get the check box names texture
	texture = document.getElementById("texture");
	
	// get canvas
	// getContext("2d");
	//set canvas to be full screen (window.innerWidth)

	// mouse events for changes in input fields
    texture.addEventListener("change", (function(e) {
		
		// create a toggle switch to chnage a var which will ue an image or not
        if (texture.checked == false) {
            //crayon = false;
        } else {
            //crayon = true;
        }
    }));
	
	// update the line_width stroke width from input on change
	//remember you have already got the element but need get the value.
	//line_widthval = line_width.value;
   
	
	// get line_colour value from html colour input on change
    

	
	//mouse down listener with ananymouse function to capture the event data
	// event data can be the mouse x and y to pass to your draw function
	// you also need to set the boolean to true to allow drawing with mousePressed = true;

    

    //mouse move
	// call draw function
	// check if mouse pressed
                
  
	
	//mouse mouseup
	// stop drawing with  with mousePressed = false;
   
	
	//mouseleave
    canvas.addEventListener("mouseleave", (function(e) {
        mousePressed = false;
    }));
}

//draw function
function Draw(x, y, isDown) {

    if (isDown) {
        //check if image is to draw on canvas
    }
	//must upate lastx and y to use for move to and line to
    lastX = x;
    lastY = y;
}

function clearArea() {
    // Use the identity matrix while clearing the canvas
    my_context.clearRect(0, 0, my_context.canvas.width, my_context.canvas.height);
}

window.onload = function()
{
	console.log('loaded');
	Init();
}