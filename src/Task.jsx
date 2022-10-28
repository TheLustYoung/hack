import React from 'react';
import App from './App'

import Tasks from "./components/Tasks/Tasks"
import { useNavigate } from 'react-router-dom'



export default function() {

  const navigate = useNavigate();

  return (
    <>
      <div className="Task__Container">
        <div className="Task__title">
          
        </div>
      </div>

    </>
  )
}
