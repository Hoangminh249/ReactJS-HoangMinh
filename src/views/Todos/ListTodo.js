import React from "react";
import AddTodo from "./AddTodo";
import "./listTodo.scss";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Fixing bug" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });

    toast.success("Wow so easy!");
  };

  handleEdit = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCoppy = [...listTodos];

      let objIndex = listTodosCoppy.findIndex((item) => item.id === todo.id);

      listTodosCoppy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: listTodosCoppy,
        editTodo: {},
      });

      toast.success("Update Succcess");

      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };

  handleDeleTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });

    toast.error("Delete Success!");
  };

  handleOnchangeEditTodo = (e) => {
    let editTodoCoppy = { ...this.state.editTodo };
    editTodoCoppy.title = e.target.value;
    this.setState({
      editTodo: editTodoCoppy,
    });
  };

  render() {
    let { listTodos, editTodo } = this.state;
    // let listTodos = this.state.listTodos
    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((el, i) => {
              return (
                <div className="Todo-child" key={el.id}>
                  {isEmptyObj === true ? (
                    <span>
                      {i + 1} - {el.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === el.id ? (
                        <span>
                          {i + 1} -{" "}
                          <input
                            onChange={(e) => this.handleOnchangeEditTodo(e)}
                            value={editTodo.title}
                          />
                        </span>
                      ) : (
                        <span>
                          {i + 1} - {el.title}
                        </span>
                      )}
                    </>
                  )}

                  <button onClick={() => this.handleEdit(el)} className="edit">
                    {isEmptyObj === false && editTodo.id === el.id
                      ? "Save"
                      : "Edit"}
                  </button>
                  <button
                    onClick={() => this.handleDeleTodo(el)}
                    className="delete"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
