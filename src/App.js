import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import Default from "./pages/Default";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/recipes" component={Recipes} />
            <Route path="/recipes/:id/information" component={SingleRecipe} />
            <Route path="/about" component={About} />
            <Route component={Default} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
