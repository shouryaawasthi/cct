import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://caddbackend-hpn1.vercel.app";

const courseSoftwareLimit = {
  "Certificate Course": 1,
  "Diploma Course": 2,
  "Professional Course": 3,
  "Master Diploma": 4,
  "CS/IT Course": 0, // 0 = unlimited
};

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
    course: "",
    softwares: [""],
    totalFee: "",
    feeReceived: "",
    joinDate: new Date().toISOString().split("T")[0],
  });

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Fetch all students
  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/students`);
      const studentList = res.data.data || res.data;
      setStudents(studentList);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // if course changes, adjust software fields accordingly
    if (name === "course") {
      const limit = courseSoftwareLimit[value];
      setFormData((prev) => ({
        ...prev,
        course: value,
        softwares: limit === 0 ? [""] : Array(limit).fill(""),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // 🔹 Add new software field (unlimited for CS/IT)
  const handleAddSoftware = () => {
    const limit = courseSoftwareLimit[formData.course] || 1;

    if (limit !== 0 && formData.softwares.length >= limit) {
      toast.warn(`Only ${limit} software allowed for ${formData.course}`);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      softwares: [...prev.softwares, ""],
    }));
  };

  // 🔹 Update individual software
  const handleSoftwareChange = (index, value) => {
    const updatedSoftwares = [...formData.softwares];
    updatedSoftwares[index] = value;
    setFormData((prev) => ({ ...prev, softwares: updatedSoftwares }));
  };

  // 🔹 Submit student data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.course) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${API_URL}/api/students`, formData);
      toast.success("Student added successfully!");

      await fetchStudents();
      setFormData({
        name: "",
        fatherName: "",
        email: "",
        mobile: "",
        address: "",
        gender: "",
        course: "",
        softwares: [""],
        totalFee: "",
        feeReceived: "",
        joinDate: new Date().toISOString().split("T")[0],
      });
    } catch (err) {
      if (err.response?.data?.errors) {
        err.response.data.errors.forEach((error) => toast.error(error.msg));
      } else {
        toast.error("Server Error: Failed to add student");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">Add New Student</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        {/* Basic info */}
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="text"
          name="fatherName"
          placeholder="Father's Name"
          value={formData.fatherName}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        {/* Gender */}
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {/* Course */}
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        >
          <option value="">Select Course</option>
          <option value="Certificate Course">Certificate Course</option>
          <option value="Diploma Course">Diploma Course</option>
          <option value="Professional Course">Professional Course</option>
          <option value="Master Diploma">Master Diploma</option>
          <option value="CS/IT Course">CS/IT Course</option>
        </select>

        {/* Software Fields */}
        {formData.softwares.map((soft, idx) => (
          <input
            key={idx}
            type="text"
            placeholder={`${
              formData.course === "CS/IT Course" ? "Language" : "Software"
            } ${idx + 1}`}
            value={soft}
            onChange={(e) => handleSoftwareChange(idx, e.target.value)}
            className="border p-2 w-full rounded"
          />
        ))}

        <button
          type="button"
          onClick={handleAddSoftware}
          className="text-blue-600 font-semibold"
        >
          + Add More {formData.course === "CS/IT Course" ? "Language" : "Software"}
        </button>

        {/* Fees */}
        <input
          type="number"
          name="totalFee"
          placeholder="Total Fee"
          value={formData.totalFee}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          type="number"
          name="feeReceived"
          placeholder="Fee Received"
          value={formData.feeReceived}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        {/* Join Date */}
        <input
          type="date"
          name="joinDate"
          value={formData.joinDate}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Student"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
