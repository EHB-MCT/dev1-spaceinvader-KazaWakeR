"use strict";


spaceinvader();

function spaceinvader() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.fillStyle = "black";
   context.fillRect(300, 300, 300, 300);
   
   context.fillStyle = "#66FF66";
   context.fillRect(460,536,50,50);
   context.fillRect(400,536,50,50);
   context.fillRect(350,400,50,50);
   context.fillRect(500,400,50,50);
   context.fillRect(510,400,50,50);
   context.fillRect(340,400,50,50);
   context.fillRect(340,300,50,50);
   context.fillRect(399,300,50,50);
   context.fillRect(459,300,50,50);
   context.fillRect(520,300,50,50);

   context.fillRect(509,487,50,50);
   context.fillRect(459,487,50,50);
   context.fillRect(409,487,50,50);
   context.fillRect(359,487,50,50);


}