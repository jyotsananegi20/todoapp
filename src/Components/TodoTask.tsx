import React, { FC } from "react";
import { Interface } from "readline";
import { task } from "../Types";
interface props {
    task: task;
    key: number;
    completeTask(taskNameToDelete: string):void;
}

const TodoTask:React.FC<props> = ({task, key, completeTask}: props) => {
    return(
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={()=>{
                completeTask(task.taskName)
            }}>X</button>
           {key}  
        </div>
    )
}

export default TodoTask