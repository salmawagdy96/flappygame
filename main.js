console.log("connected")
document.querySelector(".newGame").addEventListener("click",function(){
document.querySelector(".welcome").style.display="none";
document.querySelector(".canvas").style.display="block";
});

const canvas=document.querySelector(".canvas");
const ctx=canvas.getContext("2d");

const background = new Image();
const foreground = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();

background.src="Images/background.jpg";
foreground.src="Images/foreground.jpg";
pipeNorth.src="Images/pipeNorth.png";
pipeSouth.src="Images/pipeSouth.png";

var distance = 100;
var pipX=canvas.width;
pipes=[];
pipes[0]={
    x:pipX,
    y:0
};
function draw(){
    
    ctx.drawImage(background,0,0);

    for(var i=0;i<pipes.length;i++)
    {
    ctx.drawImage(pipeNorth,pipes[i].x,pipes[i].y);
    ctx.drawImage(pipeSouth,pipes[i].x,pipeNorth.height+distance+pipes[i].y);
    pipes[i].x--;
    }

    if(pipes[pipes.length-1].x==100){
        pipes.push({
            x:pipX,
            y:Math.floor(pipeNorth.height*Math.random())-pipeNorth.height
    });
    }
   
    requestAnimationFrame(draw);
}


window.onload=function(){
draw();
}