import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";

import { BrowserRouter, Switch, Redirect, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <h1>CODERSHOP</h1>
        </Link>
        <NavBar />
        <h2>AfterClass Successfully</h2>
        <Switch>
          <Route exact path="/" component={ItemListContainer}></Route>
          <Route
            exact
            path="/products/:id"
            component={ItemDetailContainer}
          ></Route>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
