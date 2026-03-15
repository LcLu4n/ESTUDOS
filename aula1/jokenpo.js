const humanScore = document.querySelector('.myScore')
const advert = document.querySelector('.adversario')
//forma mais simplificada!!
const botoes = document.querySelectorAll("button");

let humanScoreValue = 0
let robotScoreValue = 0

botoes.forEach(function (botao, index) {
    botao.addEventListener("click", function () {
        //alert("Você clicou no botão " + (index + 1));
        let robot = Math.floor(Math.random() * botoes.length)

        if (index === robot) {

            humanScoreValue = Math.max(0, humanScoreValue - 1);
            robotScoreValue = Math.max(0, robotScoreValue - 1);

            humanScore.innerHTML = humanScoreValue;
            advert.innerHTML = robotScoreValue;


        } else if ((index === 0 && robot === 2) ||
            (index === 1 && robot === 0) ||
            (index === 2 && robot === 1)) {
            humanScoreValue++;
            humanScore.innerHTML = humanScoreValue;

        } else {
            robotScoreValue++;
            advert.innerHTML = robotScoreValue;

        }

    });
});
















//forma mais completa

/*
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

rock.addEventListener('click', () => {
 alert('pedra')
});

paper.addEventListener('click', () => {
 alert('papel')
});

scissors.addEventListener('click', () => {
 alert('tesoura')
});*/