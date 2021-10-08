import React from "react";
import { Switch, Route } from "react-router-dom";
import Restaurant from "./Restaurant";
import Restaurants from "./Restaurants";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/restaurantes/:slug">
          <Restaurant />
        </Route>
        <Route>
          <Restaurants />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
