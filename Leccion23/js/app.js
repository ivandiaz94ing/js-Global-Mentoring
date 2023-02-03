const ingresos = [
    new Ingreso('Mantenimiento', 50000),
    new Ingreso('Moto', 8000)
];

const egresos = [
    new Egreso('Alimentacion', 20000),
    new Egreso('Servicios', 30000)
];

let cargaApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();

}
let totalIngresos = () =>{
    let totalingreso = 0; 
    for (let ingreso of ingresos) {
        totalingreso += ingreso.valor;
    }
    return Number( totalingreso ) ;
}

let totalegresos = () =>{
    let totalegreso = 0;
    for (let egreso of egresos) {
        totalegreso += egreso.valor;
        
    }
    return Number(totalegreso);
}

let cargarCabecero = () => {
let presupuesto = totalIngresos() - totalegresos();
let porcentajeEgreso = totalegresos()/totalIngresos();
document.getElementById('presupuesto').innerHTML = formatoMoneda( presupuesto );
document.getElementById('ingresos').innerHTML = formatoMoneda( totalIngresos() );
document.getElementById('egresos').innerHTML = formatoMoneda( totalegresos() );
document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);

}

const formatoMoneda  = (valor) =>{
    return valor.toLocaleString('en-US',{style: 'currency', currency:'USD', minimumFranctionDigits:2});

}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {style:'percent', minimumFranctionDigits:2});
}

let cargarIngresos = () =>{
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

let cargarEgresos = () => {
    let egresosHTML = '';
    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
        
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso)=>{
    let egresosHTML = `
    <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje((egreso.valor)/totalegresos())}</div>
                
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="trash-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                    </button>
                </div>

            </div>

    </div>
    `;
    return egresosHTML;

}

const crearIngresoHTML = (ingreso) =>{
    let ingresosHTML = `
    
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="trash-outline" onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return ingresosHTML;
}

const eliminarIngreso = (id) =>{
    let indiceEliminar = ingresos.findIndex (ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();

} 

const eliminarEgreso= (id) =>{
    let indiceEliminar = egresos.findIndex(egreso => egresos.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato =() =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'].value;
    let descripcion = forma['descripcion'].value;
    let valor = forma['valor'].value;
    console.log(descripcion);
    console.log(valor);
    if (tipo === 'ingreso') {
       const ingreso = new Ingreso(descripcion, +valor);
       ingresos.push(ingreso);
        cargarCabecero();
        cargarIngresos();
        
    } else {
        const egreso = new Egreso(descripcion, +valor);
        egresos.push(egreso);
        cargarCabecero();
        cargarEgresos();
    }
    console.log(tipo);
}
