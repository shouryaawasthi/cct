import { Routes, Route } from "react-router-dom";
import AdminLogin from "../pages/AdminLogin";
import usePageTracking from "../../Hooks/usePageTracking";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../layout/AdminLayout";
import PrivateRoute from "../utils/PrivateRoute";
import Student from "../pages/Student";
import StudentDetails from "../components/StudentDetail";

export default function AdminRoutes() {
  usePageTracking();
  return (
    <Routes>
      {/* Login Page */}
      <Route index element={<AdminLogin />} />

      {/* Protected Admin Layout */}
      <Route path="/" element={<AdminLayout />}>
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
              
            </PrivateRoute>
          }
        />
        <Route
          path="student"
          element={
            <PrivateRoute>
              <Student />
            </PrivateRoute>
          }
        />
          <Route path="/student/:id" element={<PrivateRoute><StudentDetails /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}
