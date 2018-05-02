var bg_color = 0;
var shapes_color = 255;
var width_ = 600;
var height_ = 600;
var lines_thickness = 4;
var circle_radius = 128;
var circle_offset = 6;
var cross_lenght = 128;
var cross=1;
var temp_matrix = [0,0,0,0,0,0,0,0,0];

function setup(){
	var canvas = createCanvas(width_,height_);
	canvas.parent('canvas-holder');
	setComponents();
	frameRate(20);
}



function draw(){
	var cubesx = [round((width/3)/2),round((width/3)/2 + width/3), round((width/3)/2 + (width/3)*2)]
	var cubesy = [round((height/3)/2),round((height/3)/2 + height/3), round((height/3)/2 + (height/3)*2)]
	if(mouseX>=0 && mouseY>=0 && mouseX<=width && mouseY<=height){
		var dx = mouseX/(width/3);
		var dy = mouseY/(height/3);
		if (dx<1)dx=1;
		if (dy<1)dy=1;
		var x = Math.ceil(dx)-1;
		var y = Math.ceil(dy)-1;
		if(mouseIsPressed){
			if(cross && temp_matrix[y*3 + x]==0){	
				fill(255);
				translate(cubesx[Math.ceil(dx)-1],cubesy[Math.ceil(dy)-1]);
				rotate(PI/4);
				rect(-cross_lenght/2,-3,cross_lenght,6, 10);
				rotate(PI/2);
				rect(-cross_lenght/2,0,cross_lenght,6, 10);
				temp_matrix[y*3 + x]=1;
				cross=0;
				translate(0,0);
				rotate(PI/2);
			}else if (temp_matrix[y*3 + x]==0){
				fill(255);
				ellipse(cubesx[Math.ceil(dx)-1],cubesy[Math.ceil(dy)-1], circle_radius);
				fill(0);
				ellipse(cubesx[Math.ceil(dx)-1],cubesy[Math.ceil(dy)-1], circle_radius-circle_offset);
				temp_matrix[y*3 + x]=4;
				cross=1;
			}
			console.log(temp_matrix);
			if((temp_matrix[0]+temp_matrix[1]+temp_matrix[2])==3 || (temp_matrix[0]+temp_matrix[1]+temp_matrix[2])==12)win(temp_matrix[0]);
			if((temp_matrix[3]+temp_matrix[4]+temp_matrix[5])==3 || (temp_matrix[3]+temp_matrix[4]+temp_matrix[5])==12)win(temp_matrix[3]);
			if((temp_matrix[6]+temp_matrix[7]+temp_matrix[8])==3 || (temp_matrix[6]+temp_matrix[7]+temp_matrix[8])==12)win(temp_matrix[6]);
			if((temp_matrix[0]+temp_matrix[3]+temp_matrix[6])==3 || (temp_matrix[0]+temp_matrix[3]+temp_matrix[6])==12)win(temp_matrix[0]);
			if((temp_matrix[1]+temp_matrix[4]+temp_matrix[7])==3 || (temp_matrix[1]+temp_matrix[4]+temp_matrix[7])==12)win(temp_matrix[1]);
			if((temp_matrix[2]+temp_matrix[5]+temp_matrix[8])==3 || (temp_matrix[2]+temp_matrix[5]+temp_matrix[8])==12)win(temp_matrix[2]);
			if((temp_matrix[0]+temp_matrix[4]+temp_matrix[8])==3 || (temp_matrix[0]+temp_matrix[4]+temp_matrix[8])==12)win(temp_matrix[0]);
			if((temp_matrix[2]+temp_matrix[4]+temp_matrix[6])==3 || (temp_matrix[2]+temp_matrix[4]+temp_matrix[6])==12)win(temp_matrix[2]);
			if((temp_matrix[0]+temp_matrix[1]+temp_matrix[2]+temp_matrix[3]+temp_matrix[4]+temp_matrix[5]+temp_matrix[6]+temp_matrix[7]+temp_matrix[8])>=21)win(0);
		}
	}
}
function setComponents(){
	translate(0,0);
	background(0);
	fill(255);
	rect(width/3,0, lines_thickness,height, 10);
	rect(width/1.5,0, lines_thickness,height, 10);
	rect(0,height/3,width, lines_thickness, 10);
	rect(0,height/1.5,width, lines_thickness, 10);
	document.getElementById('win').innerHTML="";
}
function win(team){
	cross=1;
	temp_matrix = [0,0,0,0,0,0,0,0,0];
	if (team == 1)document.getElementById('win').innerHTML="Cross Win!!";
	if (team == 4)document.getElementById('win').innerHTML="Circle Win!!";
	if (team == 0)document.getElementById('win').innerHTML="Game tied!!";
	noLoop();
}

function reset(){
	temp_matrix = [0,0,0,0,0,0,0,0,0];
	setup()
	loop();
}
