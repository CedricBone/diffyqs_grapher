var func 

function setup() {
  createCanvas(600, 600);
  func = new Functions()
}

function draw() {
  background(0, 91, 187);
  func.display(func.freeDampedMotion)
}