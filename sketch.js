function setup() {
    createCanvas(600, 400);
    background("gray");
  }
  
  function draw() {
    stroke("blue");
    fill("blue");
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 10);
    }
  }