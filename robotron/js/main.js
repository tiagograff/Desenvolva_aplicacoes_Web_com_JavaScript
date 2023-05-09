const robotron = document.querySelector("#robotron")
const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")

const controle = document.querySelectorAll("[data-controle]")

//pegar o conteúdo
controle.forEach( (elemento) => { 
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
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

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}