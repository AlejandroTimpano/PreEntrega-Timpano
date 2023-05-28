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

let edad = prompt("Ingrese su edad");
let club = prompt("Ingrese su equipo de futbol");

class Invitado{
    constructor(nombre, edad, club) {
    this.nombre = nombre;
    this.edad = edad;
    this.club = club;
    }
}

const invitado1 = new Invitado(nombre, edad, club);
alert(invitado1.nombre);
alert(invitado1.edad);
alert(invitado1.club);

const afiliados = [
    {id: 1, nombre: "Roberto", club: "Boca", deuda: 500},
    {id: 2, nombre: "Dida", club: "River", deuda: 1000},
    {id: 3, nombre: "Ronaldo", club: "San Lorenzo", deuda: 2000},
    {id: 4, nombre: "Cafu", club: "Huracan", deuda: 1500},
];

for(const socio of afiliados){
    let mensaje = `
    id: ${socio.id}
    nombre: ${socio.nombre}
    club: ${socio.club}`;

    alert(mensaje);
}

let deuda = parseInt(prompt("Ingrese valor de deuda"));
let busqueda = afiliados.find(item => item.deuda === deuda);

let mensaje = `
    nombre: ${busqueda.nombre}
    deuda: ${busqueda.deuda}`;

alert(mensaje);

let saludo = document.getElementById("saludo");
saludo.innerHTML = "<h1>Bienvenido</h1>";

saludo.className = "formulario";

let parrafo = document.createElement("p");
parrafo.innerHTML = "<h1>Estamos desarrollando la pagina para la entrega final, pronto tendra todo integrado con su logica correspondiente, sepa disculpar.</h1>";
saludo.append(parrafo);
