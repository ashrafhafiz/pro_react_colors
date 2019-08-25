import chroma from "chroma-js";
import seedColors from "../data/seedColors";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
// const log = console.log;
export function generatePalette(starterPalette) {
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };

  levels.forEach(level => (newPalette.colors[level] = []));
  //   for (let level in levels) {
  //     newPalette.colors[level] = [];
  //   }

  //   log(newPalette);

  //   for (let color of starterPalette.colors)
  starterPalette.colors.forEach(color => {
    let scale = generateScale(color.color, 10).reverse();
    // log(scale);
    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "_"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)")
      });
    }
  });
  return newPalette;
}

function getRange(hexColor) {
  const end = "#FFFFFF";
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

function generateScale(hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor))
    .mode("lab")
    .colors(numberOfColors);
}

export function findPalette(paletteId) {
  return seedColors.find(palette => {
    return palette.id === paletteId;
  });
}
