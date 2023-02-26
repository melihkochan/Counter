import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  const [Increment, setIncrement] = useState(1);

  const sayacArttir = () => {
    setCount(count + Increment);
  };

  const sayacAzalt = () => {
    setCount(count - Increment);
  };

  const handleOfIncrement = (e) => {
    setIncrement(+e.target.value);
  };

  const sayacReset = () => {
    setCount(0);
    setIncrement(1);
  };
  return (
    <div className="d flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>Sayaç Uygulaması</h1>
        <div className="my-5">
          <h2 className="my-5">{count}</h2>
          <button className="btn btn-success mx-3" onClick={sayacArttir}>
            +
          </button>
          <button className="btn btn-danger mx-3" onClick={sayacAzalt}>
            -
          </button>
          <button className="btn btn-secondary mx-3" onClick={sayacReset}>
            Resetle
          </button>
        </div>
      <div>Artış Miktari</div>
        <input value={Increment} onChange={handleOfIncrement} className="mb-3" />
   
      </div>
    </div>
  );
}

export default App;
