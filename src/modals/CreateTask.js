import React, { useState, useEffect } from "react";
// import { createContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, InputGroup } from "reactstrap";
// import PersistentDrawerLeft from "./Drawer";
// const task = createContext();

const CreateTaskPopup = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    console.log("asfd");
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
    // setNtask(taskObj);
  };

  // const [ntask, setNtask] = useState("");
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} style={{marginTop:"80px"}}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Category Name</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label>Category List</label>
            
             <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            >
              
            </textarea> 
          
            
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      {/* <task.Provider value={ntask}>
        <PersistentDrawerLeft />
      </task.Provider> */}
    </div>
  );
};

export default CreateTaskPopup;
// export { task };
