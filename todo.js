import React, { useEffect, useState } from "react";
import "./style.css";

const SavedList = () => {
  const Save = localStorage.getItem("Mytodo");
  if (Save) {
    return JSON.parse(Save);
  } else {
    return [];
  }
};

const Todo = () => {
  const [todo, settodo] = useState();
  const [list, setlist] = useState(SavedList());

  const addItems = () => {
    if (!todo) {
      alert("write something");
    } else {
      const indentity = {
        _id: new Date().getTime().toString(),
        name: todo,
      };
      setlist([...list, indentity]);
    }
    settodo("");
  };

  useEffect(() => {
    localStorage.setItem("Mytodo", JSON.stringify(list));
  }, [list]);

  const deleteitem = (index) => {
    const deleteOne = list.filter((item) => {
      return item.id !== index;
    });
    setlist(deleteOne);
  };

  const RemoveAll = () => {
    setlist([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
            <figcaption>Add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Your Item"
              className="form-control"
              value={todo}
              onChange={(e) => settodo(e.target.value)}
            />
            <i className=" fa fa-solid fa-plus" onClick={addItems}></i>
          </div>
          <div className="showItems">
            {list.map((item) => {
              return (
                <>
                  <div className="eachItem">
                    <h3>{item.name}</h3>
                    <div className="todo-btn">
                      <i className="far fa-edit add-btn"></i>
                      <i
                        className="far fa-trash-alt add-btn"
                        onClick={() => deleteitem(item.id)}></i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={RemoveAll}>
              <span>Check-list</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
