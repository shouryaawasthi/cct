import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null); // for modal
  const [editData, setEditData] = useState({}); // editable fields
  const studentsPerPage = 5;

  const API_URL = "https://caddbackend-hpn1.vercel.app";

  // Fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/students`);
        setStudents(res.data.data);
      } catch (err) {
        console.error("Error fetching students:", err);
        toast.error("Failed to load students");
        setStudents([]);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  // Filter by search
  const filteredStudents = students.filter((student) =>
    Object.values(student)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  // Handle view
  const handleView = (student) => {
    setSelectedStudent(student);
    setEditData(student);
  };

  // Handle edit input inside modal
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Save updated data to DB
  const handleSave = async () => {
    try {
      const res = await axios.put(
        `${API_URL}/api/students/${selectedStudent._id}`,
        editData
      );
      toast.success("Student updated successfully!");

      // Update table view instantly
      setStudents((prev) =>
        prev.map((s) => (s._id === selectedStudent._id ? res.data : s))
      );

      setSelectedStudent(null);
    } catch (err) {
      console.error("Error updating student:", err);
      toast.error("Failed to update student");
    }
  };

  if (loading) return <p className="text-center p-4">Loading students...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Student List</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by any field..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
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
              <th className="px-4 py-2">Father's Name</th>
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Fee (Received/Total)</th>
              <th className="px-4 py-2 text-center">View</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center px-4 py-6">
                  No students found.
                </td>
              </tr>
            ) : (
              currentStudents.map((student, index) => (
                <tr
                  key={student._id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{indexOfFirst + index + 1}</td>
                  <td className="px-4 py-2">{student.UUID}</td>
                  <td className="px-4 py-2">{student.name}</td>
                  <td className="px-4 py-2">{student.fatherName}</td>
                  <td className="px-4 py-2">{student.course}</td>
                  <td className="px-4 py-2">
                    {student.feeReceived} / {student.totalFee}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <Link
                      to={`/student/${student._id}`}
                      className="text-blue-600 hover:text-blue-800"
                      title="View Details"
                    >
                      <FaEye />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-900 text-white" : ""
              }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* View/Edit Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4 text-blue-700">
              Student Details
            </h2>

            <button
              onClick={() => setSelectedStudent(null)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.keys(editData).map((key) => {
                if (
                  ["_id", "__v", "createdAt", "updatedAt"].includes(key) ||
                  typeof editData[key] === "object"
                )
                  return null;
                return (
                  <div key={key}>
                    <label className="block text-sm text-gray-600 capitalize mb-1">
                      {key}
                    </label>
                    <input
                      name={key}
                      value={editData[key] || ""}
                      onChange={handleEditChange}
                      className="border p-2 rounded w-full focus:ring focus:ring-blue-300"
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentTable;
