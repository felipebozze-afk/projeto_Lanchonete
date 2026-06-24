import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <div className="contador">
      <button onClick={diminuir}>-</button>
      <span>{contador}</span>
      <button onClick={aumentar}>+</button>
    </div>
  );
}

export default Contador;
