let um = document.querySelector(".um")
let dois = document.querySelector(".dois")
let tres = document.querySelector(".tres")
let quatro = document.querySelector(".quatro")
let cinco = document.querySelector(".cinco")
let submit = document.querySelector(".submit")
let Mostrador = document.querySelector(".mostrador")
let html = document.querySelector("html")

let selecionado = ""

let umChange = false
let doisChange = false
let tresChange = false
let quatroChange = false
let cincoChange = false


um.addEventListener('click', function() {
    selecionado = "1"
    um.classList.add("check")
    umChange = true
    doisChange = false
    tresChange = false
    quatroChange = false
    cincoChange = false
    mudar ()
})
dois.addEventListener('click', function() {
    selecionado = "2"
    dois.classList.add("check")
    umChange = false
    doisChange = true
    tresChange = false
    quatroChange = false
    cincoChange = false
        mudar ()
    })
tres.addEventListener('click', function() {
    selecionado = "3" 
    tres.classList.add("check")
    umChange = false
    doisChange = false
    tresChange = true
    quatroChange = false
    cincoChange = false
        mudar ()
})
quatro.addEventListener('click', function() {
    selecionado = "4"   
    quatro.classList.add("check")
    umChange = false
    doisChange = false
    tresChange = false
    quatroChange = true
    cincoChange = false
        mudar ()
})
cinco.addEventListener('click', function() {
    selecionado = "5" 
    cinco.classList.add("check")
    umChange = false
    doisChange = false
    tresChange = false
    quatroChange = false
    cincoChange = true
        mudar ()
})

submit.addEventListener('click', function() {
    Mostrador.innerHTML = "You selected " + selecionado + " of 5"
    html.classList = "enviado"
})

function mudar() {
    if(umChange == false){
        um.classList.remove("check")
    }
    if (doisChange == false) {
        dois.classList.remove("check")
    }
    if (tresChange == false) {
        tres.classList.remove("check")
    }
    if (quatroChange == false) {
        quatro.classList.remove("check")
    }
    if (cincoChange == false) {
        cinco.classList.remove("check")
    }
}
