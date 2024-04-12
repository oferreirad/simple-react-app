import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [animal, setAnimal] = useState();

  const getAnimal = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setAnimal(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAnimal();
  }, []);

  return (
    <div className="App">
        <button type="primary" onClick={getAnimal}>Alterar imagem</button>
      <header className="App-header">
        <img src={animal?.message} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
