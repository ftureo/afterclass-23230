import ItemCount from "./ItemCount";

const ItemListContainer = ({ greeting }) => {
  // Logica que necesitamos desarrollar
  return (
    // Lo que queremos que se renderice
    <div>
      <h1>Soy el ItemListContainer</h1>
      <h2>Debajo vamos a poner el saludo</h2>
      <h3>{greeting}</h3>
      <h3>Acá vamos a poner un contador</h3>
      <ItemCount stock={15} initial={1} />
    </div>
  );
};
export default ItemListContainer;
