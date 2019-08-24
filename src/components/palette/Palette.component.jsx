import React, { Component } from "react";
import ColorBox from "../color-box/ColorBox.component";
import "./Palette.styles.css";

export default class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((colorItem, i) => (
      <ColorBox key={i} {...colorItem} />
    ));
    return (
      <div>
        <div className="Palette">
          <div className="Palette-colors">{colorBoxes}</div>
        </div>
      </div>
    );
  }
}
