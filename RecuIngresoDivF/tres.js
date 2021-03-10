function mostrar()
/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra 
Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. 
Ningun otro caso aplica descuento. 

al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas) 
*/
{ 
	let nombre;
	let cantidad;
	let marca;
	let preciounidad;
	let preciosubtotal;
	let respuesta;
	let acumPreciofinal = 0;
	let descuentoFelipe;
	let acumdescuento = 0;
	let preciodescuento = 0;
	let descuentoArgentina;
	let acumCantF = 0;
	let acumCantA = 0;
	let acumCantI = 0;
	let contA = 0;
	let contF = 0;
	let contI = 0;
	let promedioF = 0;
	let promedioA = 0;
	let promedioI = 0;
	let marcaVentaMax;


	do{
		nombre = prompt("Ingrese su nombre: ");
		cantidad = parseInt(prompt("Ingrese la cantidad"));
		while(isNaN(cantidad) || cantidad < 1){
			cantidad = parseInt(prompt("Error. Ingrese la cantidad"));
		}
		marca = prompt("Ingrese la marca: (FelipeLamparas - ArgentinaLuz - Illuminatis)");
		while(!(marca == "FelipeLamparas" || marca == "ArgentinaLuz" || marca == "Illuminatis")){
			marca = prompt("Error. Ingrese la marca: (FelipeLamparas - ArgentinaLuz - Illuminatis)");
		}
		preciounidad = parseFloat(prompt("Ingrese el precio por unidad"));
		while(isNaN(preciounidad) || preciounidad < 0){
			preciounidad = parseFloat(prompt("Error. Ingrese el precio por unidad"));
		}
		switch(marca){
			case "FelipeLamparas":
				acumCantF += cantidad;
				contF++;
				if(cantidad <= 5){
					preciosubtotal = preciounidad * cantidad;
					acumPreciofinal += preciosubtotal;
				} else {
					descuentoFelipe = preciounidad * cantidad * 0.1;
					acumdescuento += descuentoFelipe;
					preciosubtotal = preciounidad * cantidad;	
					preciodescuento = preciosubtotal - descuentoFelipe;
					acumPreciofinal += preciodescuento;
				}
			break;
			case "ArgentinaLuz":
				acumCantA += cantidad;
				contA ++;
				if(cantidad < 3){
					preciosubtotal = preciounidad * cantidad;
					acumPreciofinal += preciosubtotal;
				} else{
					descuentoArgentina = preciounidad * cantidad * .05;
					acumdescuento += descuentoArgentina;
					preciosubtotal = preciounidad * cantidad;
					preciodescuento = preciosubtotal - descuentoArgentina;
					acumPreciofinal += preciodescuento;
				}

			break;
			case "Illuminatis":
				acumCantI += cantidad;
				contI ++;
				preciosubtotal = preciounidad * cantidad;
				acumPreciofinal += preciosubtotal;
			break;
		}

		respuesta = prompt("¿Desea cargar mas datos?");
	}while(respuesta != "no");

	//Punto a:
	console.log("a) La empresa recaudo un total de $" + acumPreciofinal);
	//Punto b:
	if(acumdescuento == 0){
		console.log("b) La empresa no perdio dinero ya que no se aplico ningun descuento.");
	} else {
		console.log("b) La empresa perdio en concepto de descuento un total de $" + acumdescuento);
	}
	//Punto c:

	if(contF != 0){
		promedioF = acumCantF/contF;
		console.log("c) El promedio de cantidad de lamparas vendidas por FelipeLamparas es " + promedioF);
	} else {
		console.log("c) No se ingresaron compras de lamparas de la marca FelipeLamparas");
	}
	if(contA != 0){
		promedioA = acumCantA/contA;
		console.log("c) El promedio de cantidad de lamparas vendidas por ArgentinaLuz es " + promedioA);
	} else {
		console.log("c) No se ingresaron compras de lamparas de la marca ArgentinaLuz");
	}
	if(contI != 0){
		promedioI = acumCantI/contI;
		console.log("c) El promedio de cantidad de lamparas vendidas por Illuminatis es " + promedioI);
	} else {
		console.log("c) No se ingresaron compras de lamparas de la marca Illuminatis");
	}
	//Punto d

	if(contF > contA && contF > contI){
		marcaVentaMax = "FelipeLamparas";
	} else if (contA >= contF && contA > contI){
		marcaVentaMax = "ArgentinaLuz";
	} else {
		marcaVentaMax = "Illuminatis";
	}
	console.log("d) La marca que registro mas ventas es " + marcaVentaMax);
}
