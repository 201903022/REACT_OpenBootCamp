import React from 'react'
import { useState } from 'react'
import { Levels } from '../../../models/leveles.enum'
export default function TasksForms() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('')
  const [status, setStatus] = useState('')
  const [dueDate, setDueDate] = useState('')

  const SetTitle = (e) => { 
    setTitle(e.target.value); 
  }

  const SetDescription = (e) => {
    setDescription(e.target.value);
  }
  const SetPriority = (e) => {
    setPriority(e.target.value);
    
  }
  return (
    <div>
        <form> 
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter title" />
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" rows="3"></textarea>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select className="form-control" id="priority">
                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>
                    <option>NORMAL</option>
                </select>
            </div>
            <br/>
            <div className="form-group">
              <button> ENTER </button>
            </div>
          
        </form>
    </div>
  )
}
