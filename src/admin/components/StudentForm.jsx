// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Receipt from "./Receipt";
// import {toast} from 'react-toastify';

// const courseSoftwareLimit = {
//   "Certificate Course": 1,
//   "Diploma Course": 2,
//   "Professional Course": 3,
//   "Master Diploma": 4,
//   "CS/IT Course": 0, 
// };

// export default function StudentForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     fatherName: "",
//     email: "",
//     mobile: "",
//     address: "",
//     gender: "",
//     course: "",
//     softwares: [""],
//     totalFee: "",
//     feeReceived: "",
//   });

//   const [students, setStudents] = useState([]);
//   const [currentStudent, setCurrentStudent] = useState(null);

 
//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/students");
//       setStudents(res.data.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//  const handleChange = (e) => {
//   const { name, value, type } = e.target;
//   setFormData({
//     ...formData,
//     [name]: type === "number" ? Number(value) : value,
//   });
// };


//   const handleCourseChange = (e) => {
//     const course = e.target.value;
//     const limit = courseSoftwareLimit[course];
//     if (limit > 0) {
//       setFormData({ ...formData, course, softwares: Array(limit).fill("") });
//     } else {
//       setFormData({ ...formData, course, softwares: [""] });
//     }
//   };

//   const handleSoftwareChange = (index, value) => {
//     const updated = [...formData.softwares];
//     updated[index] = value;
//     setFormData({ ...formData, softwares: updated });
//   };

//   const addSoftwareField = () => {
//     setFormData({ ...formData, softwares: [...formData.softwares, ""] });
//   };

//   const removeSoftwareField = (index) => {
//     const updated = formData.softwares.filter((_, i) => i !== index);
//     setFormData({ ...formData, softwares: updated });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
     
//       const res = await axios.post("http://localhost:5000/api/students", formData);
//       const studentData = res.data.data;

//       setStudents([...students, studentData]); // update list

//       // setCurrentStudent(studentData);          // show receipt
//       toast.success("Student added successfully!");

//     } catch (err) {
//       alert(err.response?.data?.message || "Error saving student");
//     }
//   };

//   if (currentStudent) {
//     return (
//       <Receipt
//         student={currentStudent}
//         onBack={() => setCurrentStudent(null)}
//       />
//     );
//   }

//   return (
//     <div className="space-y-10">
//       {/* Admission Form */}
//       <form
//         onSubmit={handleSubmit}
//         className="p-6 max-w-2xl mx-auto border rounded-2xl shadow-lg bg-white space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center">
//           Student Admission Form
//         </h2>

//         <div className="grid md:grid-cols-2 gap-4">
//           <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 rounded w-full" />
//           <input name="fatherName" placeholder="Father's Name" onChange={handleChange} className="border p-2 rounded w-full" />
//           <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 rounded w-full" />
//           <input name="mobile" placeholder="Contact" onChange={handleChange} className="border p-2 rounded w-full" />
//           <input name="address" placeholder="Address" onChange={handleChange} className="border p-2 rounded w-full col-span-2" />
//         </div>

//         <div className="flex items-center space-x-6">
//           <label><input type="radio" name="gender" value="Male" onChange={handleChange} /> Male</label>
//           <label><input type="radio" name="gender" value="Female" onChange={handleChange} /> Female</label>
//         </div>

//         <select
//           name="course"
//           onChange={handleCourseChange}
//           className="w-full border p-2 rounded"
//         >
//           <option value="">Select Course</option>
//           {Object.keys(courseSoftwareLimit).map((course) => (
//             <option key={course} value={course}>{course}</option>
//           ))}
//         </select>

//         {formData.softwares.map((software, idx) => (
//           <div key={idx} className="flex items-center space-x-2 mt-2">
//             <input
//               placeholder={`Software ${idx + 1}`}
//               value={software}
//               onChange={(e) => handleSoftwareChange(idx, e.target.value)}
//               className="border p-2 rounded w-full"
//             />
//             {formData.course === "CS/IT Course" && (
//               <button
//                 type="button"
//                 onClick={() => removeSoftwareField(idx)}
//                 className="px-2 py-1 bg-red-500 text-white rounded"
//               >
//                 ✕
//               </button>
//             )}
//           </div>
//         ))}

//         {formData.course === "CS/IT Course" && (
//           <button
//             type="button"
//             onClick={addSoftwareField}
//             className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
//           >
//             + Add Software
//           </button>
//         )}

//         <div className="grid md:grid-cols-2 gap-4">
//           <input name="totalFee" type="number" placeholder="Total Fee" onChange={handleChange} className="border p-2 rounded w-full" />
//           <input name="feeReceived" type="number" placeholder="Fee Received" onChange={handleChange} className="border p-2 rounded w-full" />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>

//       {/* Student Management Section */}
//       {/* <div className="p-6 max-w-5xl mx-auto border rounded-2xl shadow bg-white">
//         <h2 className="text-xl font-bold mb-4">Student Management</h2>
//         <p className="mb-4">Total Students: <b>{students.length}</b></p>
//         {students.length > 0 ? (
//           <table className="w-full border-collapse border text-sm">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border p-2">Name</th>
//                 <th className="border p-2">Course</th>
//                 <th className="border p-2">Total Fee</th>
//                 <th className="border p-2">Fee Received</th>
//                 <th className="border p-2">Balance</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.map((s, idx) => (
//                 <tr key={idx} className="text-center">
//                   <td className="border p-2">{s.name}</td>
//                   <td className="border p-2">{s.course}</td>
//                   <td className="border p-2">₹{s.totalFee}</td>
//                   <td className="border p-2">₹{s.feeReceived}</td>
//                   <td className="border p-2">₹{s.totalFee - s.feeReceived}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-gray-600">No students added yet.</p>
//         )}
//       </div> */}
//     </div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleCourseChange = (e) => {
    const course = e.target.value;
    const limit = courseSoftwareLimit[course];
    setFormData((prev) => ({
      ...prev,
      course,
      softwares: limit > 0 ? Array(limit).fill("") : [""],
    }));
  };

  const updateSoftware = (index, value) => {
    setFormData((prev) => {
      const updated = [...prev.softwares];
      updated[index] = value;
      return { ...prev, softwares: updated };
    });
  };

  const addSoftwareField = () =>
    setFormData((prev) => ({ ...prev, softwares: [...prev.softwares, ""] }));

  const removeSoftwareField = (index) =>
    setFormData((prev) => ({
      ...prev,
      softwares: prev.softwares.filter((_, i) => i !== index),
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://caddbackend-hpn1.vercel.app/api/students", formData);
      toast.success("Student added successfully!");
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
      });
    } catch (err) {
      toast.error(err.response?.data?.message || "Error saving student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Student Admission Form
        </h2>

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
