import { LoginPage } from "./pages/Login";
import "./App.css";
import student_login_page_bg from "./assets/loginBackground.png";
import lecturer_login_page_bg from "./assets/lecturer_signin_bg.png";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResetOtp from "./pages/reset_otp";
import ResetEnterNewPasswordPage from "./pages/Reset_enter_new_pw";
import Dashboard from "./pages/Dashboard";
import LecturerDashboard from "./pages/LecturerDashboard";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/signin"
          element={
            <LoginPage
              form_title="Sign into QuickGrade"
              id_or_email="Student Registration Number"
              placeholder="Enter your Registration number"
              backgroundImage={student_login_page_bg}
            />
          }
        />
        <Route
          path="/lecturer_signin"
          element={
            <LoginPage
              form_title="Sign into QuickGrade"
              id_or_email="Employee ID"
              placeholder="Enter email"
              backgroundImage={lecturer_login_page_bg}
            />
          }
        />
        <Route path="/reset_otp" element={<ResetOtp />} />
        <Route path="/re-enter-password" element={<ResetEnterNewPasswordPage />} />
        <Route path="/users/dashboard" element={<Dashboard />} />
        <Route path="/lecturer/dashboard" element={<LecturerDashboard />} />
      </Routes>
    </>
  );
}

export default App;
