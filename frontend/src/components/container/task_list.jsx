import { Task } from "../../models/task.class";
import { Levels } from "../../models/leveles.enum";
import TaskComponent from "../pure/task";
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import TasksForms from "../pure/forms/TasksForms";


//rfcp
const TaskList = () => {
    const defaultTask1 = new Task(0,'Example1','Default description1',true,Levels.LOW)    
    const defaultTask2 = new Task(1,'Example2','Default description2',false,Levels.NORMAL)    
    const defaultTask3 = new Task(2,'Example3','Default description3',true,Levels.MEDIUM)    
    const defaultTask4 = new Task(3,'Example4','Default description4',false,Levels.HIGH)    
    const [addTaskForm, setAddTaskForm] = useState(false);
    const [seeTaskList, setSeeTaskList] = useState(true);    

    const [tasksL, setTasksL] = useState([defaultTask1,defaultTask2,defaultTask3,defaultTask4]);

    const TaskTablee = () => 
    { 
        return (
                <table> 
            <thead> 
                <tr> 
                    <th scope='col'>Title </th>
                    <th scope='col'>Description </th>
                    <th scope='col'>Priority </th>
                    <th scope='col'> Completed </th>
                    <th scope='col'>Actions </th>
                </tr>                        
            </thead>
            <tbody>
                {tasksL.map((task) => {
                    return (<TaskComponent
                        task={task} 
                        key={task.id} 
                    complete={completeTask}
                    deleteT={deleteTasks}
                    edit={editTask}                    
                        />);
                })}
            </tbody>
        </table>   
        )
    }  

    function completeTask(id){ 
        const tempTasks = [...tasksL]
        for (let i = 0; i < tempTasks.length; i++) {
            if(tempTasks[i].id === id){ 
                tempTasks[i].status = !tempTasks[i].status
                break;
            }
        }
        // tempTasks[id].status = !tempTasks[id].status
        setTasksL(tempTasks)
    }    

    function deleteTasks(id) {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
          const tempTasks = [...tasksL];
          setTasksL(tempTasks.filter((n) => n.id !== id));
        }
    }

    function editTask(id,name,description,level){ 
        if (window.confirm('Are you sure you want to edit this task? ')) {
            const tempTasks = [...tasksL]
            for (let i = 0; i < tempTasks.length; i++) {
                if(tempTasks[i].id === id){ 
                    tempTasks[i].name = name
                    tempTasks[i].description = description
                    tempTasks[i].level = level
                    break;
                }
            }
            setTasksL(tempTasks)            
        }
    }

    function addTask(name,description,level){ 
        const tempTasks = [...tasksL]
        const newTask = new Task(tempTasks.length,name,description,false,level)
        tempTasks.push(newTask)
        setTasksL(tempTasks)
    }

    function tasksEmpty(){ 
        if (tasksL.length>0) {
            return(
                <>
                 <TaskTablee/>
                </>
            );
        }
        return(
            <>
             <h3>There are no tasks</h3>
            </>
        )
    }


    return (
        <div className='col-15'>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header p-3 align-items-center">
                            <h5>Add Task</h5>
                            <TasksForms add={addTask} />
                            </div>
                    </div>
                </div>
            </div>
            <br/>         
            <div className="card"> 
                <div className="card-header ">
                    <h5>Task List</h5>
                </div>
                <div className="card-body align-items-center" data-mdb-perfect-scrollbar style={{position: 'relative', }}>   
                   { 
                     tasksEmpty()
                   }       
                </div>
            </div>
        </div>
    );
};


TaskList.propTypes = {

};


export default TaskList;
