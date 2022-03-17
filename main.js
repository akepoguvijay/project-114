nose_X=0;
nose_Y=0;

function preload()
{

}

function setup()
{
    canvas=createCanvas(400,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('poses',gotPoses);
}

function take_snapshot()
{
    save('lipstickFilterapp.png');
}



function draw()
{
    image(video, 0, 0, 300, 300);
}

function modelLoaded()
{
    console.log('poseNet is Initilized');
}
 
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_X=results[0].pose.nose.x-25;
        nose_y=results[0].pose.nose.y-25;
    }
}

