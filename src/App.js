import React from "react";
import { Route, Switch } from "react-router-dom";
import seedPalettes from "./components/data/seedPalettes";
import Palette from "./components/palette/Palette.component";
import PaletteList from "./components/palette-list/PaletteList.component";
import { generatePalette, findPalette } from "./components/helpers/colorhelper";

function App() {
  // console.log(generatePalette(seedPalettes[4]));
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={seedPalettes} />}
      />
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
    //   <Palette {...generatePalette(seedPalettes[4])} />
    // </div> */}
  );
}

export default App;
