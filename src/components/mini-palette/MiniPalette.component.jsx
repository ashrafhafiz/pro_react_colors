import React from "react";
import { withStyles } from "@material-ui/styles";
import { styles } from "./MiniPalette.styles.js";

// import './MiniPalette.styles.css'

const MiniPalette = props => {
  const { classes, paletteName, emoji } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
