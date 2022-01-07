import { useState } from "react";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const [color, setColor] = useState("Verde");
  console.log("Soy el color", color);

  const changeToRed = () => {
    setColor("Rojo");
  };
  const changeToGreen = () => {
    setColor("Verde");
  };

  const onDecrease = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  };
  const onIncrease = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const onAdd = () => {
    const message = `Agregaste ${count} producto`;
    // if (count > initial) {
    //   alert(message + "s");
    // } else {
    //   alert(message);
    // }
    count === 1 ? alert(message) : alert(`${message}s`);
  };
  return (
    <div>
      <button onClick={changeToGreen}>Te cambio el texto a Verde</button>
      <button onClick={changeToRed}>Te cambio el texto a Rojo</button>
      <h2>Estado actual del color: {color}</h2>

      <h1>Soy el contador</h1>
      <div className="d-flex">
        <button className="px-3 mx-3" onClick={onDecrease}>
          -
        </button>
        <h3 className="px-3 mx-3">{count}</h3>
        <button className="px-3 mx-3" onClick={onIncrease}>
          +
        </button>
      </div>
      <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
};
export default ItemCount;
