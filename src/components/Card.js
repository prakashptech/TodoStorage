import React, { useState } from "react";
import EditTask from "../modals/EditTask";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div className="card-wrapper mr-5" style={{ paddingRight: "30px" }}>
      <div className="task-holder">
        <span className="card-header">
          <b>{taskObj.Name}</b>
        </span>
         {/* <p classNameName="mt-3"> */}
        {/* </p>  */}
          
        <ul>
          <li> {taskObj.Description} </li>
        </ul>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            className="far fa-edit mr-3"
            style={{ cursor: "pointer", paddingRight: "8px" }}
            onClick={() => setModal(true)}
          ></i>

          <i
            className="fas fa-trash-alt"
            style={{ cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
