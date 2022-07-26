difference = 0;
rightWristX = 0;
leftWristX =0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded() {
    console.log('PoseNet Is Initalized')
}

function draw() {
    background("#969A97");

    document.getElementById("text_side").innerHTML = "Width And Height of the text will be ="+difference+"px";
    textSize(difference)
    fill('#F90093');
    text("Muadh",30, 400)

}
function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX =" + leftWristX +" rightWristX ="+ rightWristX+"difference ="+ difference);
    }
}

