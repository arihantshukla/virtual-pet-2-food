//Create variables here
var dog,dogImage,happydog,happydogImage
var database,foodStock,Food,foodStockRef,milk
function preload()
{
  //load images here
  dogImage=loadImage("images/dogImg.png")
  happydogImage=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500)
  database=firebase.database()
  dog=createSprite(200,200,20,20)
  dog.addImage(dogImage)
  dog.scale=0.2
  foodStockRef=database.ref('Food')
  foodStockRef.on("value",readStock)
  milk= new FoodDog(20,20,120,120)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  dog.addImage(happydogImage)
}
fill("white")
text("Dog:",200,20)
fill("white")
text("Press Up Arrow To Feed Drago Milk",200,120)
milk.display()
drawSprites();
  //add styles here

}
function readStock(data){
foodStockRef=data.val()
}
function writeStock(){
  database.ref("/".update({
    Food:x
  }))
}



