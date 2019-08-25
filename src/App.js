import React from "react";
import { Route, Switch } from "react-router-dom";
import seedColors from "./components/data/seedColors";
import Palette from "./components/palette/Palette.component";
import { generatePalette, findPalette } from "./components/helpers/colorhelper";

function App() {
  // console.log(generatePalette(seedColors[4]));
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Mini Palette Home Page</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={routeProps => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
    </Switch>
    // {/* <div className="App">
    //   <Palette {...generatePalette(seedColors[{findPalette(routeProps.match.params.id)}])} />
    // </div> */}
  );
}

export default App;
