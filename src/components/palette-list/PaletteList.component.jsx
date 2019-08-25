import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PaletteList.styles.css";

export default class PaletteList extends Component {
  render() {
    console.log(this.props);
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map(palette => (
          <div>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </div>
        ))}
      </div>
    );
  }
}
