const robotron = document.querySelector("#robotron")
robotron.addEventListener("click",(evento) =>{ //function anonima, arrow function
    console.log(evento)
})

function dizOi(nome){
    console.log("oi"+ nome)
    console.log("bem-vindo ao robotron 2000")
}

dizOi("pedro")