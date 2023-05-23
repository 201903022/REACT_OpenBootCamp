import React from 'react'
import { useState } from 'react'
export default function TasksForms() {
  return (
    <div>
        <form> 
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter title" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="description" rows="3"></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="priority">Priority</label>
                <select className="form-control" id="priority">
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                </select>
            </div>
        </form>
    </div>
  )
}
