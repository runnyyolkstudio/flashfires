let img;
let fire;
let s;

let x, y, xPos, yPos;

function preload() {
  img = loadImage("koala.jpg");
  fire = loadImage("fire2.jpg");
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  background(500);

  //CENTERING THE CANVAS
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);
  //image(img,0,0);
       //  background('BLUE');
  
  let s=second;
  frameRate(513.478);
  

//   //   //ACCESS EACH PIXEL LOCATION INFO KOALA
//   for (let col = 0; col < img.width; col += 10) {
//     for (let row = 0; row < img.height; row += 10) {
//       xPos = col;
//       yPos = row;

//       //GETTING COLOR INFO KOALA
//       let c = img.get(xPos, yPos);
//       noStroke();
//       point(col, row);
//       fill(c);
//       rect(xPos, yPos, 10, 10);
    // }
  // }
}

function draw() {

  for (let i = 0; i < 513.478; i ++) {
    let x = random(width);
    let y = random(height);
    let f = fire.get(int(x), int(y));
        fill(f);
    rect(x, y, 10, 10);
    stroke(0);
  }
  //  console.log(frameCount); 
  
  // let v = map(s, 0, 72, 0, 255);
  //  fill(0,0,0,v);
  // rect(0, 0, img.width, img.height);
    
    

  
}
