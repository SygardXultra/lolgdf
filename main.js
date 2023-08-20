function setup() {
    video= createCapture(VIDEO);
    video.size(600, 650);
    video.position(250, 100);

    canvas = createCanvas(550, 500);
    canvas.position(1100, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Pose Net has been Initialized! ')
}
function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
    }
}

function draw(){
    background("orange");
}