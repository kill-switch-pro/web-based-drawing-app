//to do ==> complete the message popup and try to learn more about canvas and its properties

  
const canvas = document.getElementById("can");
canvas.width = window.innerWidth -45;
canvas.height = window.innerHeight -50;
const ctx = canvas.getContext("2d");

//canvas.style.display="none";
function eraseWid(){
  er = document.getElementById("eawid").value
  //coor();
  erasewr();
  erase();
}

function lineWid(){
  w = document.getElementById("wid").value
  //coor();
  wd();
  color();
  //linewr();
}
/*
  function linewr(){
    document.getElementById("linv").innerHTML= w; 

  }*/
  
  function erasewr(){
    document.getElementById("eav").innerHTML= er; 

  }

function color(){
  c = document.getElementById("col").value
  //coor();
  clr();
  
 //canvas.style.display =" block"
}

function erase(){
  //eras = document.getElementById("erase")
  ctx.strokeStyle="#ffffff";
 ctx.lineWidth = er;
}

//let painting = false;
//important
function start(e){
  draw(e);
}

//function coor(){
  function wd(){
    ctx.lineWidth = w;
    document.getElementById("linv").innerHTML= w;
  }
    ctx.lineCap = "round";
//}
    function clr(){
    ctx.strokeStyle = c;
}

//most important
function draw(e){
  x = e.touches[0].clientX;
  y = e.touches[0].clientY;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}


function finished(){
ctx.beginPath();
}

function ltt(){
  color();
  wd();
}

function ett(){
  erase();
}
/*
function paint(){
  color();
  }
*/
console.log(ctx)
