var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  ground = createSprite(240, 400, 490, 20);
}

function draw() {
  background(0,0,0);  

  ground.display();

  drawSprites();
}

for(var a = 0; a <=width; a = a+80){
  divisions.push(new Division(a, height-divisionHeight/2, 10, divisionHeight));
}

for(var b = 40; b <=width; b = b+50){
  plinkos.push(new Plinkos(b, 75));
}

for(var c = 15; c <=width; c = c+50){
  plinkos.push(new Plinkos(c, 175));
}

for(var d = 65; d <=width; d = d+50){
  plinkos.push(new Plinkos(d, 275));
}

for(var e = 90; e <=width; e = e+50){
  plinkos.push(new Plinkos(e, 375));
}

if(frameCount%60 === 0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
}

for(var a = 0; a < divisions.length; a++){
  divisions[a].display();
}

for(var b = 0; b < plinkos.length; b++){
  plinkos[b].display();
}

for(var c = 0; c < plinkos.length; c++){
  plinkos[c].display();
}

for(var d = 0; d < plinkos.length; d++){
  plinkos[d].display();
}

for(var e = 0; e < particles.length; e++){
  particles[a].display();
}