import React, { Component } from "react";

import css from "./counter.module.css";
import IncrementButton from "./IncrementButton";

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 2,
      steps: 0,
    };
  }


  handleButtonClick = (clickType) => {
    const { currentCounter, steps } = this.state;

    this.setState({
      currentCounter: 
      clickType === '+' ? currentCounter + 1 : currentCounter -1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;

    return (
      <div className={css.counterContainer}>

        <button
          onClick={this.handleButtonDownClick}
          className="waves-effect waves-light bnt red darken-4"
        >
          -
        </button>

        <span className={css.counterValue}>{currentCounter}</span>

        <IncrementButton onIncrement={this.handleButtonClick} />

        <span className={css.counterValue}>({steps})</span>
      </div>
    );
  }
}
