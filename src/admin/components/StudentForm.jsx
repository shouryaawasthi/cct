import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { generateStudentId } from "../utils/GenrateStudentId"; // check correct spelling/path

const courseSoftwareLimit = {
  "Certificate Course": 1,
  "Diploma Course": 2,
  "Professional Course": 3,
  "Master Diploma": 4,
  "CS/IT Course": 0, // unlimited
};

export default function StudentForm() {
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
    UUID: "",
  });

  const [loading, setLoading] = useState(false);
  const [existingStudents, setExistingStudents] = useState([]);
  const API_URL = "https://caddbackend-hpn1.vercel.app";

  // Fetch all existing students once
  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/api/students`)
  //     .then((res) => {
  //       setExistingStudents(res.data);
  //     })
  //     .catch(() => toast.error("Failed to load existing students"));
  // }, []);

  //  Generate new UUID after fetching existing students
  useEffect(() => {
    const newId = generateStudentId(existingStudents || []);
    setFormData((prev) => ({ ...prev, UUID: newId }));
  }, [existingStudents]);

  // Input change handler
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  //  Course selection logic
  const handleCourseChange = (e) => {
    const course = e.target.value;
    const limit = courseSoftwareLimit[course];
    setFormData((prev) => ({
      ...prev,
      course,
      softwares: limit > 0 ? Array(limit).fill("") : [""],
    }));
  };

  // Update software fields
  const updateSoftware = (index, value) => {
    setFormData((prev) => {
      const updated = [...prev.softwares];
      updated[index] = value;
      return { ...prev, softwares: updated };
    });
  };

  //  Add/remove software fields (for CS/IT Course)
  const addSoftwareField = () =>
    setFormData((prev) => ({ ...prev, softwares: [...prev.softwares, ""] }));

  const removeSoftwareField = (index) =>
    setFormData((prev) => ({
      ...prev,
      softwares: prev.softwares.filter((_, i) => i !== index),
    }));

  //  Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/students`, formData);
      toast.success("Student added successfully!");

      // Reset form after submission
      const newId = generateStudentId([...existingStudents, formData]);
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
        UUID: newId, // generate next one
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error saving student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-2 sm:p-2 max-w-8xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 space-y-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">New Registration</h2>
          <input type="date" className="border rounded-lg p-2" required />
        </div>

        {/* UUID */}
        <div>
          <label className="block mb-1 text-gray-700">UUID</label>
          <input
            type="text"
            name="UUID"
            value={formData.UUID}
            className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300 bg-gray-100"
            readOnly
          />
        </div>

        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Father's Name</label>
            <input
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Mobile</label>
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1 text-gray-700">Address</label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 text-gray-700">Gender</label>
          <div className="flex gap-6">
            {["Male", "Female", "Other"].map((g) => (
              <label key={g} className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  checked={formData.gender === g}
                  onChange={handleChange}
                />
                {g}
              </label>
            ))}
          </div>
        </div>

        {/* Course */}
        <div>
          <label className="block mb-1 text-gray-700">Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleCourseChange}
            className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
            required
          >
            <option value="">Select Course</option>
            {Object.keys(courseSoftwareLimit).map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        {/* Softwares */}
        <div>
          <label className="block mb-1 text-gray-700">Softwares</label>
          {formData.softwares.map((software, idx) => (
            <div key={idx} className="flex items-center gap-2 mt-2">
              <input
                placeholder={`Software ${idx + 1}`}
                value={software}
                onChange={(e) => updateSoftware(idx, e.target.value)}
                className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
              />
              {formData.course === "CS/IT Course" && (
                <button
                  type="button"
                  onClick={() => removeSoftwareField(idx)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  ✕
                </button>
              )}
            </div>
          ))}
          {formData.course === "CS/IT Course" && (
            <button
              type="button"
              onClick={addSoftwareField}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              + Add Software
            </button>
          )}
        </div>

        {/* Fees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-700">Total Fee</label>
            <input
              type="number"
              name="totalFee"
              value={formData.totalFee}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Fee Received</label>
            <input
              type="number"
              name="feeReceived"
              value={formData.feeReceived}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-300"
              required
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 disabled:opacity-60"
        >
          {loading ? "Saving..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
