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

   //LEFT LINE//

   context.fillRect(325,526,50,50);
   
   context.fillRect(325,476,50,50);

   context.fillRect(325,426,50,50);

   context.fillRect(325,376,50,50);


   context.fillRect(325,326,50,50);


   //RIGHT LINE//

   context.fillRect(520,326,50,50);

   context.fillRect(520,470,50,50);

   context.fillRect(520,370,50,50);

   context.fillRect(520,420,50,50);

   context.fillRect(520,520,50,50);

   context.fillRect(520,527,50,50);


   //MID DOTS//





}