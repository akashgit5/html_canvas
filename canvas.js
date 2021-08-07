var canvas= document.querySelector('canvas')
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
console.log(canvas)
var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

r=Math.random()+1.5; //random variable for adjusting sun's radius
m=Math.random()+1.5;

function RndIntGen(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
} // random integer number generator

function sun()
    {
        c.arc(170, 90, r*40, 0, 2 * Math.PI, false);
        var grd = c.createRadialGradient(170, 90, 5, 110, 110, r*100);
        grd.addColorStop(0, 'yellow');   
        grd.addColorStop(1, 'red'); 
        c.fillStyle = grd;
        c.fill();
        c.stroke();
    }
function titl()
    {
        c.font = "bold 29px Arial";
        c.fillText("Akash's Canvas!", 520, 30);
        
    }
titl();
sun();


function drawHill1() {    //drawing the left hill, base starting from left side to near half of screen width
    c.beginPath();
    var grads = c.createRadialGradient(canvas.width*.48, canvas.height-195, 0,
    canvas.width*.48, canvas.height-195, 450);
    grads.addColorStop(0, "#A0552D");
    grads.addColorStop(1, "#F4A761");
    c.moveTo(3, canvas.height-200);
    c.lineTo(canvas.width*.48, canvas.height-195);
    c.lineTo(canvas.width*.24,(canvas.height-(.8*canvas.height))*RndIntGen(1,4));//hill size randomized
    c.closePath();
  // the outline
    c.lineWidth = 10;
    c.strokeStyle = '#8B4613';
    c.stroke();
  // the fill color
    c.fillStyle = grads;
    c.fill();
  }
  drawHill1();
function drawHill2() {  //drawing the right hill, base starting from  near half of screen width to right
    c.beginPath();
    var grads = c.createRadialGradient(canvas.width*.50, canvas.height-200, 0,
    canvas.width*.55, canvas.height-200, 450);
    grads.addColorStop(0, "#F4A460");
    grads.addColorStop(1, "#8B4713");
    c.moveTo(canvas.width*.49,canvas.height-200);
    c.lineTo(canvas.width*.99, canvas.height-195);
    c.lineTo(canvas.width*.76,(canvas.height-(.9*canvas.height))*RndIntGen(1,5));//hill size randomized
    c.closePath();
  // the outline
    c.lineWidth = 10;
    c.strokeStyle = '#800000';
    c.stroke();
  // the fill color
    c.fillStyle = grads;
    c.fill();
  }
  drawHill2();

function land() // lower landscape, with randomized changing colors!
{
  c.beginPath();
  c.rect(0, canvas.height-200, canvas.width, canvas.height); 
  if (RndIntGen(1,4)==2)  //randomized changing colors!
  {
    c.fillStyle = "#808000";
    c.fill();
  } else if (RndIntGen(1,4)==3)
  {
    c.fillStyle = "#3CB381";
    c.fill();
  } else 
  {
    c.fillStyle = "green";
    c.fill();
  }
  c.lineWidth = 5;
  c.strokeStyle = "black";
  c.stroke();
}
land()

//river side arc
var x=canvas.width*.28
  c.beginPath();
  c.arc(canvas.width*.245,canvas.height-198, 307, 0, .6 * Math.PI, false);
  c.lineWidth = 26;
  c.strokeStyle = "#006400";
  c.stroke();

function river_extend(){ // extends the river to the right side | flooding animation!
  requestAnimationFrame(river_extend);
  c.beginPath();
  c.arc(x,canvas.height-196, 307, 0, .6 * Math.PI, false);
  c.lineWidth = 100;
  c.strokeStyle = "blue";
  c.stroke();
  x+=r+2
}
river_extend()

function tree_func(x, y) {
  c.fillStyle = "#006400";
  c.beginPath();
  c.moveTo(x, y);
  c.lineTo(x + 70, y-70);
  c.lineTo(x + 140, y);
  c.lineWidth = 10;
  c.strokeStyle = '#9ACD32';
  c.stroke();
  c.fill();
  }
function trunk(z)
  {
  c.fillStyle = "brown";
  c.fillRect(z, canvas.height-220, 30, 100);
  }
function trunk1(z)
  {
  c.fillStyle = "brown";
  c.fillRect(z, canvas.height-130, 25, 90);
  }
tree_func(30, canvas.height-250); 
tree_func(30, canvas.height-220); 
trunk(85)
tree_func(100, canvas.height-270); 
tree_func(100, canvas.height-250); 
tree_func(100, canvas.height-220); 
trunk(150)
tree_func(canvas.width*.3, canvas.height-220);
trunk(canvas.width*.33)
trunk1(canvas.width*.73)
tree_func(canvas.width*.7, canvas.height-100);
trunk1(canvas.width*.84)
tree_func(canvas.width*.81, canvas.height-110);

//vegetation added in right hill base
var bb=canvas.width*.42;
var yy=canvas.height-195;
function hill_veg(){
  requestAnimationFrame(hill_veg);
  c.beginPath();
  c.fillStyle = "#006410";
  c.beginPath();
  c.moveTo(bb, yy);
  c.lineTo(bb + 10, yy-9);
  c.lineTo(bb + 140, yy-5);
  c.lineWidth = 5;
  c.strokeStyle = '#006500';
  c.stroke();
  c.fill();
  bb+=r
}
hill_veg();


function cloud() {
  l=RndIntGen(2,4)*.5; //cloud size scale randomized
  c.lineWidth = 3;
  c.fillStyle = '#E0FFFF';
  c.beginPath();
  c.arc(70, 150, 65*l, 0, 2*Math.PI);
  c.stroke();
  c.beginPath();
  c.arc(130, 160, 55*l, 0, 2*Math.PI);
  c.stroke();  
  c.beginPath();
  c.arc(100, 180, 45*l, 0, 2*Math.PI);
  c.stroke();      
  c.beginPath();
  c.arc(70, 150, 65*l, 0, 2*Math.PI);
  c.fill();
  c.beginPath();
  c.arc(130, 160, 55*l, 0, 2*Math.PI);
  c.fill();
  c.beginPath();
  c.arc(100, 180, 45*l, 0, 2*Math.PI);
  c.fill();
}
cloud();