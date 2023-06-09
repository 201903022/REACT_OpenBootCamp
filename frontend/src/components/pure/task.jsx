import { Task  } from "../../models/task.class";
import { Levels } from "../../models/leveles.enum";

import React,{useRef, useState,useEffect} from 'react';
import PropTypes from 'prop-types';
// rfce props
//

import '../../Styles/task.css'
const TaskComponent = ({task,complete,deleteT,edit}) => {
    const [isEditing, setIsEditing] = useState(false);   
    const [newName, setNewName] = useState(task.name);
    const [newDescription, setNewDescription] = useState(task.description);
    const [newLevel, setNewLevel] = useState('');
    const [newPriority, setNewPriority] = useState(task.level);

    // if(addOrList){ }

    const nameInputRef = useRef(null);
    

    useEffect(() => {
        if (isEditing) {
            nameInputRef.current.focus();
        }
    }, [isEditing]);
    
    //Function that returns a badge depending on the level of the Task; 
    
    const handleEditClick = () => {        
        setIsEditing(!isEditing); // Cambia el estado a true al hacer clic en el ícono de lápiz
    };
    function taskLevelBadge(){ 
        switch(task.level){ 
            case Levels.NORMAL:
                return (<span className='badge bg-primary'>{Levels.NORMAL}</span>);
            case Levels.MEDIUM:
                return (<span className='badge bg-warning'>{Levels.MEDIUM}</span>);
            case Levels.HIGH:
                return (<span className='badge bg-danger'>{Levels.HIGH}</span>);
            case Levels.LOW:
                return (<span className='badge bg-info'>{Levels.LOW}</span>);
            default:
                return (<span className='badge bg-primary'>{Levels.NORMAL}</span>);                
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
            return (<i className="bi bi-toggle-on task-action p-2" style={{color:'green'}} onClick={()=>complete(task.id)} ></i>);
        }else{ 
            return (<i className="bi bi-toggle2-off task-action p-2" style={{color:'red'}} onClick={()=>complete(task.id)} ></i>);
        }
    } 

    const handleInputChange = (e) => {
        console.log('hola')
        if(e.target.name==='name'){
            console.log('New Name => ',e.target.value)
            setNewName(e.target.value);
        }
        if(e.target.name==='description'){
            console.log('New description => ',e.target.value)
            setNewDescription(e.target.value);
        }
        if(e.target.name==='level'){
            console.log(`new Level=>  ${e.target.value}`)
            setNewPriority(e.target.value);
        }
       
    };  

    const priorityByIsEditting = () =>{ 
        if(isEditing){ 
            return (<select className="form-select mb-4 p-3 " name="level" value={newPriority} onChange={handleInputChange}>
                        <option value={Levels.NORMAL}>{Levels.NORMAL}</option>
                        <option value={Levels.MEDIUM}>{Levels.MEDIUM}  </option>
                        <option value={Levels.HIGH}>{Levels.HIGH}</option>
                        <option value={Levels.LOW}>{Levels.LOW} </option>
                    </select>);
        }else{ 
            return (<span className="ms-2">{taskLevelBadge()}</span>);
        }

    }
    
    function editIcon(){ 
        if(isEditing){ 
            return (<i className="bi bi-check2-square task-action p-2" style={{color:'green'}} onClick={editTask} ></i>);
        }else{ 
            return (<i className="bi bi-pencil-square task-action p-2" style={{color:'red'}} onClick={handleEditClick} ></i>);
        }
    }

    function editTask(){ 
        //Llamar a la funcion edit del padre obtenida como parametro
        // enviar parametros id,newName,description,priority
        edit(task.id,newName,newDescription,newPriority);
        setIsEditing(!isEditing);         
    }

    function byStatus(){ 
        if(task.status){ 
            return (
                <> 
                    <input className="ms-2 mb-4 " 
                    value={newName} 
                    readOnly={!isEditing} 
                    onChange={handleInputChange}name="name"
                    ref={nameInputRef}
                    />                
                </>
            );
        }else{ 
            return (
                <> 
                    <input className="ms-2 mb-4 " 
                    value={newName} 
                    readOnly={!isEditing} 
                    onChange={handleInputChange}name="name"
                    ref={nameInputRef}
                    />                
                </>
            );
        }
    }
    
    return (
        <tr className="fw-normal">
          <td className="align-middle p-4">
              {byStatus()}
          </td>
          <td className="align-middle p-4 ">
            <textarea className="ms-2 mb-4 " 
            value={newDescription} readOnly={!isEditing} 
            onChange={handleInputChange} name="description" />
          </td>
          <td className="align-middle p-3">
            <span className="ms-2 p-4 ">{priorityByIsEditting()}</span>
          </td>
          <td className="align-middle ">{iconCompleted()}</td>
          <td className="align-middle p-5">
            {ActionCompleted()}
            {editIcon()}
            <i onClick={() => deleteT(task.id)} className="bi bi-trash3-fill task-action p-2" style={{ color: 'tomato' }}></i>
          </td>
        </tr>
      );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    deleteT: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
};


export default TaskComponent;
