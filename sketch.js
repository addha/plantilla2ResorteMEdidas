//Variables Globales 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;
var fondo = "./Imagenes/bg.png";
var fondo_img;
var pisoooo, pisoimg;
var bace, baceDeLaBace;
var caja, caja1, caja2, caja3, caja4;
var palitos, palitos1, palitos2, palitos3, palitos4;
var chancho,chancho1,chancho2;
var resortera, resortera2;
var pajaro;
var punt=0;

function preload(){
    fondo_img = loadImage(fondo);
    pisoimg = loadImage("./Imagenes/ground.png");
}
function setup(){
    createCanvas(750,540);
    engine = Engine.create()
    world = engine.world;
    bace = new Piso(0,370,200,200);
    pisoooo =new Piso(0,470,950,250);
    caja = new Boxhija(654,260,50,50);
    caja1 = new Boxhija(576,260,50,50);
    caja2 = new Boxhija(616,328,50,50);
    caja3 = new Boxhija(689,328,50,50);
    caja4 = new Boxhija(540,328,50,50);
    palitos = new Palitoshijos(615,295,20,200,PI/2);
    palitos1 = new Palitoshijos(615,363,20,200,1.57);
    palitos2 = new Palitoshijos(600,421,20,100,0);
    palitos3 = new Palitoshijos(630,421,20,100,0);
    palitos4 = new Palitoshijos(615,226,20,129,PI/2);
    chancho = new Chancho(615,328,30,30);
    chancho1 = new Chancho(654,260,30,30);
    chancho2 = new Chancho(576,260,30,30);
    //resortera = new Resortera(70,330,55,94);
    pajaro = new Red(30,237);

    resortera = new Resortera(pajaro.body,{x:100, y:100});
}
function draw(){
    //if(fondo)
    background(fondo_img);
    text("pajaros enojados",40,70);
    textSize(35);
    fill("white");
    text("puntuacion:"+punt,420,70);

    // importante generar  la maquina virtual esto nos falto para que puedas hacer uso de las librerias y de varables  de motor fisico
    Engine.update(engine);

    pisoooo.display();
    bace.display();
    Engine.update(engine);
    caja.display();
    caja1.display();
    caja2.display();
    caja3.display();
    caja4.display();
    palitos.display();
    palitos1.display();
    palitos2.display();
    palitos3.display();
    palitos4.display();
    chancho.display();
    chancho1.display();
    chancho2.display();
    resortera.display();
    pajaro.display();
}