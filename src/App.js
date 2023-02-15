// import logo from "./logo.svg";
/* 
PREGUNTAS EN CLASE:
1. Cómo importar imágenes de forma dinámica, por ejemplo para que cambie la imagen de fondo en  el componente Album
2. Cómo hacer que sea responsive el texto que está en la imágen y que esté siempre centrado
  2.1 Que el título ocupe un 90% del espacio y el tamaño de la letra se acomode
  2.2 Que el subtítulo (album name) se estire y queda en linea con el bloque de título.
3. cómo modificar el ancho de la linea que forma el ícono del boton corazón (es un ícono de react icons que se importó en el componente)
  3.1 cómo cambiar el color dentro del corazón y manejar el evento cuando se haga clic.
*/
import "./App.scss";
import Album from "./components/Album";

function App() {
  return (
    <div className="App">
      <Album
        artist="Rozes"
        album="Under the Grave"
        year="2016"
        groupType="solista"
      />
      {/* <Album
        artist="Camilo"
        album="Una noche"
        year="2018"
        groupType="band"
        imgUrl="../images/album-image.jpg"
      /> */}
    </div>
  );
}

export default App;
