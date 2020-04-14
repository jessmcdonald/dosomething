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

  emptyText(e) {
    e.target.value = "";
  }

  addNewTodo = (e) => {
    if (e.keyCode === 13) {
      let newList = this.state.items.concat({
        description: e.target.value,
        checked: false,
      });
      this.setState({ items: newList }, this.emptyText(e));
    }
  };

  deleteTodo = (e) => {
    let todelete = e.target.id;
    let filteredList = this.state.items.filter(function (el) {
      return el.description !== todelete;
    });
    this.setState({ items: filteredList });
  };

  handleToDoStatusChange = (e) => {
    let updatedList = this.state.items;
    for (let i = 0; i < updatedList.length; i++) {
      if (updatedList[i].description == e.target.id) {
        if (updatedList[i].checked == false) {
          updatedList[i].checked = true;
        } else {
          updatedList[i].checked = false;
        }
      }
    }
    this.setState({ items: updatedList });
  };

  render() {
    return (
      <div className="app-container">
        <h3 className="app-header">What do you want to do?</h3>
        <div className="add-new-todo">
          <input
            type="text"
            placeholder="Type your new to-do and hit enter.."
            className="new-todo-input"
            onKeyDown={this.addNewTodo}
          ></input>
        </div>
        <table className="todo-table">
          <tbody>
            <th>Task</th>
            <th>Completed</th>
            <th>Delete</th>

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
                    id={item.description}
                  />
                </td>
                <td>
                  <button id={item.description} onClick={this.deleteTodo}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListContainer;
