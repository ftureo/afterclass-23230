import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <h1>CODERSHOP</h1>
      <NavBar />
      <h2>AfterClass Successfully</h2>
      <ItemListContainer greeting="Bienvenidos a CoderSHOP" />
    </div>
  );
}

export default App;
