import React, { Component } from "react";
import ColorBox from "../color-box/ColorBox.component";
import NavBar from "./../navbar/NavBar.component";
import { withStyles } from "@material-ui/styles";
import { styles } from "./Palette.styles.js";
// import "./Palette.styles.css";

class Palette extends Component {
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
    console.log("palette component props: ", this.props);
    const { classes } = this.props;
    const { level, colorFormat } = this.state;
    const { colors, paletteName, emoji } = this.props.palette;
    const colorBoxes = colors[level].map(colorItem => (
      <ColorBox key={colorItem.id} {...colorItem} format={colorFormat} />
    ));
    return (
      <div className={classes.PaletteClass}>
        <NavBar
          level={level}
          onChange={this.handleAfterChange}
          handleSelectChange={this.ChangeColorFormat}
        />
        <div className={classes.PaletteColorsClass}>{colorBoxes}</div>
        <footer className={classes.PaletteFooterClass}>
          {paletteName}
          <span className={classes.emojiClass}>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
