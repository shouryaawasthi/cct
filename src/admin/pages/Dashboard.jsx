import React from 'react';
import StatCard from '../components/StatCard';
import { FaUserGraduate, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';
import StudentTable from '../components/StudentTable';





const Dashboard = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '1200',
      icon: <FaUserGraduate />,
      color: 'border-blue-900'
    },
    {
      title: 'Total Fees',
      value: '₹ 24,00,000',
      icon: <FaMoneyBillWave />,
      color: 'border-amber-500'
    },
    {
      title: 'Fees Paid',
      value: '₹ 18,50,000',
      icon: <FaCheckCircle />,
      color: 'border-amber-500'
    }
  ];

  return (
    <>
    <div className="bg-gray-100 p-8">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
  
  
    </div>
    
   <StudentTable />
    </>
  );
};

export default Dashboard;
