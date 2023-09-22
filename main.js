// let canvas = document.getElementById("canvas");
// let contexto = canvas.getContext("2d");
// let desenhando = false;
// canvas.addEventListener("mousedown", function(event) {
//     desenhando = true;
//     contexto.beginPath();
//     contexto.moveTo(event.clientX - canvas.offsetLeft,
//     event.clientY - canvas.offsetTop);
// })

// canvas.addEventListener("mousemove", function(event){
//     if(desenhando) {
//         contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
//         contexto.stroke();
//     }
// })

// canvas.addEventListener("mouseup", function(event){
//     desenhando = false;
// })

let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;

let corInput = document.getElementById("cor");

let cor = corInput.value;

corInput.addEventListener("input", function(event) {
    cor = corInput.value;
});

canvas.addEventListener("mousedown", function(event){
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    contexto.strokeStyle = cor;
})

canvas.addEventListener("mousemove", function(event){
    if(desenhando) {
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
})

canvas.addEventListener("mouseup", function(event){
    desenhando = false;
})