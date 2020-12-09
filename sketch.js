var fb
 var mb


function setup() {
  createCanvas(800,400);
 fb =  createSprite(400, 200, 50, 50);
 mb =  createSprite(400, 300, 50, 50);
mb.shapeColor="yellow";
fb.shapeColor="yellow";

mb.velocityY=-1;
fb.velocityY=1;
}





function draw() {
  background(0);  
  
  /*mb.x=mouseX
  mb.y=mouseY
  if (fb.x-mb.x<fb.width/2+mb.width/2 
    &&  mb.x-fb.x<fb.width/2+mb.width/2
   &&  fb.y-mb.y<fb.height/2+mb.height/2 
   &&  mb.y-fb.y<fb.height/2+mb.height/2
   
   
   
    ) {
    mb.shapeColor="green";
    fb.shapeColor="green";
  }
  else{mb.shapeColor="yellow";
  fb.shapeColor="yellow";}*/
  
  if (fb.x-mb.x<fb.width/2+mb.width/2
  &&  mb.x-fb.x<fb.width/2+mb.width/2);
{mb.velocityX=mb.velocityX*(-1)
  fb.velocityX=fb.velocityX*(-1) 
}
  
  
  if ( fb.y-mb.y<fb.height/2+mb.height/2 
   &&  mb.y-fb.y<fb.height/2+mb.height/2)
   {mb.velocityY=mb.velocityY*(-1)
    fb.velocityY=fb.velocityY*(-1) 
  }
   
   
     





  drawSprites();
}