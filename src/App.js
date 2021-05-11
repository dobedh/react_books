import "./App.css";
import Home from "./components/Home";
import Book from "./components/Book";
import Detail from "./components/Detail";
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/book/:id" exact={true} component={Detail}></Route>
    </HashRouter>
  );
}

export default App;
