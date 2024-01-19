import { LoginPage } from "../loginPage/Login";
import "./App.css";
import student_login_page_bg from "../../assets/loginBackground.png";
import lecturer_login_page_bg from "../../assets/lecturer_signin_bg.png";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../landingPage/LandingPage";
import EnterOtp from "../enter-otp/enter_otp";
import VerifyEmail from "../verify-email/VerifyEmailPage";
import ResetEnterNewPasswordPage from "../reset-enter-new-password/Reset_enter_new_pw";
import Dashboard from "../studentDashboard/lecturerDashboard";
import LecturerDashboard from "../lecturerDashboard/LecturerDashboard";
import StudentSignUpPage from "../signup/signUpPage";
import { CheckYourEmail } from "../check-you-email/check_your_email";
import { ForgotPassword } from "../forgotPassword/forget_password";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/students/signin"
          element={
            <LoginPage
              form_title="Sign into QuickGrade"
              id_or_email="Student Registration Number"
              placeholder="Enter your Registration number"
              backgroundImage={student_login_page_bg}
              userType="/students/forgot-password"
            />
          }
        />
        <Route
          path="/lecturers/signin"
          element={
            <LoginPage
              form_title="Sign into QuickGrade"
              id_or_email="Employee ID"
              placeholder="Enter email"
              backgroundImage={lecturer_login_page_bg}
              userType="/lecturers/forgot-password"
            />
          }
        />

        <Route
          path="/students/confirm-email"
          element={<EnterOtp enter_otp_heading="Verify OTP" />}
        />
        <Route
          path="/lecturers/confirm-email"
          element={<EnterOtp enter_otp_heading="Verify OTP" />}
        />
        <Route path="lecturers/forgot-password" element={<ForgotPassword />} />
        <Route path="students/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route
          path="/re-enter-password"
          element={<ResetEnterNewPasswordPage />}
        />
        <Route path="/students/signup" element={<StudentSignUpPage />} />
        <Route path="/lecturers/signup" element={<StudentSignUpPage />} />
        <Route path="/students/dashboard" element={<Dashboard />} />
        <Route
          path="/students/check-your-email"
          element={
            <CheckYourEmail
              userType="Registration Number"
              location="/students/sigin"
            />
          }
        />
        <Route
          path="/lecturers/check-your-email"
          element={
            <CheckYourEmail userType="EmployeeID" location="/students/sigin" />
          }
        />
        <Route path="/students/dashboard" element={<Dashboard />} />
        <Route path="/lecturers/dashboard" element={<LecturerDashboard />} />
      </Routes>
    </>
  );
}

export default App;
