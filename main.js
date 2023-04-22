let nombre = prompt("Ingrese su nombre");

if(nombre !=""){
alert(nombre+", "+"bienvenido a Elijo Creer.")

let numero1 = parseInt(prompt("Ingrese cuantas veces vio la final Argentina vs Francia"));
let numero2 = parseInt(prompt("Suma todas las personas con quienes lo viste e ingresa el numero"));
let resultado = (numero1+numero2)/2

alert("Estamos calculando su grado de fanatismo, aguarde un instante.")

if(resultado ==0){
alert(nombre+", obtuviste "+resultado+"ptos. "+"te invito a que te retires del país.");
}else if(resultado <=5){
alert(nombre+", obtuviste "+resultado+"ptos. "+"hace falta un poquito mas de sangre en esas venas.");
}else if(resultado <=10){
    alert(nombre+", obtuviste "+resultado+"ptos. "+"estas a un paso de convertirte en heroe.");
}else if(resultado >10){
    alert(nombre+", obtuviste "+resultado+"ptos. "+"mereces una cena con Messi.");
}

}
else{
alert("Usted no es bienvenido a Elijo Creer.")

let campeon = prompt("Ingrese el nombre del pais campeon");
while(campeon != "Argentina"){
    switch (campeon){
        case "Croacia":
            alert("Tercer puesto");
            break;
        case "Francia":
            alert("Segundo puesto");
            break;
        case "Marruecos":
            alert("Cuarto puesto");
            break;
        default:
            alert("Segui intentando");
            break;
                    }
    campeon = prompt("Ingrese el nombre del pais campeon");
}
}
