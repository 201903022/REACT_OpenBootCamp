import { Task  } from "../../models/task.class";
import { Levels } from "../../models/leveles.enum";

import React from 'react';
import PropTypes from 'prop-types';
// rfce props
//

const TaskComponent = ({task}) => {
    return (
        <div>
            <h1>{task.name}</h1>
            <p>{task.description}</p>
            <p>This Task is: {task.status ? 'COMPLETED' : 'PENDING'}</p>
            <p>{task.level}</p>                        
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(TaskComponent)

};


export default TaskComponent;
