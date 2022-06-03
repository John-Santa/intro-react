/**
 * namess
 * Es una coleccion de datos presente en una misma variable.
 * No se recomienda usar push dado que modifica el arreglo original;
 * Es por esto que se recomienda usar spread operator.
 */

 const names = [];
 names.push('John');
 names.push('Maicol');
 names.push('Byron');
 names.push('Javier');
 names.push('Gabriel');
 console.log(names);
 
 let fullNames = [...names, 'Miguel'];
 console.log(fullNames);
 
 /**
  * Map
  * Es una funcion que permite iterar sobre un arreglo.
  * Esta crea un nuevo arreglo con los resultados de la funcion.
  */
 const names2 = names.map(name => `${name} Santa`);
 console.log(names2);