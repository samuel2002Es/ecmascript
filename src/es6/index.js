/* default params y concatenacion  */
function newFuntion(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name + ' ' + age + ' ' + country);
}
//es6
function newFuntion2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name + ' ' + age + '' + country);
}

newFuntion2();
newFuntion2('Ricardo', '23', 'CO');


//Template literals
let hello = "hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
/* las comillas son francesas  
 "Ctrl" + "Shift" + "u" + exadecimal(60)*/
let epicPhrase2 = `${hello} ${world}`;
/* concadenar */
console.log(epicPhrase2);

/* multilinea en los Strings */
let lorem = 'hola soy samuel espinoza estudiante de platzi \n'
    + "hola aqui continuo ...";

let lorem2 = `otra frace epica que necesitamos
y solamente con un enter ya estoy escribiendo otra frace epica`;

console.log(lorem2)

/* Desestructuracion de elementos */
let person = {
    'name': 'oscar',
    'age': 18,
    'country': 'MX'
}
console.log(person.name,person.age,person.country);
let { name, age, country } = person;
console.log(name, age, country);

/* Operador de propagacion */
/* unimos elementos de strings de forma amigable */
/* que pasa si tenemos un arreglo donde aparece la misma persona y no queremos que se repita */
let team1 = ['oscar','julian','ricardo','maria'];
let team2 = ['Valeria','Yesica','Camila','maria'];

let education = ['David', ...team1, ...team2];
let educationMojorado = [...new Set(['David', ...team1, ...team2])];
console.log(education);
console.log(educationMojorado);
/* nos imprime solo una maria que es la que aparece repetida */

/* var let y const  */

{
    var globalVar = "Global var";
}
{
    let globalLet = "global let"; 
    console.log(globalLet);
}
console.log(globalVar);

/* no es permitido renombrar */
const a = 'b';
a = 'a';
console.log(a);
