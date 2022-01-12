// import ItemCount from "./ItemCount";
// import getData from "../Services/getData";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import axios from "axios";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  console.log("Estos son los productos en ILC", products);

  // Fetch - Then

  // const getProductsFetch = () => {
  //   fetch("../JSON/data.json")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // };

  // const getProductsFetch = () => {
  //   fetch("https://franncode.vercel.app/api/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // };

  // Async - Await
  // const getProductsAA = async () => {
  //   const getData = await fetch("../JSON/DataList.json");
  //   const dataResponse = await getData.json();
  //   setProducts(dataResponse);
  // };

  // const getProductsAsyncAwait = async () => {
  //   const getProductsAA = await fetch(
  //     "https://franncode.vercel.app/api/products"
  //   );
  //   const getProducts = await getProductsAA.json();
  //   console.log("Los productos", getProducts);
  // };

  // Axios - Async / Await
  // const getProductsAxios = async () => {
  //   const getAxios = await axios.get("../JSON/DataList.json");
  //   const responseAxios = getAxios.data;
  //   console.log("Respuesta Axios: ", responseAxios);
  //   setProducts(responseAxios);
  // };

  const getProductsAxios = async () => {
    const getProductsAxios = await axios.get(
      "https://franncode.vercel.app/api/products"
    );
    // console.log( "Respuesta de axios", getProductsAxios);
    const responseAxios = getProductsAxios.data;
    setProducts(responseAxios);
  };

  // const getPokemonsAxios = async () => {
  //   const getRickAndMorty = await axios.get(
  //     "https://rickandmortyapi.com/api/character"
  //   );
  //   const responseRickAndMorty = getRickAndMorty.data;
  //   console.log("A ver", responseRickAndMorty);
  // };

  // useEffect(() => {
  //   getPokemonsAxios();
  // }, []);

  // useEffect(() => {
  //   getProductsFetch();
  // }, []);

  // useEffect(() => {
  //   getProductsAsyncAwait();
  // }, []);

  useEffect(() => {
    getProductsAxios();
  }, []);

  // useEffect(() => {
  //   getData
  //     .then((res) => setProducts(res))
  //     .catch((err) => alert("Ha ocurrido el siguiente error", err));
  // });
  return (
    <div>
      <h3>{greeting}</h3>
      {/* <ItemCount stock={15} initial={1} /> */}
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
