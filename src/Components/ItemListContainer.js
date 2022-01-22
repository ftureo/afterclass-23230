import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from "axios";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const getDataProducts = await axios.get(
  //     "https://franncode.vercel.app/api/products"
  //   );
  //   const productsResponse = getDataProducts.data;
  //   setProducts(productsResponse);
  // };

  const getProducts = async () => {
    const getDataProducts = await axios.get(
      "https://fakestoreapi.com/products"
    );
    console.log(getDataProducts); // Vemos la respuesta del pedido Axios
    const productsResponse = getDataProducts.data; // Acá guardamos la información que necesitamos accediendo a la key "data"
    console.log(productsResponse); // Vemos la data guardada
    setProducts(productsResponse); // Seteamos el estado "products"
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h3>{greeting}</h3>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
