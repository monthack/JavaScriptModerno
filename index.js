//funcion normal
function sumar(numero) {
  console.log(numero);
}
sumar(10);

//funciones de flecha
//mas de un parametro se tiene que ocupar los parentesis
const sumarDos = (num, num2) => {
  console.log(num + num2);
};
sumarDos(20, 20);

/**cuando se retorna el resultado setiene que crear
 * una variable para guardarla
 */
const sumarTres = (nume1, nume2, nume3) => {
  return nume1 + nume2 + nume3;
};
const resultado = sumarTres(20, 30, 40);
console.log(resultado);

//como es un solo parametro no necesitamos los parentesis
/**quitamos el return y las llaves y colocar un return
 * automatico
 */
const mensaje = (nombre) => "Hola " + nombre;

const mensajeM = mensaje("montse");
console.log(mensajeM);

/**si el usuario no le manda nada, le ponemos un valor
 * por defecto
 */
const sumaCuatro = (nu = 0) => {
  console.log(nu + 3);
};
sumaCuatro();

/**Template String */
/**mezclar string y variables */
const numeros = (n) => `el numero es ${n}`;
const el = numeros(10);
console.log(el);

/**Objetos */
const mascota = {
  nombre: "Tom", //propiedad y valor
  edad: 10,
  vivo: true,
  altura: ["grande", "mediano", "pequeño"]
};

console.log(mascota);
console.log(mascota.nombre);

mascota.id = 1; //como agregar propiedades y valor a un objeto
console.log(mascota.id);
console.log(mascota.altura[0]);

//antes se hacia así y ahora con destructuring
const nombreMascota = mascota.nombre;
console.log(nombreMascota);
/**Destructuring Objects */
const { nombre, edad } = mascota;
console.log(nombre, edad);

//Jugando con objetos

const web = {
  nombre: 'Montse',
  links: {
   enlace: 'www.chilaquiles.com'
  },
  redesSocliales: {
    facebook:{
      enlace: 'https://www.chiaquies.com',
      nombre: 'las curvas',
    },
    instagram: '/instagram/chilaquiles',
  },
}
const enlaceYT = web.redesSocliales.facebook.nombre
console.log(enlaceYT)

const {enlace} = web.redesSocliales.facebook
console.log(enlace)

/**  fetch
 * consumir una api = una respuesta del servidor que podemos
 * consumir
 */

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((res) => res.json()) //espera una promesa que nos devulva un dato, lo transformamos
  .then((data) => {
    //nos devulva la data
    // console.log(data.results)
    let arrayNombre = [];
    data.results.forEach((element) => {
      //para recorrer
      console.log(element.name);
      arrayNombre.push(element.name); //nos sirve para solo enpujar los nombre en un array vacio
    });
    console.log(arrayNombre);
  })
  .catch((error) => console.log(error));

/**Async Await
 * await va a funcionar simpre y cuando este en una funcion async
 * el await sustituye al .then y .catch eso lo hace más legible
 *
 * el map sirve para recorrer el array, el nombre dela funcion de
 * fecha poke puede se cualquier nombre solo nos representara los objetos
 *
 * el filter sirve para solo mostrarte el elemento que deseas buscar y que
 * se repitan
 */

const obtenerPokemones = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();
    // console.log(data.results)
    //const arrayNombres = data.results.map(poke => poke);   //recorrer un array
    const arrayNombres = data.results.filter(poke => poke.name !== "bulbasaur"); //puedes filtar como un campo o excluirlo
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};
obtenerPokemones();

/** Map
 * crea un nuevo array con los resultados a la llamada de la funcion indicada
 * aplicado a todos sus elementos
 */
