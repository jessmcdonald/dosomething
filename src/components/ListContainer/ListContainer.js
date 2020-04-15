import React from "react";
import "./ListContainer.css";
import ItemCounter from "../ItemCounter/ItemCounter";
import ToDoModal from "../ToDoModal/ToDoModal";

class ListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { description: "walk dog", checked: false },
        { description: "bake bread", checked: false },
        { description: "clean kitchen", checked: true },
      ],
      showModal: false,
      selectedItem: null,
    };
  }

  emptyText(e) {
    e.target.value = "";
  }

  updateCounter() {}

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

  showModal = (e) => {
    this.setState({ showModal: true });
    this.setState({ selectedItem: e.target.id });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleToDoStatusChange = (e) => {
    let updatedList = this.state.items;
    for (let i = 0; i < updatedList.length; i++) {
      if (updatedList[i].description === e.target.id) {
        if (updatedList[i].checked === false) {
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
        <ItemCounter items={this.state.items} />
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
          <th>Task</th>
          <th>Completed</th>
          <th>Details</th>
          <th>Delete</th>

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
                    id={item.description}
                  />
                </td>
                <td>
                  <button id={item.description} onClick={this.showModal}>
                    Details
                  </button>
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
        {this.state.showModal ? (
          <ToDoModal
            item={this.state.selectedItem}
            closeModal={this.closeModal}
          />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default ListContainer;
