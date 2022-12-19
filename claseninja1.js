class ninja {
    constructor (nombre,salud,velocidad, fuerza) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName () {
        console.log (`Nombre: ${this.nombre}`);
    }

    showStats () {
        if (this.velocidad == 0) this.velocidad = 3;       
        if (this.fuerza    == 0) this.fuerza = 3;
 
        console.log (`Nombre: ${this.nombre}, `+`Salud: ${this.salud}, `+`Velocidad: ${this.velocidad}, `+`Fuerza: ${this.fuerza}`);
    }

    drinkSake () {
        this.salud += 10;
        console.log(`Salud: ${this.salud}`);
    }
}

const estudiante1 = new ninja ("Ricardo", 5, 0, 0);
estudiante1.sayName ();
estudiante1.showStats ();
estudiante1.drinkSake ();