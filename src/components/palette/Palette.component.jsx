import React, { Component } from "react";
import ColorBox from "../color-box/ColorBox.component";
import NavBar from "./../navbar/NavBar.component";

import "./Palette.styles.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.handleAfterChange = this.handleAfterChange.bind(this);
  }

  handleAfterChange(newLevel) {
    this.setState({
      level: newLevel
    });
  }

  render() {
    // console.log(this.props);
    const { level } = this.state;
    const { colors } = this.props;
    const colorBoxes = colors[level].map((colorItem, i) => (
      <ColorBox key={i} {...colorItem} />
    ));
    return (
      <div>
        <div className="Palette">
          <NavBar level={level} onChange={this.handleAfterChange} />
          <div className="Palette-colors">{colorBoxes}</div>
        </div>
      </div>
    );
  }
}
