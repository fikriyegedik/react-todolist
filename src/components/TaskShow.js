import { useState } from "react";
import TaskCreate from "./TaskCreate";
function TaskShow({ task, onDelete ,onUpdate}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  const handleEditClick = () => {
    setShowEdit(true);
  };

  const handleSubmit = (id, updatedTitle , updatedTaskDesc) =>{
    setShowEdit(false)
    onUpdate (id,updatedTitle, updatedTaskDesc)

  }

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <div>
          <h3 className="task-title">Your Task</h3>
          <p>{task.title}</p>
          <h3 className="task-title">To Do List</h3>
          <p>{task.taskDesc}</p>
          <div className="task-buttons">
            <button className="task-delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="task-update-btn" onClick={handleEditClick}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
