import React from 'react'
import { useRef } from 'react'
import Child from '../pure/child'

function Father() {    
    function showMessage(text){ 
        alert(`Message Received: ${text}`)        
    }
  return (
    <div>
        <Child name='Martin' send={showMessage}> </Child>
    </div>
  )
}

export default Father;