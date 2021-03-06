import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.styles.css";

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleCopy() {
    this.setState({ copied: true }, () => {
      setTimeout(() => {
        this.setState({ copied: false });
      }, 1500);
    });
  }

  render() {
    // console.log(this.props);
    const { hex, name, format } = this.props;
    return (
      <CopyToClipboard text={this.props[format]} onCopy={this.handleCopy}>
        <div className="ColorBox" style={{ background: hex }}>
          <div
            style={{ background: hex }}
            className={`copy-overlay ${this.state.copied && "show"}`}
          />
          <div className={`copy-message ${this.state.copied && "show"}`}>
            <h1>Copied</h1>
            <p>{this.props[format]}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    );
  }
}
