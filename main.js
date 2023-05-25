function preload()
{
}

function setup()
{
    canvas=createCanvas(550,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}


function draw()
    {
image(video,0,0,600,500);
fill('#90ee90');
stroke('#ffb6c1');
    }




