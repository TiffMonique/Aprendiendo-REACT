const persona = {
    nombre: 'Monique',
    apellido: 'Stark',
    edad: 21,
    direccion: {
        ciudad: 'New York',
        zip: 5532456,
        lat: 14.2345,
        lng: 34.94232311
    }
}

//console.table(persona);
console.log(persona);

const persona2 = persona;
console.log(persona2);