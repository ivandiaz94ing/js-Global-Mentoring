const mostrarReloj = () => {
    let fecha = new Date();
    let hora = formatoHora( fecha.getHours() );
    let minuto = formatoHora( fecha.getMinutes() );
    let segundo = formatoHora( fecha.getSeconds() );
    let dia = fecha.getDay();
    let mes = fecha.getMonth();
    let anio = fecha.getFullYear();

    document.getElementById('hora').innerHTML = `${hora}:${minuto}:${segundo}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep','Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
    let diaSemana = dias[dia];
    let mesLetra = meses[mes];
    //console.log(diaSemana);
    //console.log(mesLetra);


    document.getElementById('fecha').innerHTML = `${diaSemana},  ${dia} ${mesLetra}`;
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) =>{
    if(hora < 10 ){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000);
