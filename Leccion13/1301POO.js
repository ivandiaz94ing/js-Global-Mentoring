class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;

    }

    obtenerDetalles() {
        return `Empleado:   Nombre: ${this.nombre},  Sueldo: $${this.sueldo},`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles() {
        return super.obtenerDetalles() + ` Departamento: ${this.departamento}`;
    }
}
let empleado1 = new Empleado('Katty', '750.000');
let gerente1 = new Gerente('Ivan', '2300000', 'Sistemas');


//POLIMORFISMO
function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
}

function determinarTipo(tipo) {
    if (tipo instanceof Gerente) {
        console.log('Este objeto es de tipo gerente');

    } else {
        if (tipo instanceof Empleado) {
            console.log('Este objeto es de tipo empleado');
        }
    }
}

imprimir(empleado1);
imprimir(gerente1);
determinarTipo(empleado1);
determinarTipo(gerente1);
