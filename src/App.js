import React from "react";
import seedColors from "./components/data/seedColors";
import Palette from "./components/palette/Palette.component";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
