// src/components/StudentList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const StudentTable= () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = "https://caddbackend-hpn1.vercel.app";

  // Fetch all students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/students`);
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  // Filter students based on search query
  const filteredStudents = students.filter((student) =>
    Object.values(student)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Handlers
  const handleEdit = (student) => {
    console.log("Edit:", student);
    alert(`Editing student: ${student.name}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;

    try {
      await axios.delete(`${API_URL}/api/students/${id}`);
      setStudents((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  if (loading) return <p className="text-center p-4">Loading students...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Student List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by any field..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-md"
      />

      {/* Table */}
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
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center px-4 py-6">
                  No students found.
                </td>
              </tr>
            ) : (
              filteredStudents.map((student, index) => (
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
                      onClick={() => handleEdit(student)}
                      className="text-blue-600 hover:text-blue-800"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
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
    </div>
  );
};

export default StudentTable;
