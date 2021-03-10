
function mostrar()
/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 
*/
{
	
let nombre;
let edad;
let sexo;
let puesto;
let sueldo;
let respuesta;
let acumSueldoP = 0;
let acumSueldoA = 0;
let acumSueldoQ = 0;
let contP = 0;
let contA = 0;
let contQ = 0;
let promedioP;
let promedioA;
let promedioQ;
let flagSueldo = 1;
let sueldoMax;
let sexoMaxSueldo;
let flagFemSueldo = 1;
let sueldomaxFEM;
let nombreFemMax;
let contPNB = 0;

do{
    nombre = prompt("Ingrese el nombre");
    edad = parseInt(prompt("Ingrese la edad: "));
    while(isNaN(edad) || edad < 1){
        edad = parseInt(prompt("Error. Ingrese la edad: "));
    }
    sexo = prompt("Ingrese el sexo: (masculino/femenino/no binario)").toLowerCase();
    while(!(sexo == "masculino" || sexo == "femenino" || sexo == "no binario")){
        sexo = prompt("Error. Ingrese el sexo: (masculino/femenino/no binario)").toLowerCase();
    }
    puesto = prompt("Ingrese el puesto: (programador/analista/Qa)");
    while(!(puesto == "programador" || puesto == "analista" || puesto == "Qa")){
        puesto = prompt("Error. Ingrese el puesto: (programador/analista/Qa)");
    }
    sueldo = parseFloat(prompt("Ingrese el sueldo: (15000 - 70000)"));
    while(isNaN(sueldo) || sueldo < 15000 || sueldo > 70000){
        sueldo = parseFloat(prompt("Error. Ingrese el sueldo: (15000 - 70000)"));
    }
    if(puesto == "programador"){
        acumSueldoP += sueldo;
        contP ++;
    } else if (puesto == "analista"){
        acumSueldoA += sueldo;
        contA ++;
    } else {
        acumSueldoQ += sueldo;
        contQ ++;
    }
    if(flagSueldo || sueldo > sueldoMax ){
        sueldoMax = sueldo;
        sexoMaxSueldo = sexo;
        flagSueldo = 0;
    }
    if(sexo == "femenino" && (flagFemSueldo || sueldo > sueldomaxFEM)){
        sueldomaxFEM = sueldo;
        nombreFemMax = nombre;
        flagFemSueldo = 0;
    }
    if(puesto == "programador" && sexo == "no binario" && sueldo > 20000 && sueldo < 55000){
        contPNB++;
    }


    respuesta = prompt("Desea cargar mas datos?");
}while (respuesta != "no");

//Punto A:
if(contP != 0){
    promedioP = acumSueldoP / contP;
    console.log("a) El promedio de sueldos de los programadores es " + promedioP);
} else {
    console.log("a) No se ingresaron programadores");
}
if(contA != 0){
    promedioA = acumSueldoA / contA;
    console.log("a) El promedio de sueldos de los ANALISTAS es " + promedioA);
} else {
    console.log("a) No se ingresaron ANALISTAS");
}
if(contQ != 0){
    promedioQ = acumSueldoQ / contQ;
    console.log("a) El promedio de sueldos de los Qa es " + promedioQ);
} else {
    console.log("a) No se ingresaron Qa");
}
//PUNTO B:
console.log("b) El sexo de la persona que recibe el mayor sueldo es " + sexoMaxSueldo);
//PUNTO C:

if(flagFemSueldo == 0){
    console.log("c) La empleada femenino con mayor sueldo es " + nombreFemMax);
} else {
    console.log("c) No se ingresaron empleadas femeninas");
}
//PUNTO D:
if (contPNB != 0){
    console.log("d) La cantidad de programadores no binarios con sueldos entre 20000 y 55000 son " + contPNB);
} else {
    console.log("d) No se ingresaron programadores que sean no binarios con un sueldo entre 20000 y 55000");
}


}
/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 
*/

