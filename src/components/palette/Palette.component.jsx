import React, { Component } from "react";
import ColorBox from "../color-box/ColorBox.component";
import NavBar from "./../navbar/NavBar.component";

import "./Palette.styles.css";

export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      colorFormat: "hex"
    };
    this.handleAfterChange = this.handleAfterChange.bind(this);
    this.ChangeColorFormat = this.ChangeColorFormat.bind(this);
  }

  handleAfterChange(newLevel) {
    this.setState({
      level: newLevel
    });
  }

  ChangeColorFormat(val) {
    // alert(val);
    this.setState({
      colorFormat: val
    });
  }

  render() {
    // console.log(this.props);
    const { level, colorFormat } = this.state;
    const { colors } = this.props;
    const colorBoxes = colors[level].map((colorItem, i) => (
      <ColorBox key={i} {...colorItem} format={colorFormat} />
    ));
    return (
      <div>
        <div className="Palette">
          <NavBar
            level={level}
            onChange={this.handleAfterChange}
            handleSelectChange={this.ChangeColorFormat}
          />
          <div className="Palette-colors">{colorBoxes}</div>
        </div>
      </div>
    );
  }
}
