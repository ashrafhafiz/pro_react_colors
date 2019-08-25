import React, { Component } from "react";
import ColorBox from "../color-box/ColorBox.component";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
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
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={newLevel => this.handleAfterChange(newLevel)}
            />
          </div>
          <div className="Palette-colors">{colorBoxes}</div>
        </div>
      </div>
    );
  }
}
