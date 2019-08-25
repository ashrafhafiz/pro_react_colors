import React, { Component } from "react";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import "rc-slider/assets/index.css";
import "./NavBar.styles.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorFormat: "hex"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      colorFormat: e.target.value
    });
    this.props.handleSelectChange(e.target.value);
  }
  render() {
    const { level, onChange } = this.props;
    const { colorFormat } = this.state;
    return (
      <nav className="NavBar">
        <div className="logo">
          <a href="#">ReactColorPicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={onChange}
            />
          </div>
        </div>
        <Select value={colorFormat} onChange={this.handleChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - #rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - #rgb(255, 255, 255, 1)</MenuItem>
        </Select>
      </nav>
    );
  }
}
