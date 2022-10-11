"use strict";



spaceinvader();

function spaceinvader() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.fillStyle = "black";
   context.fillRect(0, 0, 300, 300);
   
   context.fillStyle = "#66FF66";


   //LEFT LINE
   context.fillRect(25,26,50,50);

   context.fillRect(25,70,50,50);

   context.fillRect(25,120,50,50);

   context.fillRect(25,170,50,50);

   context.fillRect(25,220,50,50);
  
   //RIGHT LINE
  
   context.fillRect(221,26,50,50);

   context.fillRect(221,76,50,50);

   context.fillRect(221,126,50,50);

   context.fillRect(221,176,50,50);

   context.fillRect(221,220,50,50);

   context.fillRect(221,221,50,50);

   //MID DOTS//

   context.fillRect(123,26,50,50);

   context.fillRect(123,170,50,50);

   
}