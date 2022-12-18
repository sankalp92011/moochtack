noseX=0;
noseY=0;
function preload(){
clownose=loadImage('https://i.postimg.cc/MGbGz9xS/m.png ');    //https://i.postimg.cc/yYjmph9m/Clown-Nose-Download-PNG-Image.png
//lipstack=loadImage('');//https://i.postimg.cc/50s1jY1N/l1.png
}
function setup()
{
canvas=createCanvas(300,300);
canvas.center();
vidio=createCapture(VIDEO);
vidio.size(300,300);
vidio.hide();
posenet=ml5.poseNet(vidio,modelloadedbysankalp);
posenet.on('pose',gotposses);
}
function draw()
{
image(vidio,0,0,300,300);
fill(250,0,0);
stroke(250,0,0);
circle(noseX,noseY,0);
image(clownose,noseX -20,noseY -1,35,35);
//image(lipstack,noseX -19,noseY +15,35,35);
}
function modelloadedbysankalp(){
    console.log("model is connect")
}
function gotposses(result){
if(result.length>0){
    console.log(result);
    noseX= result[0].pose.nose.x;
    noseY= result[0].pose.nose.y;
}
}
