import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  const [ınput, setInput] = useState(1);

  const sayacArttir = () => {
    setCount(count + 1);
  };

  const sayacAzalt = () => {
    setCount(count - 1);
  };

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const sayacaEkle = () => {
    if (ınput) setCount(count + parseInt(ınput));
  };

  const SayactanCikar = () => {
    if (ınput) setCount(count - parseInt(ınput));
  };

  const sayacReset = () => {
    setCount(0);
    setInput(0);
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

        <input value={ınput} onChange={handleOnChange} className="mb-3" />
        <button className="btn btn-primary mx-3" onClick={sayacaEkle}>
          Ekle
        </button>
        <button className="btn btn-info" onClick={SayactanCikar}>
          Çıkar
        </button>
      </div>
    </div>
  );
}

export default App;
