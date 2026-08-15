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

const diasContainer = document.getElementById("dias");

const primeiroDia =
    new Date(ano, mes, 1).getDay();

const diasMes =
    new Date(ano, mes + 1, 0).getDate();

let inicio = primeiroDia - 1;

if (inicio < 0) {
    inicio = 6;
}

// Espaços antes do primeiro dia do mês
for (let i = 0; i < inicio; i++) {

    const vazio = document.createElement("div");

    diasContainer.appendChild(vazio);
}

// Criar os dias
for (let dia = 1; dia <= diasMes; dia++) {

    const div = document.createElement("div");

    div.classList.add("dia");

    div.innerHTML = dia;

    // Destacar o dia atual
    if (dia === diaAtual) {
        div.classList.add("hoje");
    }

    // Quando clicar num dia
    div.onclick = function () {

        let d = String(dia).padStart(2, "0");
        let m = String(mes + 1).padStart(2, "0");

        // Informação disponível
        if (m === "08" && d >= "17" && d <= "21") {

            window.location.href = d + "-" + m + ".html";

        } else {

            alert("Ainda não existe informação para este dia.");

        }

    };

    diasContainer.appendChild(div);
}
