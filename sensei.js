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
 
        console.log (`"Nombre: ${this.nombre}, `+`Salud: ${this.salud}, `+`Velocidad: ${this.velocidad}, `+`Fuerza: ${this.fuerza}"`);
    }

    drinkSake () {
        this.salud += 10;
        //console.log(`Salud: ${this.salud}`); //al crear la clase sensei ocultamos esta impresion
    }
}

//const estudiante1 = new ninja ("Ricardo", 5, 0, 0);
//estudiante1.sayName ();
//estudiante1.showStats ();
//estudiante1.drinkSake ();


class sensei extends ninja {
    constructor (nombre) {
        super(nombre, 200, 10, 10); //usando super podemos llamar al constructor padre
        this.sabiduria = 10;
    }

    speakwisdom () {
        const message = super.drinkSake (); //usando super podemos llamar a otro metodo padre
        console.log(`Sabiduría nivel ${this.sabiduria}: `+`"Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."`);
    }
}

const supersensei = new sensei ("Master Splinter");
supersensei.speakwisdom ();

supersensei.showStats ();