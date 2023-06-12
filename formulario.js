/*const nombreform = document.getElementById("nameform")
const nombre2form = document.getElementById("name2form")
const emailform = document.getElementById("emailform")
const passwordform = document.getElementById("passform")
const form = document.getElementById("form")
const parrafoform = document.getElementById("warnings")

form.addEventListener("enviar", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafoform.innerHTML = ""

    if(nombreform.value.length <6){
        warnings += `Nombre no es valido`
        entrar = true
    }
    if(nombre2form.value.length <6){
        warnings += `Nombre no es valido`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `Email no es valido`
        entrar = true
    }
    if(passwordform.value.length <8){
        warnings += `Pass no es valido`
        entrar = true
    }
    if(entrar){
        parrafoform.innerHTML = warnings
    }else{
        parrafoform.innerHTML = "Enviado"
    }
})
*/