function mostrar()
/*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica. 
*/
{
    let nombre;
    let carrera;
    let sexo;
    let cantidad;
    let nota;
    let edad;
    let flagPromedio = 1;
    let notamax;
    let nombremejorProm;
    let flagJoven = 1;
    let edadJoven;
    let nombreJoven;
    let contQuimica = 0;
    let contFisica = 0;
    let contSistemas = 0;
    let porcentajeQ;
    let porcentajeF;
    let porcentajeS;
    let contTotalAlumnos = 0;
    let flagMatMax =1;
    let cantMAX;
    let edadmatMax;
    let nombrematMax;


    for(let i = 0; i < 500; i++){

nombre = prompt("Ingrese el nombre: ");

carrera = prompt("Ingrese la carrera: (Quimica/Fisica/Sistemas)");
while(!(carrera == "Quimica" || carrera == "Fisica" || carrera == "Sistemas")){
    carrera = prompt("Error. Ingrese la carrera: (Quimica/Fisica/Sistemas)");
}
sexo = prompt("Ingrese el sexo: (masculino/femenino/no binario)").toLowerCase();
while(!(sexo == "masculino" || sexo == "femenino" || sexo == "no binario")){
    sexo = prompt("Error. Ingrese el sexo: (masculino/femenino/no binario)").toLowerCase();
}
cantidad = parseInt(prompt("Ingrese la cantidad de materias: (1 - 5)"));
while(isNaN(cantidad) || cantidad <1 || cantidad > 5){
    cantidad = parseInt(prompt("Error. Ingrese la cantidad de materias: (1 - 5)"));
}
nota = parseInt(prompt("Ingrese la nota promedio: (0 - 10)"));
while(isNaN(nota) || nota < 0 || nota >10){
    nota = parseInt(prompt("Error. Ingrese la nota promedio: (0 - 10)")); 
}
edad = parseInt(prompt("Ingrese la edad:  "));
while(isNaN(edad) || edad < 1){
    edad = parseInt(prompt("Error. Ingrese la edad:")); 
}
if(carrera == "Fisica" && (flagPromedio || nota > notamax)){
notamax = nota;
nombremejorProm = nombre;
flagPromedio = 0;
}
if(sexo == "femenino" && (flagJoven || edad < edadJoven)){
    edadJoven = edad;
    nombreJoven = nombre;
    flagJoven = 0;
}
if(carrera == "Quimica"){
    contQuimica ++;
} else if (carrera == "Fisica"){
    contFisica++;
} else {
    contSistemas ++;
}
if(carrera != "Quimica" && (flagMatMax || cantMAX < cantidad)){
    cantMAX = cantidad;
    edadmatMax = edad;
    nombrematMax = nombre;
    flagMatMax = 0;
}
    contTotalAlumnos++;
    }

//Punto A
if(flagPromedio == 0){
console.log("a) El nombre del mejor promedio de los alumnos que estudian Fisica  es " + nombremejorProm);
} else {
    console.log("a) No se ingresaron alumnos a la carrera Fisica");
}
//Punto B
if(flagJoven == 0){
console.log("b) El nombre de la alumna mas joven es " + nombreJoven + " y su edad es " + edadJoven + " años.");
} else {
    console.log("b) No se ingresaron alumnas.");
}
//Punto C
if(contQuimica != 0){
    porcentajeQ = (contQuimica * 100) / contTotalAlumnos;
    console.log("c) El porcentaje de alumnos de Quimica es " + porcentajeQ + "%");
}else {
    console.log("c) No se ingresaron alumnos de Quimica.");
}
if(contFisica != 0){
    porcentajeF = (contFisica * 100) / contTotalAlumnos;
    console.log("c) El porcentaje de alumnos de Fisica es " + porcentajeF + "%");
}else {
    console.log("c) No se ingresaron alumnos de Fisica.");
}
if(contSistemas != 0){
    porcentajeS = (contSistemas * 100) / contTotalAlumnos;
    console.log("c) El porcentaje de alumnos de Sistemas es " + porcentajeS + "%");
}else {
    console.log("c) No se ingresaron alumnos de Sistemas.");
}
//Punto D

if(flagMatMax == 0){
    console.log("d) El estudiante con mayor cantidad de materias que no es de Quimica se llama " + nombrematMax + " y su edad es " + edadmatMax);
} else {
    console.log("d) No se ingresaron estudiantes de la carrera Fisica o Sistemas.");
}
}
