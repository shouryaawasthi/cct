import React from "react";

export default function Receipt({ student, onBack }) {
  return (
    <div className="receipt-print p-6 max-w-3xl mx-auto bg-white print:p-10">
      <div className="print:block">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://via.placeholder.com/80"
              alt="Company Logo"
              className="w-20 h-20 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                ABC Institute of Technology
              </h1>
              <p className="text-gray-600">
                Empowering Future Through Technology
              </p>
            </div>
          </div>
          <div className="text-right">
            <p><b>Receipt ID:</b> {student.receiptId}</p>
            <p><b>Date:</b> {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Student Details */}
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Student Details</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700 border p-4 rounded-lg mb-4">
          <p><b>Name:</b> {student.name}</p>
          <p><b>Father's Name:</b> {student.fatherName}</p>
          <p><b>Email:</b> {student.email}</p>
          <p><b>Contact:</b> {student.mobileNumber}</p>
          <p><b>Address:</b> {student.address}</p>
          <p><b>Gender:</b> {student.gender}</p>
        </div>

        {/* Course Details */}
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Course Details</h2>
        <div className="border p-4 rounded-lg text-gray-700 mb-4">
          <p><b>Course:</b> {student.course}</p>
          <p><b>Softwares:</b> {student.softwares.join(", ")}</p>
        </div>

        {/* Fee Details */}
        <h2 className="text-lg font-semibold text-gray-700 mb-2">Fee Details</h2>
        <div className="border p-4 rounded-lg text-gray-700 mb-4 grid grid-cols-3 gap-4">
          <p><b>Total Fee:</b> ₹{student.totalFee}</p>
          <p><b>Fee Received:</b> ₹{student.feeReceived}</p>
          <p><b>Balance:</b> ₹{student.totalFee - student.feeReceived}</p>
        </div>

        {/* Signature */}
        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-600">Student Signature: ___________________</p>
          <p className="text-gray-600">Authorized Signatory: ________________</p>
        </div>
      </div>

      {/* Buttons (hidden in print) */}
      <div className="mt-6 flex justify-center space-x-4 print:hidden">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Print Receipt
        </button>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700"
        >
          Back
        </button>
      </div>
    </div>
  );
}
