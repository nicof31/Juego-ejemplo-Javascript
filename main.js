const MIN_POWER = 10;
const MAX_POWER = 30;


let energiaSuperman = 100;
let energiaGoku = 100;

alert("bienvenido al combate")
console.log(energiaSuperman)
console.log(energiaGoku)

let round = 0;

//solcita ingresar un valor para dar inicio al juego
let inicio = prompt("Por favor ingreses tipee inicio si quiere comenzar el juego");


if(inicio !=null){
switch(inicio.toLowerCase()){
        case "inicio": 
            console.log("Tipeo: " + inicio);
                  
while (energiaGoku > 0 && energiaSuperman > 0){
    round = round + 1

let golpeGoku = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
console.log("Golpe Goku " + golpeGoku)
let golpeSuperman = Math.ceil(Math.random() * (MAX_POWER - MIN_POWER) + MIN_POWER)
console.log("Golpe Superman " + golpeSuperman)

if(golpeGoku === golpeSuperman){
    energiaSuperman -= golpeGoku
    energiaGoku -= golpeSuperman
}else if(golpeSuperman > golpeGoku) {
    document.write('<div class="card"><h5>Round N° ' + round + ': Energía Superman:  ' + energiaSuperman + ' vs ' + 'Energía Goku: '+ energiaGoku + '</h5><img src="img/golpeSuperman.jpeg" /></div>')

    energiaGoku -= golpeSuperman
} else {
    energiaSuperman -= golpeGoku

    document.write('<div class="card"><h5>Round N° ' + round + ': Energía Superman:  ' + energiaSuperman + ' vs ' + 'Energía Goku: '+ energiaGoku + '</h5><img src="img/golpeGoku.jpeg" /></div>');
    
}

document.write('<br>');

console.log("Round Nº " + round)
console.log("Energia Superman " + energiaSuperman)
console.log("Energia Goku " + energiaGoku)

}
default: 
console.log("RESULTADO COMBATE:");
}
} else if (inicio == null) {
    alert("PARA COMENZAR JUEGO DEBE TIPEAR INICIO");
}

if(energiaGoku === energiaSuperman){
    console.log("Empate técnico por error de tipeo incio")
}else if(energiaGoku>0){
    console.log("Gano Goku")
    document.write('<div class="ganador"><h5>Gano Goku</h5><img src="img/wingoku.jpeg" /></div>')
    document.write('<div class="row row-cols-12 row-cols-md-4 card"><h2>Fin combate</h2></div>')
}else {
    console.log("Gano Superman")
    document.write('<div class="ganador"><h5>Gano Superman</h5><img src="img/winsuperman.jpg" /></div>')
    document.write('<div class="row row-cols-12 row-cols-md-4 card"><h2>Fin combate</h2></div>')
}
 
