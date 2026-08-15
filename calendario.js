const meses = [
"Janeiro",
"Fevereiro",
"Março",
"Abril",
"Maio",
"Junho",
"Julho",
"Agosto",
"Setembro",
"Outubro",
"Novembro",
"Dezembro"
];

const hoje = new Date();

const ano = hoje.getFullYear();

const mes = hoje.getMonth();

const diaAtual = hoje.getDate();

document.getElementById("mesAno").innerHTML =
meses[mes] + " " + ano;

const diasContainer =
document.getElementById("dias");

const primeiroDia =
new Date(ano, mes, 1).getDay();

const diasMes =
new Date(ano, mes + 1, 0).getDate();

let inicio = primeiroDia - 1;

if(inicio < 0){

inicio = 6;

}

for(let i=0;i<inicio;i++){

const vazio=document.createElement("div");

diasContainer.appendChild(vazio);

}

for(let dia=1;dia<=diasMes;dia++){

const div=document.createElement("div");

div.classList.add("dia");

div.innerHTML=dia;

if(dia===diaAtual){

div.classList.add("hoje");

}

div.onclick=function(){

let d=String(dia).padStart(2,"0");

let m=String(mes+1).padStart(2,"0");

if(d=="17" && m=="08"){

window.location.href="17-08.html";

if(d=="18" && m=="08"){

window.location.href="18-08.html";

if(d=="19" && m=="08"){

window.location.href="19-08.html";

if(d=="20" && m=="08"){

window.location.href="20-08.html";

if(d=="21" && m=="08"){

window.location.href="21-08.html";

}else{

alert("Ainda não existe informação para este dia.");

}

}

diasContainer.appendChild(div);

}
