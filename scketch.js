function setup() {
  createCanvas(400, 400);
  background("#FFC107")
}

function draw() {
  stroke("black");
  fill("purple");
  
  
  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
