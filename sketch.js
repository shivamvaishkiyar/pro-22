
var skyImg,sky;
var downloadImg,download;
var enemyImg,enemy,enemyGroup;
var bitcoinImg,bitcoin,bitcoinGroup;
var gameStsate = "play"



function preload(){
skyImg= loadImage(sky.jpg);
downloadImg = loadImage(download.jpg);
enemyImg = loadImage(enemy.jpg);
bitcoinImg = loadImage(bitcoin.jpg);


}

function setup() {
 createCanvas(600,600);

 sky=createSprite(300,300);
 sky.addImage("sky",skyImg);
 sky.velocityY=1;

 enemyGroup = new Group();
 bitcoinGroup = new Group();

 download = createSprite(200,190,50,50)
 download.scale = 0.3
 download.addImage("download",downloadImg)
}

function draw() {
 background(225)
if(sky.y >400){
  sky.y = 300
}



 drawSprites();
}