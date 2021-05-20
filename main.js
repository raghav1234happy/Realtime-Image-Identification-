function preload() {
}

function setup() {
    Canvas = createCanvas(300, 300);
    Canvas.center();
    video = createVideo(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 300, 300);
}