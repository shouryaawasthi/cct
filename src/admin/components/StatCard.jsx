import React from 'react'
import StudentTable from './StudentTable'

const StatCard = ({title,value,icon}) => {
  return (
    <div>
        <div className="border-l-4 border-blue-900 p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
        <div className="icon" inline style={{fontSize: '2rem', color: '#1E3A8A'}}>
            <i className="fa fa-user-graduate">{icon}</i>
        </div>
        <div className="text">
            <h3>{value}</h3>
            <p>{title}</p>
        </div>
    </div>
    <StudentTable />
    </div>
  )
}

export default StatCard