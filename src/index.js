// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// Voy a ir renderizando punto por punto, de modo que es aconsejable ir probando punto x punto.

// 1-	Crear un elemento con createElement que se llame holaMundo y, dentro, contenga un párrafo que incluya la leyenda “Bienvenido a React”.

// const holaMundo = React.createElement("p", null, "Bienvenido a React");

// ReactDOM.render(
//   <>{holaMundo}</>,
//   document.getElementById('root')
// ); 

// 2-	Hacer un elemento con createElement que se llame listaDeCompras e incluya una lista ordenada con los siguientes ítems: “Pinolux”, “Manteca”, “Dulce de Leche”.

  // const listaDeCompras = React.createElement(
  //   "ol",
  //   null,
  //   React.createElement("li", null, "Pinolux"),
  //   React.createElement("li", null, "Manteca"),
  //   React.createElement("li", null, "Dulce de Leche")
  // );

  // ReactDOM.render(
  //   <>{listaDeCompras}</>,
  //   document.getElementById('root')
  // ); 

// 3-	Modificar la lista anterior para obtener los valores a partir de un array llamado arrayCompras.

  // // Genero el array de compras
  // const arrayCompras = ["Pinolux", "Manteca", "Dulce de Leche"];

  // // Asigno cada index del array de compras a cada elemento/item de la lista.
  // const listaDeCompras = React.createElement(
  //   "ol",
  //   null,
  //   React.createElement("li", null, arrayCompras[0]),
  //   React.createElement("li", null, arrayCompras[1]),
  //   React.createElement("li", null, arrayCompras[2])
  // );

  //   ReactDOM.render(
  //   <>{listaDeCompras}</>,
  //   document.getElementById('root')
  // ); 

// 4-	Transformar el elemento holaMundo en un componente llamado HolaMundo y que nos muestre el mismo resultado.

//   // Lo defino de nuevo porque estoy renderizando punto por punto.
// const holaMundo = React.createElement("p", null, "Bienvenido a React");

// // Acá paso el elemento y lo transformo en el componente Holamundo
//   const HolaMundo = () => holaMundo;

//     ReactDOM.render(
//     <>
//     <HolaMundo />
//     </>,
//     document.getElementById('root')
//   ); 

    // 5-	Al componente HolaMundo agregale el elemento listaDeCompras. Ahora solo llamá al componente HolaMundo y deberían verse tanto el “Bienvenido a React” como la lista de compras.

//     // Lo defino de nuevo porque estoy renderizando punto por punto.
//   const holaMundo = React.createElement("p", null, "Bienvenido a React");

//  // Lo defino de nuevo porque para agregarlo al componente HolaMundo.
//   const listaDeCompras = React.createElement(
//     "ol",
//     null,
//     React.createElement("li", null, "Pinolux"),
//     React.createElement("li", null, "Manteca"),
//     React.createElement("li", null, "Dulce de Leche")
//   );

// // Acá paso el elemento holaMundo para no perderlo y lo agrego en el componente Holamundo
//   const HolaMundo = () => {
//  return (
//     <>
//       {holaMundo},
//       {listaDeCompras}
//     </>
//     );
//   }

//   // Renderizo solo el componente HolaMundo con los 2 elementos
//     ReactDOM.render(
//     <>
//     <HolaMundo />
//     </>,
//     document.getElementById('root')
//   ); 

// 6 -	Agrega una prop a HolaMundo que sea “titulo” y pasale este nuevo para mostrarlo en lugar de “Bienvenido a React”

//  // Lo defino de nuevo porque para agregarlo al componente HolaMundo.
//   const listaDeCompras = React.createElement(
//     "ol",
//     null,
//     React.createElement("li", null, "Pinolux"),
//     React.createElement("li", null, "Manteca"),
//     React.createElement("li", null, "Dulce de Leche")
//   );

//   const HolaMundo = ({titulo}) => {
//  return (
//     <>
//       {titulo},
//       {listaDeCompras}
//     </>
//     );
//   }

//   // Renderizo solo el componente HolaMundo con los 2 elementos
//     ReactDOM.render(
//     <>
//     <HolaMundo titulo="Este es un nuevo título pasado por props desde el componente Hola Mundo" />
//     </>,
//     document.getElementById('root')
//   );

// 7-	Ponele un valor por defecto a título que sea “Por favor, incluí el título”. Valida que puedas ver tanto con la prop como sin ella.

//  // Lo defino de nuevo porque para agregarlo al componente HolaMundo.
//  const listaDeCompras = React.createElement(
//   "ol",
//   null,
//   React.createElement("li", null, "Pinolux"),
//   React.createElement("li", null, "Manteca"),
//   React.createElement("li", null, "Dulce de Leche")
// );

// const HolaMundo = (props) => {

//   const titulo = props.titulo;

//   // Invento otro titulo para cuando la props que se renderiza venga vacia(probar eliminando ese texto para ver como funciona el condicional) Es para probar que en ambos casos funcionaría.
//   const otroTitulo = "Este es un texto pero cuando la props viene vacia"

//   return (
//   <>
//     {titulo ? titulo : otroTitulo},
//     {listaDeCompras}
//   </>
//   );
// }

// // Renderizo solo el componente HolaMundo con los 2 elementos
//   ReactDOM.render(
//   <>
//   <HolaMundo titulo="Por favor, incluí el título" />
//   </>,
//   document.getElementById('root')
// );

//  8 - Mirando el siguiente código, (Y sin llevarlo al editor) ¿qué debo agregarle para que funcione?

// Respuesta: Faltan las etiquetas fragment (<> y </>) en el componente "Hola". Las mismas deberían ir luego del return encerrando el elemento {titulo} y el componente "Autor".

// 9 -	Solo mirando el código (que ahora sí funciona) responde:
// a)	¿Qué vería si le quito las llaves que encierran al h2?
// b)	¿Qué vería si le quito las llaves a nombre?
// c)	En la declaración del componente Autor:
// i)	¿Porqué uso props.nombre y no props.name? Si en el llamado desde Hola el atributo es nombre.
// ii)	si le paso un destructuring a props, qué debería escribir entre esos paréntesis y qué otra cosa habría que modificar para que me siga funcionando?
// d)	Si cambio la palabra “root” por “inicio”, ¿ qué otra línea debo cambiar para que la aplicación me siga funcionando?

// a)	¿Qué vería si le quito las llaves que encierran al h2?
//  Diría "escritor.articulo" de forma literal ya que al no estar entre llaves pierde esa carcaterística de variable al no poder referenciarse el valor del objeto "escritor".   

// b)	¿Qué vería si le quito las llaves a nombre?
// Diría "props.nombre" de forma literal ya que no se está referenciando al valor de la props, en este caso el nombre.

// c)	En la declaración del componente Autor:
// i)	¿Porqué uso props.nombre y no props.name? Si en el llamado desde Hola el atributo es nombre.
// Porque {props.nombre} hace referencia al nombre de la prop por sí misma y {escritor.name} es el valor que se le está pasando del objeto "escritor" al atributo llamado "nombre" desde el componente "Autor".

// ii)	si le paso un destructuring a props, qué debería escribir entre esos paréntesis y qué otra cosa habría que modificar para que me siga funcionando?

// Sin modificación: --> const Autor = (props) => <pre>{props.nombre}</pre>
// Con modificación: --> const Autor = ({nombre}) => <pre>{nombre}</pre>

// Como se puede ver, se elimina la palabra "props" y se incluye la desestructuracion con "{nombre}" para luego utilizarse por referencia dentro del elemento <pre>.

// d)	Si cambio la palabra “root” por “inicio”, ¿ qué otra línea debo cambiar para que la aplicación me siga funcionando?

// Vamos a tener que cambiar también el id que se encuentra en el archivo index.html de la carpeta public por el mismo nombre ya que si no lo cambiamos, estaríamos perdiendo la referencia del id principal para que la página luego se pueda renderizar.

// 10 -	Transformá el elemento titulo en un componente. Chequea que siga funcionando.

//  const escritor = {
//   id: 1,
//   name: "Rodrigo",
//   articulo: "El comienzo de una era"
// };

// // Se remplaza el siguiente elemento --> let titulo = <h2>{escritor.articulo}</h2> por la creación del componente "Titulo"
// const Titulo = () => <h2>{escritor.articulo}</h2>;
// const Autor = (props) => <pre>{props.nombre}</pre>;
  
// const Hola = () => {
//   return (
//     <>
//     {/* Se remplaza la invocación al elemento titulo --> {titulo} por el componente "Titulo" */}
//     <Titulo/>
//     <Autor nombre = {escritor.name} />
//     </>
//   );
// ;}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Hola />, rootElement); 