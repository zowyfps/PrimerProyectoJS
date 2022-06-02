alert('Bienvenidos a la calculadora de Zoe');

// Menu y Operaciones
let menuCalculadora = menu();

// Se llama a menuCalculadora dentro de la funcion porque operacionesDelMenu depende del valor que regrese menu();
// En este caso el return "sumar", return "restar" o return "multiplicar"
let operaciones = operacionesDeMenu(menuCalculadora);


// Funcion de Menu
function menu(){
    //Declaracion de opcion
    let opcion;

    //Validacion del Menu
    do{
        opcion = parseInt(prompt("Calculadora: \n 1- Suma \n 2- Resta \n 3- Multiplicacion \n 5- Salir")); 
    }while(opcion != 1 && opcion != 2 && opcion != 3 &&  opcion != 5);

    //Retorno de opcion (valor)
    if(opcion == 1) {return "sumar";}
    if(opcion == 2) {return "restar";}
    if(opcion == 3) {return "multiplicar";}

    if(opcion == 5) {return "salir";}
}

//Operaciones
function operacionesDeMenu(){
    switch(menuCalculadora){
            case "sumar":
                suma();
                break;
            case "restar":
                resta();
                break;
            case "multiplicar":
                multiplicacion();
                break;
            case "salir":
                break;
    }
}

// Funciones
/* ------------------------------------------------------------------------------------------- /
/ ------------------------------------------------------------------------------------------- */

//Funcion de sumar
function suma(){
    let numeroUno = parseInt(prompt("Primer numero de la suma: "));
    let numeroDos = parseInt(prompt("Segundo numero de la suma: "));

    let resultado = numeroUno + numeroDos;
    alert(`El resultado es ${resultado}`);
}

//Funcion de restar
function resta(){
    let numeroUno = parseInt(prompt("Primer numero de la resta: "));
    let numeroDos = parseInt(prompt("Segundo numero de la resta: "));

    let resultado = numeroUno - numeroDos;
    alert(`El resultado es ${resultado}`);
}

//Funcion de multiplicar
function multiplicacion(){
    let numeroUno = parseInt(prompt("Primer numero de la multiplicacion: "));
    let numeroDos = parseInt(prompt("Segundo numero de la multiplicacion: "));

    let resultado = numeroUno * numeroDos;
    alert(`El resultado es ${resultado}`);
}

/* ------------------------------------------------------------------------------------------- /
/ ------------------------------------------------------------------------------------------- */

alert('Muchas gracias por usar la calculadora de Zoe \n :)');
