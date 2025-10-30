import React, { useEffect, useState } from "react";
import axios from "axios";
import StatCard from "../components/StatCard";
import StudentTable from "../components/StudentTable";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaUserGraduate, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const API_URL = "https://caddbackend-hpn1.vercel.app";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalFees: 0,
    feesPaid: 0,
  });
  const [monthlyData, setMonthlyData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/students`);
        const data = res.data.data || [];
        setStudents(data);

        // 🔹 Calculate stats
        const totalStudents = data.length;
        const totalFees = data.reduce(
          (sum, s) => sum + (parseFloat(s.totalFee) || 0),
          0
        );
        const feesPaid = data.reduce(
          (sum, s) => sum + (parseFloat(s.feeReceived) || 0),
          0
        );

        setStats({ totalStudents, totalFees, feesPaid });

        // 🔹 Group by month
        const monthlyMap = {};
        data.forEach((student) => {
          const date = new Date(student.createdAt || Date.now());
          const month = date.toLocaleString("default", { month: "short" });
          if (!monthlyMap[month]) {
            monthlyMap[month] = { month, students: 0, feesCollected: 0 };
          }
          monthlyMap[month].students += 1;
          monthlyMap[month].feesCollected += parseFloat(student.feeReceived) || 0;
        });

        const sortedMonths = [
          "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
        ];
        const chartData = sortedMonths
          .filter((m) => monthlyMap[m])
          .map((m) => monthlyMap[m]);

        setMonthlyData(chartData);
      } catch (err) {
        console.error("Error loading dashboard:", err);
        toast.error("Failed to load dashboard data");
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      {/* ===== Stats Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Students"
          value={stats.totalStudents}
          icon={<FaUserGraduate />}
          color="border-blue-900"
        />
        <StatCard
          title="Total Fees"
          value={`₹ ${stats.totalFees.toLocaleString()}`}
          icon={<FaMoneyBillWave />}
          color="border-amber-500"
        />
        <StatCard
          title="Fees Paid"
          value={`₹ ${stats.feesPaid.toLocaleString()}`}
          icon={<FaCheckCircle />}
          color="border-green-600"
        />
      </div>

      {/* ===== Chart Section ===== */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          📊 Monthly Enrollments & Fees Collected
        </h2>
        {monthlyData.length > 0 ? (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip
                formatter={(val, name) =>
                  name === "feesCollected" ? `₹ ${val}` : val
                }
              />
              <Legend />
              <Bar
                dataKey="students"
                fill="#3B82F6"
                name="Students Enrolled"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="feesCollected"
                fill="#F59E0B"
                name="Fees Collected"
                radius={[4, 4, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="feesCollected"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ r: 3 }}
                name="Fees Trend"
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 text-center">No chart data available.</p>
        )}
      </div>

      {/* ===== Student Table ===== */}
      <StudentTable />
    </div>
  );
};

export default Dashboard;
