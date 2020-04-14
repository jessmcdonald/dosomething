import React from "react";
import "./ItemCounter.css";

class ItemCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemCount: null,
      itemCompleted: null,
    };
  }

  componentDidMount() {
    let itemCount = this.props.items.length;
    let itemCompleted = this.props.items.filter(function (el) {
      return el.checked !== false;
    }).length;
    this.setState({ itemCount: itemCount });
    this.setState({ itemCompleted: itemCompleted });
  }

  render() {
    return (
      <div>
        You have completed {this.state.itemCompleted} out of{" "}
        {this.state.itemCount} tasks!
      </div>
    );
  }
}

export default ItemCounter;
