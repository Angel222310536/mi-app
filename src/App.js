import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("Cargando...");

  useEffect(() => {
    fetch("https://2h3rwr6y8f.execute-api.us-east-1.amazonaws.com/prod")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMensaje(data.message);
      })
      .catch(err => {
        console.error(err);
        setMensaje("Error al conectar");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{mensaje}</h1>
    </div>
  );
}

export default App;
