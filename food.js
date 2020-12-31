class FoodDog{
    constructor(x,y,width,height)
    {
      this.height=height;
     
      this.width=width;
     
      this.image=loadImage("images/Milk.png")
      
   
      
    }  
    display()
    {
   
  
     rect(this.xPosition,this.yPosition, this.width, this.height); 
     image(this.image,0,0,this.width,this.height)
    }  
    
  }
  