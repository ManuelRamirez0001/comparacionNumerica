let NUMEROS=[];
let medio,menor,mayor;
const preguntar=()=>{
    for (let i = 0; i < 3; i++) {
        const pregunta=Number(prompt("ingresa un numero"));
        NUMEROS.push(pregunta);
    }
    
    medio=NUMEROS[0]
    menor=NUMEROS[1]    
    mayor=NUMEROS[2]
    iguales();
}
const Mayor=()=>{
    for (let i = 0; i < NUMEROS.length; i++) {
        let inicio=NUMEROS[i];
        if(inicio>mayor){
            mayor=inicio;
        }
    }
    Menor();
}
const Menor = () => {
    menor = NUMEROS[0];
    for (let i = 1; i < NUMEROS.length; i++) {
        if (NUMEROS[i] < menor) {
            menor = NUMEROS[i];
        }
    }
    Medio()
};
const Medio=()=>{
    medio = NUMEROS[0] + NUMEROS[1] + NUMEROS[2] - mayor - menor;
    console.log(mayor,medio,menor);
    console.log(menor,medio,mayor);
}

const iguales=()=>{
    if(mayor===menor && menor===medio){
        return console.log("todos son iguales");
    }else Mayor();
}
preguntar();
