import React from "react";
import "./ToDoModal.css";

class ToDoModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.item}
        <button onClick={this.props.closeModal}>Close</button>
      </div>
    );
  }
}

export default ToDoModal;
