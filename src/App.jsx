function App() {
  let nombre = "Andres";
  return <p class="titulo">Hola {nombre} Como estas?</p>; //estas no son estiquetas html, luego se procesa esa "etiqueta" y la convierte en un elemento React
}
export default App;
