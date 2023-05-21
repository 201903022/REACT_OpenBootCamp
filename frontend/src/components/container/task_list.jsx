import { Task } from "../../models/task.class";
import { Levels } from "../../models/leveles.enum";
import TaskComponent from "../pure/task";
import React from 'react';
import PropTypes from 'prop-types';

//rfcp
const TaskList = () => {
    const defaultTask = new Task(0,'Example','Default description',false,Levels.NORMAL)    

    return (
        <div>
            <div> 
                <h1>Task List</h1>            
            </div>
            {/* {Apply either a for || Map to renderizate all tasks} */}
            <TaskComponent task={defaultTask} />
        </div>
    );
};


TaskList.propTypes = {

};


export default TaskList;
