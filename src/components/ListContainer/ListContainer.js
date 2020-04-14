import React from "react";
import "./ListContainer.css";

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { description: "walk dog", checked: false },
        { description: "bake bread", checked: false },
        { description: "clean kitchen", checked: true },
      ],
    };
  }

  addNewTodo = (e) => {
    if (e.keyCode == 13) {
      let newList = this.state.items.concat({
        description: e.target.value,
        checked: false,
      });
      this.setState({ items: newList });
    }
  };

  handleToDoStatusChange = (event) =>
    this.setState({ checked: event.target.checked });

  render() {
    return (
      <div className="app-container">
        <h3 className="app-header">Here's what you have to do today:</h3>
        <div className="add-new-todo">
          <input
            type="text"
            placeholder="Type your new todo here.."
            className="new-todo-input"
            onKeyDown={this.addNewTodo}
          ></input>
        </div>
        <table className="todo-table">
          <tbody>
            {this.state.items.map((item) => (
              <tr
                className={`status-${item.checked} todo-item`}
                key={item.description}
              >
                <td>{item.description}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={this.handleToDoStatusChange}
                  />
                </td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListContainer;
