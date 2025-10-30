import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StudentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newInstallment, setNewInstallment] = useState("");

  const API_URL = "https://caddbackend-hpn1.vercel.app";

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/students/${id}`);
        setStudent(res.data);
      } catch (error) {
        toast.error("Failed to load student details");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  // Add new installment
  const handleAddInstallment = async () => {
    if (!newInstallment) return toast.warn("Enter installment amount");

    try {
      const updated = {
        ...student,
        feeReceived:
          parseInt(student.feeReceived || 0) + parseInt(newInstallment),
      };

      const res = await axios.put(`${API_URL}/api/students/${id}`, updated);
      setStudent(res.data);
      toast.success("Installment added successfully!");
      setNewInstallment("");
    } catch (err) {
      toast.error("Failed to add installment");
      console.error(err);
    }
  };

  // Delete student
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await axios.delete(`${API_URL}/api/students/${id}`);
      toast.success("Student deleted successfully!");
      navigate("/");
    } catch (err) {
      toast.error("Failed to delete student");
      console.error(err);
    }
  };

  if (loading) return <p className="text-center p-4">Loading details...</p>;
  if (!student) return <p className="text-center p-4">Student not found.</p>;

  const pendingFee =
    parseInt(student.totalFee || 0) - parseInt(student.feeReceived || 0);

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">
        Student Details
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p><strong>ID:</strong> {student.UUID}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Father's Name:</strong> {student.fatherName}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Mobile:</strong> {student.mobile}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Software:</strong> {student.software || "N/A"}</p>
        <p><strong>Total Fee:</strong> ₹{student.totalFee}</p>
        <p><strong>Fee Received:</strong> ₹{student.feeReceived}</p>
        <p><strong>Pending Fee:</strong> ₹{pendingFee}</p>
      </div>

      <hr className="my-6" />

      {/* Add installment */}
      <div>
        <h2 className="text-lg font-semibold mb-3 text-blue-700">
          Add New Installment
        </h2>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Enter amount"
            value={newInstallment}
            onChange={(e) => setNewInstallment(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button
            onClick={handleAddInstallment}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </div>

      <hr className="my-6" />

      {/* Actions */}
      <div className="flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
        >
          Back
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete Student
        </button>
      </div>
    </div>
  );
};

export default StudentDetails;
