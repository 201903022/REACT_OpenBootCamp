import React, { useRef } from 'react'
import { useState } from 'react'
import { Levels } from '../../../models/leveles.enum'
import { Task } from '../../../models/task.class'
export default function TasksForms({add}) {
  const title = useRef('')
  const description = useRef('')
  const priority = useRef(Levels.NORMAL)
  const [status, setStatus] = useState(true)


  function addTask(e){ 
    e.preventDefault();
    console.log('hola')
    add(title.current.value,description.current.value,priority.current.value)
  }
  return (
    <div>
        <form onSubmit={addTask} className='d-flex  flex-column justify-content-center align-items-center mb-4 p-5 '> 
            <div className="form-outline flex-fill">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control form-control-lg"
                 required 
                 autoFocus
                 id="title" 
                 placeholder="Enter title" ref={title} />
            </div>
            <br/>
            <div className="form-group p-2">
                <label htmlFor="description">Description</label>
                <textarea className="form-control form-control-lg" 
                id="description" rows="3"
                ref={description}
                ></textarea>
            </div>
            <br/>
            <div className="form-group p-2">
                <label htmlFor="priority" className='sr-only'>Priority</label>
                <select className="form-control form-control-lg " 
                id="priority"
                ref={priority}
                defaultValue={Levels.NORMAL}
                >
                    <option value={Levels.LOW} >{Levels.LOW}</option>
                    <option value={Levels.MEDIUM} >{Levels.MEDIUM}</option>
                    <option value={Levels.NORMAL}>{Levels.NORMAL}</option>
                    <option value={Levels.HIGH}>{Levels.HIGH}</option>
                </select>
            </div>
            <br/>
            <div className="form-group p-2">
              <button type='submit'className='btn btn-success btn-lg ms-2'> ENTER </button>
            </div>
          
        </form>
    </div>
  )
}
