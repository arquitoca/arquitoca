function NovaCor() {
document.getElementById("folha");
var canvas = document.getElementById("Canvas");
var canvas1 = document.getElementById("Canvas1");
var ctx = canvas.getContext("2d");
var ctx1 = canvas1.getContext("2d");

var NovovermelhoCOR = folha.NovovermelhoInput.value;
var NovoverdeCOR = folha.NovoverdeInput.value;
var NovoazulCOR = folha.NovoazulInput.value;

var NovovermelhoCONTR = 1*(folha.aFORMULA_R.value) + ((folha.bFORMULA_R.value) * NovovermelhoCOR);
var NovoverdeCONTR = 1*(folha.aFORMULA_G.value) + ((folha.bFORMULA_G.value) * NovoverdeCOR);
var NovoazulCONTR = 1*(folha.aFORMULA_B.value) + ((folha.bFORMULA_B.value) * NovoazulCOR);
	
	
//==============================================================================================
//-----------------------------------------------------------------------	
//DESENHO DA COR
ctx1.beginPath();
ctx1.fillStyle = "rgb(" + NovovermelhoCOR + "," + NovoverdeCOR + "," + NovoazulCOR + ")";
ctx1.fillRect(0,0,canvas1.width,canvas1.height);	

//DESENHO DO CONTRASTE
ctx1.beginPath();
ctx1.fillStyle = "rgb(" + NovovermelhoCONTR + "," + NovoverdeCONTR + "," + NovoazulCONTR + ")";
ctx1.fillRect(0,0,(canvas1.width)/2,canvas1.height);

//-----------------------------------------------------------------------


var img = document.getElementById("b");
ctx.drawImage(img,0,0, 500, 250);

ctx.beginPath();
ctx.moveTo(7,7);
ctx.lineTo(33,7);
ctx.lineTo(103,46);
ctx.lineTo(103,206);
ctx.lineTo(7,245);
ctx.lineTo(7,7);
ctx.fillStyle = "rgb(" + NovovermelhoCOR + "," + NovoverdeCOR + "," + NovoazulCOR + ")";
ctx.fill();

ctx.fillStyle = "rgb(" + NovovermelhoCONTR + "," + NovoverdeCONTR + "," + NovoazulCONTR + ")";
ctx.fillRect(103,70,330,131);

var img2 = document.getElementById("c");
ctx.drawImage(img2,0,0, 500, 250);

var img1 = document.getElementById("a");
ctx.drawImage(img1,0,0, 500, 250);

//texto informando RGB no contraste novo
ctx.font = "15px calibri";
ctx.fillStyle = "black";
//ctx.fillText ('R: ' + NovovermelhoCONTR, canvas.width - 60, canvas.height - 50);
//ctx.fillText ('G: ' + NovoverdeCONTR, canvas.width - 60, canvas.height - 30);
//ctx.fillText ('B: ' + NovoazulCONTR, canvas.width - 60, canvas.height - 10);

ctx.font = "25px calibri";
ctx.fillStyle = "gray";
//ctx.fillText ('cor', 460, 30);
//ctx.fillText ('contraste', 400, 400);
}