let lines ='(EF04GE06) Identificar e descrever territórios \nétnico-culturais existentes no Brasil, tais como\nterras indígenas e de comunidades remanescentes\nde quilombos, reconhecendo a legitimidade da \ndemarcação desses territórios.'
let lines1 ='Neste jogo, ajude ele a sobreviver . eliminando os \nsoldados inimigos.';
var x = 10
var y = 216
var xt=50
var yt=50
var xaltura = 70
var ylargura = 110
var opção = 1;
var tela = 0;
var pontos= 0;
var vidas= 3
var xn = 0
var xa = 0
var xa1= 300
var tx= 300
var ty=200
var txt=40
var tyt=70
var txf=30
var tyf=30
var yc=0
var yc1=-25
var xf;
var yf;
var disparofull= false
let img,img2,prog,edu,img3,img4,img5,nuvem,fle,ter1,agu,arv,ped,arv1,chu,sd;

function preload() {
  img = loadImage("fundo1.2.png");
  img2=loadImage("bg_forest.png");           
  prog=loadImage("programador1.png")
  edu=loadImage("educador1.png")
  img3=loadImage("fundo.cre.png")
  img4=loadImage("fundo.22.png");
  img5=loadImage("indioJ.png")
  nuvem=loadImage("forest_pack_107.png")
  fle=loadImage("flecha1.png.png")
  ter1=loadImage("forest_pack_03.png")
  sd=loadImage("soldado1.png")
  agu=loadImage("forest_pack_89.png")
  arv=loadImage("forest_pack_92.png")
  arv1=loadImage("forest_pack_97.png")
  ped=loadImage("forest_pack_105.png")
  mat=loadImage("forest_pack_103.png")
  chu=loadImage("chuva.png")
  
}

function setup() {
  createCanvas(300,300);
}
  function draw(){
  background(50, 90);
  if (tela == 0)
    menu();
  if (tela == 1)
    fase1()
  if (tela == 2)
    instruções();
  if (tela == 3)
    Créditos();
  if (tela== 4)
    Comandos();
  
}
function menu() {
  image(img, 0, 0)
  fill(80)
  strokeWeight(4);
  stroke(50, 90, 50);
  rect(xaltura, ylargura, 170, 40)
  fill(60,200,60);
  textSize(33);
  text("Sobrevivendo\nna selva", 40, 50)
  fill(222)
  textSize(28);
  text("Jogar", 90, 140);
  text("Instruções", 90, 180);
  text("Créditos", 90, 220)
  text("Comandos",90,260);
}
function fase1() {
  fill(200)
  strokeWeight(4);
  stroke(10)
  image(img2, 0,0,300,300)
  image(ped,150,220,25,40)
  image(arv,230,190,40,70)
  image(arv1,100,190,40,70)
  image(arv,40,190,40,70)
  image(arv,189,190,40,70)
  image(ped,190,240,34,20)
  image(ped,30,200,30,60)
  image(mat,230,230,50,30)
  image(mat,97,230,50,30)
  image(mat,33,230,50,30)
  xa=xa-1
  image(ter1,0,260,300,30)
  image(sd,tx,ty,txt,tyt)
  tx-=2.5
  if(tx<-10){
    vidas-=1
    tx=random(120,500)}
  image(agu,xa,270,310,30)
  if(xa<-300){
    xa=0}
  image(agu,xa1,270,310,30)
  xa1=xa1-1
  if(xa1<0){
    xa1=300}
  if(pontos<5000){
  image(nuvem,xn,30,70,70)
  xn=xn+1;
  if(xn>300){
    xn=-random(500);}
  }
  textSize(12);
  text("Pontos : "+pontos, 20,30)
  text("vidas: "+ vidas,170,30)
  if(keyIsDown(LEFT_ARROW))
    x-=5
   if(keyIsDown(RIGHT_ARROW))
     x+=5
  if(dist(tx,ty,xf,yf)<txt+tyt+txf+tyf-120){
    tx==0==random(300,320)
    if(tx<xf){
        pontos=pontos+25
      tx=random(100,500)
    }
  }
  if(tx<-40 && tx>-80){
    pontos=pontos-5
    pontos=pontos
  }
  if(pontos>=1000){
    tx-=3
    background(50, 90)
    fill(222)
  image(chu,-10,yc1,350,300)
  yc1+=5
  if(yc1>300){
    yc1=-75}
  image(chu,-10,yc-100,350,300)
  yc+=5
  if(yc>300){
    yc=0}}
    image(img5,x,y,xt,yt)
      if(x>300){
        x=0}
  if(keyIsDown(CONTROL) && disparofull==false){
    xf=x
    yf=y;
  disparofull= true
    pontos=pontos+10
  }
  if(disparofull== true){
  image(fle,xf,yf,txf,tyf)
    xf=xf+5
    if(xf>300){
      xf=x
      disparofull= false}
  }
if(vidas<1){
  background(50)
  textSize(40)
  fill(222)
  text("game over",40,150)
  textSize(20)
  fill(39,300,10)
  text("pontos:"+pontos,90,30)
  fill(222)
  text("aperte ESC ",40,270)
  ty=10
}
}
 
function instruções() {
  image(img3,0,0)
  fill(35,200,40)
  textSize(35);
  text("instrucões", 75, 50)
  textSize(12)
  fill(300)
  strokeWeight(3);
  stroke(10)
  textLeading(15)
  textSize(12)
  text(lines,15,130)
  textLeading(15)
  textSize(12)
  text(lines1,15,240); 
  textSize(20)
  fill(300,100,90)
  text("4º ano ensino fundamental\nGeografia",30,80)
  text("Sobre:",30,220);
  
}
function Comandos(){
  fill(222)
  textSize(35);
  text("comandos", 75, 50)
  fill(222)
  textSize(20)
  fill(300,100,90)
  text("aperte CONTROL: ",30,80)
  text("aperte RIGHT ,LEFT:",30,190);
  fill(222)
  textSize(12)
  text(" para atirar flechas e obter       pontuação",30,100)
   text("mover personagem para os lados",30,210) 
}
function Créditos() {
  image(img4,0,0)
  strokeWeight(3);
  stroke(10)
  fill(35,200,40)
  textSize(35);
  text("Créditos",75, 50);
  fill(300)
  textSize(15)
  image(prog,75,80);
  text("Lucas de almeida Araujo",75,150)
  image(edu,75,180);
  text("Nyedson Barbosa",75,250)
  strokeWeight(3);
  stroke(35,200,40)
  fill(10)
  textSize(20)
  text("Programador",130,100)
  text("Educador",130,200)
}
function keyPressed() {
  if (key == "ArrowUp" && ylargura > 120) {
    ylargura = ylargura - 40  
    opção = opção - 1
  }
  if (key == "ArrowDown" && ylargura <= 220) {
    ylargura = ylargura + 40;
    opção = opção + 1
  }
  if (key == "Enter") {
    tela = opção;
  }
  if (key == "Escape") {
    tela = 0;
    pontos= 0;
    vidas=3;
    x=10;
    ty=200;
  }
}