let finishForm = document.getElementById("formFinish");
let firstquestion = document.getElementById("firstquestion");
let secondquestion = document.getElementById("secondquestion");
let thirdquestion = document.getElementById("thirdquestion");
let fourthquestion = document.getElementById("fourthquestion");
let fifthquestion = document.getElementById("fifthquestion");
let restart = document.getElementById("restart");



let timeFinish;
let timeInterval;
let date;
let timeElement = document.getElementById("timeReturn"); // Cambiado el nombre de la variable para evitar confusiones

function timer() {
    timeFinish = setTimeout(timeComplete, 1000*30); // 30 segundos
    timeInterval = setInterval(tictac, 1000);
    timeElement.textContent = 30; // Cambiado para actualizar el contenido del elemento
}

function tictac() {
    timeElement.textContent = parseInt(timeElement.textContent) - 1; // Restar 1 al valor actual
}

function timeComplete() {
    clearInterval(timeInterval);
    timeElement.textContent = 0;
    document.getElementById("song").play();
    alert("GAME OVER");
}

function ready() 
{
    clearTimeout(timeFinish);
    clearInterval(timeInterval);

    date= new Date()
    let message= date.toLocaleDateString("es-Es");

    alert(
        `${message}\n
        1: ${firstquestion.value}\n
        2: ${secondquestion.value}\n
        3: ${thirdquestion.value}\n
        4: ${fourthquestion.value}\n
        5: ${fifthquestion.value}`);
}

restart.addEventListener("click", function() {
    location.reload(); // Recarga la página
});
