import React, { Component } from "react";
import '../../App.css';

export class MenuButton extends Component {
  render() {
    return (
      <div>
        <div class="buttonContainer" onClick={this.myFunction}
             onMouseDown={this.props.handleMouseDown}>
             <i class="material-icons">menu</i>

        </div>
      </div>
    );
  }
}
