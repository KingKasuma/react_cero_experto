const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5456789,
        lat: 14.3232,
        lng: 34.923568
    }
};

console.log( persona );

//Operador spreed, sirve para copiar un objeto
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona2);
console.log(persona2);