import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.countdisplay()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.onIncrement.counter)} // Doubt
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.onDecrement.counter)}
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.onDelete.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  countdisplay() {
    return this.props.counter.value == 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
