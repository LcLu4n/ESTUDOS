const humanScore = document.querySelector('.myScore')
const advert = document.querySelector('.adversario')
//forma mais simplificada!!
const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao, index) {
    botao.addEventListener("click", function () {
        //alert("Você clicou no botão " + (index + 1));

        if (index === 0) {
            alert(index)

        } else if (index === 1) {
            alert(index)

        } else if (index === 2) {
            alert(index)
            
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