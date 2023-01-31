console.log('Listado de personas');

const personas = [
    new Persona ('Marina', 'Rosso'),
    new Persona ('Rafael', 'Diaz')
];

function mostrarPersonas(){
    let texto = ' ';
    for (persona of personas) {
        console.log(persona);
        texto +=`<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona (){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const persona = new Persona(nombre.value, apellido.value);
    if(persona.nombre != '' || persona.apellido != '' ){
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay informacion que registrar');
    }
}


