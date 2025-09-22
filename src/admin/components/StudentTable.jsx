// src/components/StudentTable.jsx
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const StudentTable = ({ students, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto bg-white rounded shadow-md">
      <table className="min-w-full table-auto text-sm text-left">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Student ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Course</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center px-4 py-6">
                No students found.
              </td>
            </tr>
          ) : (
            students.map((student, index) => (
              <tr
                key={student.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{student.id}</td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.email}</td>
                <td className="px-4 py-2">{student.course}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => onEdit(student)}
                    className="text-blue-600 hover:text-blue-800"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(student.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
