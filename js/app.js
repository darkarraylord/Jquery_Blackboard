//Problem: User interaction causes no change to application
//Solution: Add interation to application

//Plan Prepare Perform Perfect

//Plan:
//When clicking on a control list items
	//Deselect sibling elements
	//Select Clicked element

//When newColor is pressed
	//Show color selector

//When Color Sliders change
	//update the newColor span

//When addColor is pressed
	//Append the color to ul controls
	//Select the newly added Color

//upon mouse event on the canvas
	//Draw lines

var color = $('.selected').css('background-color');
$canvas = $("canvas");
var context = $canvas[0].getContext("2d");
$controls = $('.controls');
var lastEvent;
var mouseDown = false;

$controls.on("click", "li", function(){
	//Quando uma cor for selecionada
	//remover classe de select as outras e adininar na atual
	$(this).siblings().removeClass("selected");
	$(this).addClass("selected");
	color = $(this).css('background-color');
});
//When <button> New color is pressed show color picker: newColor
$button = $("#revealColorSelect");
$colorSelectWindow = $("#colorSelect").css("display");
console.log($("#colorSelect").css("display"));

//O
$button.click(function(){
	changeColor();
	//OBS All this can be changed to: $("#colorSelect").toggle();
	if($("#colorSelect").css("display") == "none"){
		$("#colorSelect").css("display","block");
	}else{
		$("#colorSelect").css("display","none");
	}

	
});
////When color sliders change apply its color to #newColor background-color: rgb(0,0,255);
function changeColor(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgb("+r+","+g+","+b+")");
}
$("input[type=range]").change(changeColor);

//When Add new Color is pressed
	//Add <li> to .controls with background of the newly selected color:
$("#addNewColor").click(function(){
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
});

//On mouse events Draw lines on <canvas>
	//Select Canvas - see contect variable at the begining og the code
	

	$canvas.mousedown(function(e){
		lastEvent = e;
		mouseDown = true;
	}).mousemove(function(e){
		if(mouseDown){
			//Initiate draw
			context.beginPath();
			//Draw Lines
			context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
			context.lineTo(e.offsetX, e.offsetY);
			context.strokeStyle = color;
			context.stroke();
			lastEvent = e;
		}
	}).mouseup(function(){
		mouseDown = false;
	}).mouseleave(function(){
		mouseDown = false;
	});

	//Mouse Events:
		//mouseDown()
		//mouseMove()
		//mouseUp()

















