import React from 'react'
import { Link } from 'react-router-dom'
import StudentForm from '../components/StudentForm'

const Student = () => {
  return (
    <div>
      <nav>
        
        <Link to="/admin-login/student">Students</Link> |{" "}
        <Link to="/admin/jobs">Jobs</Link> |{" "}
        <Link to="/admin/settings">Settings</Link>  
      </nav>
      <StudentForm />
    </div>
  )
}

export default Student