/**
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la población para
obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre. Edad. Género: “F”, “M”, “NB”. Vacuna: “SputnikV”, “AstraZeneca”, “Otra”. Temperatura corporal (durante la primera noche).
Se pide:
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna SputnikV y no presentaron
fiebre. (37° o menos)
f) Porcentaje de personas que se aplicaron Aztrazeneca
g) Cual fue la vacuna mas aplicada
h) Promedio de edad de las personas que se dieron cada vacuna
i) Que porcentaje de personas de cada genero hay. Ej: 30% Femenino, 60% Masculino y 10% No Binario
*/

function ModeloDeParcial() {
    //VARIABLES DE ENTRADA DE DATOS
    let inputNombre;
    let inputEdad;
    let inputGenero;
    let inputVacuna;
    let inputTemperatura;
    //VARIABLES DE CONTROL
    let continuar;
    let mayorTemperatura;
    let flagMayorTemperatura;
    //VARIABLES AUXILIARES
    let nombreDeLaPersonaConMayorTemperatura;
    let vacunaDeLaPersonaConMayorTemperatura;
    let promedioEdadHombresSputnikVTempMenos37;
    let promedioTotalVacunadosAztraZeneca;
    let promedioEdadVacunadosAstraZenica;
    let promedioEdadVacunadosSputnikV;
    let promedioEdadVacunadosOtra;
    let porcentajeFemenino;
    let porcentajeMasculino; 
    let porcentajeNoBinario;
    let mensajeAuxiliar;
    //CONTADORES Y ACUMULADORES
    let contadorFemeninoSputnikV;
    let contadorNoBinarioAztraZenecaOtra;
    let personasAstraZenecaTempMayor38;
    let acumuladorEdadHombresSputnikVTempMenos37;
    let contadorEdadHombresSputnikVTempMenos37;
    let contadorTotalDePersonas;
    let contadorTotalVacunadosAztraZeneca;
    let contadorTotalVacunadosSputnikV;
    let contadorTotalVacunadosOtra;
    let acumuladorTotalDeEdades;
    let contadorTotalFemenino;
    let contadorTotalMasculino;
    let contadorTotalNoBinario;
    //INICIALIZACION DE FLAGS, CONTADORES Y ACUMULADORES
    flagMayorTemperatura = true;
    contadorFemeninoSputnikV = 0;
    contadorNoBinarioAztraZenecaOtra = 0;
    personasAstraZenecaTempMayor38 = 0;
    acumuladorEdadHombresSputnikVTempMenos37 = 0;
    contadorEdadHombresSputnikVTempMenos37 = 0;
    contadorTotalDePersonas = 0;
    promedioTotalVacunadosAztraZeneca = 0;
    contadorTotalVacunadosAztraZeneca = 0;
    contadorTotalVacunadosSputnikV = 0;
    contadorTotalVacunadosOtra = 0;
    acumuladorTotalDeEdades = 0;
    contadorTotalFemenino = 0;
    contadorTotalMasculino = 0;
    contadorTotalNoBinario = 0;

    //INICIO DE PROGRAMA (BUCLE)
    do {
        //INGRESO Y VALIDACION DE DATOS
        inputNombre = prompt('INGRESE NOMBRE: ');
        inputNombre = inputNombre.toUpperCase();
        while (inputNombre == '') {
            inputNombre = prompt('ERROR, CADENA VACIA. REINGRESE NOMBRE: ');
        }

        inputEdad = prompt('INGRESE EDAD: ');
        inputEdad = parseInt(inputEdad);
        while (isNaN(inputEdad) || inputEdad < 0 || inputedad > 100) {
            inputEdad = prompt('ERROR. REINGRESE EDAD: ');
            inputEdad = parseInt(inputEdad);
        }

        inputGenero = prompt('INGRESE GENERO: ');
        inputGenero = inputGenero.toUpperCase();
        while (inputGenero == '' || (inputGenero != 'M' && inputGenero != 'F' && inputGenero != 'NB')) {
            inputGenero = prompt('ERROR. REINGRESE GENERO: ');
        }

        inputVacuna = prompt('INGRESE VACUNA: ');
        inputVacuna = inputVacuna.toUpperCase();
        while (inputVacuna == '' || (inputVacuna != 'SPUTNIKV' && inputVacuna != 'ASTRAZENECA' && inputVacuna != 'OTRA')) {
            inputVacuna = prompt('ERROR. REINGRESE VACUNA: ');
        }

        inputTemperatura = prompt('INGRESE TEMPERATURA EN LA PRIMERA NOCHE: ');
        inputTemperatura = parseFloat(inputTemperatura);
        while (isNaN(inputTemperatura) || inputTemperatura < 35 || inputTemperatura > 45) {
            inputTemperatura = prompt('ERROR. REINGRESE TEMPERATURA EN LA PRIMERA NOCHE: ');
            inputTemperatura = parseFloat(inputTemperatura);
        }

        // *** LOGICA DESPUES DEL INGRESO DE DATOS VALIDADOS *** //
        contadorTotalDePersonas++;
        //PUNTO H
        acumuladorTotalDeEdades+= inputEdad;

        //PUNTO A
        if (inputTemperatura > mayorTemperatura || flagMayorTemperatura == true) {
            nombreDeLaPersonaConMayorTemperatura = inputNombre;
            vacunaDeLaPersonaConMayorTemperatura = inputVacuna;
            flagMayorTemperatura = false;
        }

        switch (inputVacuna) {
            case 'SPUTNIKV':
                //PUNTO B
                if (inputGenero == 'F') {
                    contadorFemeninoSputnikV++;
                } else {
                    //PUNTO E
                    if (inputGenero == 'M' && inputTemperatura <= 37) {
                        acumuladorEdadHombresSputnikVTempMenos37 += inputEdad;
                        contadorEdadHombresSputnikVTempMenos37++;
                    }
                }
                //PUNTO G
                contadorTotalVacunadosSputnikV++;
                break;
            case 'ASTRAZENECA':
                //PUNTO C 
                if (inputGenero == 'NB') {
                    contadorNoBinarioAztraZenecaOtra++;
                }
                //PUNTO D
                if (inputTemperatura > 38) {
                    personasAstraZenecaTempMayor38++;
                }
                //PUNTO F y G
                contadorTotalVacunadosAztraZeneca++;
                break;
            case 'OTRA':
                //PUNTO C
                if (inputGenero == 'NB') {
                    contadorNoBinarioAztraZenecaOtra++;
                }
                //PUNTO G
                contadorTotalVacunadosOtra++;
                break;
        }

        //PUNTO I
        if(inputGenero == 'F'){
            contadorTotalFemenino++;
        }else{
            if(inputGenero == 'M'){
                contadorTotalMasculino++;
            }else{
                contadorTotalNoBinario++;
            }
        }

        continuar = confirm('DESEA CONTINUAR?');
    } while (continuar);

    //RESULTADO LUEGO DE FINALIZAR EL PROGRAMA
    if(flagMayorTemperatura == false){
        console.log('PUNTO A: ' + nombreDeLaPersonaConMayorTemperatura + ', ' + vacunaDeLaPersonaConMayorTemperatura);
    }else{
        console.log('PUNTO A: No hubo.');
    }

    if(contadorFemeninoSputnikV > 0){
        console.log('PUNTO B: ' + contadorFemeninoSputnikV);
    }else{
        console.log('PUNTO B: No hubo.');
    }

    if(contadorNoBinarioAztraZenecaOtra > 0){
        console.log('PUNTO C: ' + contadorNoBinarioAztraZenecaOtra);
    }else{
        console.log('PUNTO C: No hubo.');
    }

    if(personasAstraZenecaTempMayor38 > 0){
        console.log('PUNTO D: ' + personasAstraZenecaTempMayor38);
    }else{
        console.log('PUNTO D: No hubo.');
    }

    if(contadorEdadHombresSputnikVTempMenos37 > 0){
        promedioEdadHombresSputnikVTempMenos37 = acumuladorEdadHombresSputnikVTempMenos37 / contadorEdadHombresSputnikVTempMenos37;
        console.log('PUNTO E: ' + promedioEdadHombresSputnikVTempMenos37);
    }else{
        console.log('PUNTO E: No hubo.');
    }

    if(contadorTotalVacunadosAztraZeneca > 0){
        promedioTotalVacunadosAztraZeneca = (contadorTotalVacunadosAztraZeneca * 100) / contadorTotalDePersonas;
        console.log('PUNTO F: ' + promedioTotalVacunadosAztraZeneca + '%');
    }else{
        console.log('PUNTO F: No hubo.');
    }
    
    //NO SE TOMA LOS CASOS DE IGUALDAD
    if(contadorTotalVacunadosAztraZeneca > contadorTotalVacunadosSputnikV && contadorTotalVacunadosAztraZeneca > contadorTotalVacunadosOtra){
        console.log('PUNTO G: AztraZeneca');
    }else{
        if(contadorTotalVacunadosSputnikV > contadorTotalVacunadosAztraZeneca && contadorTotalVacunadosSputnikV > contadorTotalVacunadosOtra){
            console.log('PUNTO G: SputnikV');
        }else{
            console.log('PUNTO G: Otra');
        }
    }

    mensajeAuxiliar = 'Punto H: ';
    if(acumuladorTotalDeEdades > 0){
        if(contadorTotalVacunadosAztraZeneca > 0){
            promedioEdadVacunadosAstraZenica = acumuladorTotalDeEdades / contadorTotalVacunadosAztraZeneca;
            mensajeAuxiliar += '[AztraZenica = ' + promedioEdadVacunadosAstraZenica + '] ';
        }else{
            mensajeAuxiliar += '[AztraZenica = 0] ';
        }

        if(contadorTotalVacunadosSputnikV > 0){
            promedioEdadVacunadosSputnikV = acumuladorTotalDeEdades / contadorTotalVacunadosSputnikV;
            mensajeAuxiliar += '[SputnikV = ' + promedioEdadVacunadosSputnikV + '] ';
        }else{
            mensajeAuxiliar += '[SputnikV = 0] ';
        }

        if(contadorTotalVacunadosOtra > 0){
            promedioEdadVacunadosOtra = acumuladorTotalDeEdades / contadorTotalVacunadosOtra;
            mensajeAuxiliar += '[Otra = ' + promedioEdadVacunadosOtra + '] ';
        }else{
            mensajeAuxiliar += '[Otra = 0] ';
        }
    }else{
        mensajeAuxiliar += 'No hubo.';
    }
    console.log(mensajeAuxiliar);

    mensajeAuxiliar = 'PUNTO I: ';
    if(contadorTotalDePersonas > 0){
        if(contadorTotalFemenino > 0){
            porcentajeFemenino = (contadorTotalFemenino * 100) / contadorTotalDePersonas;
        }else{
            mensajeAuxiliar += '[Femenino = ' + porcentajeFemenino + '%] ';
        }
        if(contadorTotalMasculino > 0){
            porcentajeMasculino = (contadorTotalMasculino * 100) / contadorTotalDePersonas;
        }else{
            mensajeAuxiliar += '[Masculino = ' + porcentajeMasculino + '%] ';
        }
        if(contadorTotalNoBinario > 0){
            porcentajeNoBinario = (contadorTotalNoBinario * 100) / contadorTotalDePersonas;
        }else{
            mensajeAuxiliar += '[No Binario = ' + porcentajeNoBinario + '%] ';
        }
    }else{
        mensajeAuxiliar += 'No hubo.';
    }
    console.log(mensajeAuxiliar);
}