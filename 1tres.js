/*
falta probar
falta validar
falta mostrar resultados

Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	var respuesta;
	var nombre;
	var edad;
	var genero;
	var vacuna;
	var temperaturaCorporal;
	var personaMayorTemp;
	var nombreMayorTemp;
	var vacunaMayorTemp;
	var cantidadPersonasF;
	var cantidadPersonasNB;
	var personasConFiebre;
	var cantidadPersonasM;
	var hombrescsputniksinfiebre;
	respuesta = true;
	cantidadPersonasF = 0;
	cantidadPersonasNB = 0;
	personasConFiebre = 0;
	cantidadPersonasM = 0;
	hombrescsputniksinfiebre = 0;
	//personaMayorTemp = 0;

	while(respuesta == true)
	{
		nombre = prompt("Ingrese el nombre");
		edad = prompt("Ingrese la edad:");
		edad = parseInt(edad);
		genero = prompt("Ingrese el genero (f, m o nb)");
		while(genero != "f" && genero != "m" && genero != "nb")
		{
			genero = prompt("Error.. Ingrese el genero (f, m o nb)")
		}
		vacuna = prompt("Ingrese el tipo de vacuna (SputnikV, AstraZeneca, Otra)");
		while(vacuna != "SputnikV" && vacuna != "AstraZeneca" && vacuna != "Otra")
		{
			vacuna = prompt("Error.. Ingrese el tipo de vacuna (SputnikV, AstraZeneca, Otra)");
		}
		temperaturaCorporal = prompt("Ingrese la temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		
		//a) El nombre y vacuna de la persona con mayor temperatura.
		if(temperaturaCorporal > personaMayorTemp)
		{
			personaMayorTemp = temperaturaCorporal;
			nombreMayorTemp = nombre;
			vacunaMayorTemp = vacuna;
		}

		switch(genero)
		{
			case "f":
			//	b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
			if(vacuna == "SputnikV")
			{
				cantidadPersonasF += 1;
			}
			break;

			case "m":
				//e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron fiebre. (37° o menos)
			cantidadPersonasM += 1;
			if(vacuna == "SputnikV" && temperaturaCorporal < 37)
			{
				hombrescsputniksinfiebre += 1;
			}
			break;
			
			case "nb":
				// c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
				if(vacuna == "AztraZeneca" || vacuna == "Otra")
				{
					cantidadPersonasNB += 1;
				}
			break;
		
		}
		// d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
		if(vacuna == "AstraZeneca" && temperaturaCorporal > 38)
		{
			personasConFiebre += 1;
		}

		respuesta = confirm("Desea continuar?");
	}
	promedioHombres = cantidadPersonasM / hombrescsputniksinfiebre;
}
