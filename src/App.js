import React from "react";
import seedColors from "./components/data/seedColors";
import Palette from "./components/palette/Palette.component";
import { generatePalette } from "./components/helpers/colorhelper";

function App() {
  // console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
