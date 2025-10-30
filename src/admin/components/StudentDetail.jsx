// StudentDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://caddbackend-hpn1.vercel.app";

const StudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [newInstallment, setNewInstallment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/students/${id}`);
        setStudent(res.data.data);
      } catch (error) {
        toast.error("Failed to load student details.");
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  const handleAddInstallment = async () => {
    if (!newInstallment || isNaN(newInstallment)) {
      toast.error("Enter a valid installment amount.");
      return;
    }
    try {
      const updatedFee = parseInt(student.feeReceived || 0) + parseInt(newInstallment);
      const updatedStudent = { ...student, feeReceived: updatedFee };

      await axios.put(`${API_URL}/api/students/${id}`, updatedStudent);
      setStudent(updatedStudent);
      toast.success("Installment added successfully!");
      setNewInstallment("");
    } catch (error) {
      toast.error("Error updating installment.");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await axios.delete(`${API_URL}/api/students/${id}`);
      toast.success("Student deleted successfully!");
      navigate("/students");
    } catch (error) {
      toast.error("Error deleting student.");
    }
  };

  if (loading) return <p className="text-center p-6">Loading details...</p>;
  if (!student) return <p className="text-center p-6">Student not found.</p>;

  const pending = student.totalFee - student.feeReceived;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">
          Student Details
        </h1>

        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <p><strong>ID:</strong> {student.UUID}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Father's Name:</strong> {student.fatherName}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Mobile:</strong> {student.mobile}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Software Added:</strong> {student.software}</p>
          <p><strong>Admission Date:</strong> {new Date(student.admissionDate).toLocaleDateString()}</p>
        </div>

        {/* Fee Info */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2">Fee Information</h2>
          <p><strong>Total Fee:</strong> ₹{student.totalFee}</p>
          <p><strong>Received:</strong> ₹{student.feeReceived}</p>
          <p><strong>Pending:</strong> ₹{pending}</p>
        </div>

        {/* Add Installment */}
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Add New Installment</h2>
          <div className="flex gap-2">
            <input
              type="number"
              value={newInstallment}
              onChange={(e) => setNewInstallment(e.target.value)}
              placeholder="Enter amount"
              className="border rounded px-3 py-2 w-full"
            />
            <button
              onClick={handleAddInstallment}
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Add
            </button>
          </div>
        </div>

        {/* Delete Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete Student
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
