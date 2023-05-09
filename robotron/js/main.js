const robotron = document.querySelector("#robotron")
const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

const controle = document.querySelectorAll(".controle-ajuste")

//pegar o conteúdo
controle.forEach( (elemento) => { 
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent)
    }) 
})

robotron.addEventListener("click",(evento) =>{ //function anonima, arrow function
    console.log(evento)
})

function dizOi(nome){
    console.log("oi"+ nome)
    console.log("bem-vindo ao robotron 2000")
}

dizOi("pedro")

function manipulaDados(operacao){
    if(operacao === "-"){
        braco.value = parseInt(braco.value) - 1
    }else{
        braco.value = parseInt(braco.value) + 1
    }
}