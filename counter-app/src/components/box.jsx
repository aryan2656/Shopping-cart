import React from "react";
import Counter from "./counter";

function Box() {
  return (
    <>
      <div className="d-flex">
        <img src="./src/Apple watch.webp"></img>
        <div>
          <h3>
            Apple Watch SE (GPS + Cellular, 40mm) - Space Grey Aluminium Case
            with Midnight Sport Band - Regular
          </h3>
          <Counter
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
          ></Counter>
        </div>
      </div>
    </>
  );
}

export default Box;
