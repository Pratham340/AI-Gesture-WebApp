noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas=createCanvas(550,550);
    canvas.position(700,120);
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Loaded!...');
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
  }
}
function draw(){
  background('#fcba03');
  document.getElementById("width").innerHTML = "Width And Height of a Square will be = " + difference +"px";
fill('#3273a8');
stroke('#3273a8');
square(noseX, noseY, difference);
}
