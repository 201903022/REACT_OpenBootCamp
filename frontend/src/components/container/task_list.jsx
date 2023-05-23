import { Task } from "../../models/task.class";
import { Levels } from "../../models/leveles.enum";
import TaskComponent from "../pure/task";
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css'
//rfcp
const TaskList = () => {
    const defaultTask1 = new Task(0,'Example1','Default description1',true,Levels.HIGH)    
    const defaultTask2 = new Task(1,'Example2','Default description2',false,Levels.MEDIUM)    
    const defaultTask3 = new Task(2,'Example3','Default description3',true,Levels.NORMAL)    

    const [tasksL, setTasksL] = useState([defaultTask1,defaultTask2,defaultTask3]);

    return (
        <div className='col-15'>
            <div className="card"> 
                <div className="card-header p-3">
                    <h5>Task List</h5>
                </div>
                <div className="card-body" data-mdb-perfect-scrollbar style={{position: 'relative', height:'400px'}}>
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
                                return (<TaskComponent task={task} key={task.id} />);
                            })}


                            {/* <TaskComponent task={defaultTask} /> */}
                        </tbody>
                    </table>                
                </div>
            </div>
            {/* {Apply either a for || Map to renderizate all tasks} */}
        </div>
    );
};


TaskList.propTypes = {

};


export default TaskList;
