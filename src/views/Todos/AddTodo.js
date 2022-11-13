import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnchangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleClickAdd = (e) => {
    if (!this.state.title) {
      toast.error('Missing title');
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          onChange={(e) => this.handleOnchangeTitle(e)}
          value={title}
          type="text"
        />
        <button
          onClick={(e) => this.handleClickAdd(e)}
          className="add"
          type="button"
        >
          add
        </button>
      </div>
    );
  }
}
export default AddTodo;
