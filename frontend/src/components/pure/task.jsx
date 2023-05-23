import { Task  } from "../../models/task.class";
import { Levels } from "../../models/leveles.enum";

import React from 'react';
import PropTypes from 'prop-types';
// rfce props
//
import 'bootstrap/dist/css/bootstrap.css'
const TaskComponent = ({task}) => {


    //Function that returns a badge depending on the level of the Task; 

    function taskLevelBadge(){ 
        switch(task.level){ 
            case Levels.NORMAL:
                return (<span className='badge bg-primary'>Normal</span>);
            case Levels.MEDIUM:
                return (<span className='badge bg-warning'>Medium</span>);
            case Levels.HIGH:
                return (<span className='badge bg-danger'>High</span>);
            default:
                return (<span className='badge bg-primary'>Normal</span>);
                
        }
    }

    function iconCompleted(){ 
        if(task.status){ 
            return (<i className="bi bi-bookmark-check-fill" style={{color:'green'}}></i>);
        }else{ 
            return (<i className="bi bi-bookmark-x-fill" style={{color:'red'}}></i>);
        }
    }

    function ActionCompleted(){ 
        if(task.status){ 
            return (<i className="bi bi-toggle-on" style={{color:'green'}}></i>);
        }else{ 
            return (<i className="bi bi-toggle2-off" style={{color:'red'}}></i>);
        }
    }
    const changeState = (id) => { 
        console.log('Change State of Task: ' + id);
    }    
    return (
        <tr className='fw-normal'> 
            <th> 
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                <span className='ms-2'>{taskLevelBadge()}</span>
            </td>
            <td className='align-middle'>
            {iconCompleted()}
            </td>
            <td className='align-middle'>
                <button> 
                <i className='bi bi-eye-fill' ></i>
                </button>
                <button>
                 {ActionCompleted()}
                </button>
                <button>
                <i className='bi bi-trash3-fill' ></i>
                </button>
                <button> 
                    <i className='bi bi-pencil-square' ></i>                
                </button>
            </td>
        </tr>        
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)

};


export default TaskComponent;
