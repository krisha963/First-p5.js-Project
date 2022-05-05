function preload(){
}
function setup(){
    canvas= createCanvas(1000,600);
    canvas.position(110,150);
    video= createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,180,100,640,400);
    tint(tint_color);
    fill(0,255,0);
    rect(30,30,940,20);
    fill(0,255,0);
    rect(950,30,20,540);
    rect(30,550,940,20);
    rect(30,30,20,540);
    fill(255,0,0);
    circle(40,50,70);
    circle(950,40,70);
    circle(40,550,70);
    circle(950,550,70);
}
function take_snapshot(){
    save("student_name.png");
}