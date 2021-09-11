import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

const List = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  // const [cat, setCat] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    // let category = localStorage.getItem(cat);

    // if(category) {
    //   setCat(category);
    // }

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  // const addCategory = () => {
  //   console.log("add category");
  //   var promptData = prompt("Please enter your Category");
  //   // setCat(promptData);
  //   console.log(promptData);
  // };


  return (
    <>
      <div className="header text-center" style={{ marginTop: "20px" }}>
        {/* <h3>Add Category</h3> */}
        <button
          className="btn btn-primary mt-2"
          onClick={() => setModal(true)}
          //   style={{ position: "fixed" }}
          // onClick={addCategory}
        >
          {" "}
          Add Category
        </button>
      </div>
      <div>
        {/* {cat} */}
        {/* {cat.map((d) => {
          <ul>
            <li>{d}</li>
          </ul>;
        })} */}
      </div>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default List;
