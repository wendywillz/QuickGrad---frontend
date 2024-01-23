import { LoginPage } from "../loginPage/Login";
import "./App.css";
import student_login_page_bg from "../../assets/loginBackground.png";
import lecturer_login_page_bg from "../../assets/lecturer_signin_bg.png";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../landingPage/LandingPage";
import EnterOtp from "../enter-otp/enter_otp";
// import VerifyEmail from "../verify-email/VerifyEmailPage";
import ResetEnterNewPasswordPage from "../reset-enter-new-password/Reset_enter_new_pw";
import StudentDashboard from "../studentDashboard/StudentsDashboard";
import LecturerDashboard from "../lecturerDashboard/LecturerDashboard";
import StudentEnrolledCourses from "../studentEnrolledCourses/studentEnrolledCourses";
import SignUpPage from "../signup/signUpPage";
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

        {/* forgot password page
        where you enter your email
        */}
        <Route
          path="/lecturers/forgot-password"
          element={<ForgotPassword location="/lecturers/signin" />}
        />
        <Route
          path="/students/forgot-password"
          element={<ForgotPassword location="/students/signin" />}
        />
        {/* <Route path="/verify-email" element={<VerifyEmail />} /> */}

        {/* we ve sent your password reset link
         check your email page
         */}
        <Route
          path="/students/reset-password/check-your-email"
          element={
            <CheckYourEmail
              information="We sent a password reset link to your email. Please click the link to
              reset your password."
              location="/students/forgot-password"
              location_text="Click here to resend"
            />
          }
        />
        <Route
          path="/lecturers/reset-password/check-your-email"
          element={
            <CheckYourEmail
              information="We sent a password reset link to your email. Please click the link to
              reset your password."
              location="/lecturers/forgot-password"
              location_text="Click here to resend"
            />
          }
        />

        {/* display password reset page where you
        enter new password confirm new password
        */}
        <Route
          path="/students/reset-password/:token"
          element={<ResetEnterNewPasswordPage />}
        />
        <Route
          path="/lecturers/reset-password"
          element={<ResetEnterNewPasswordPage />}
        />

        <Route
          path="/students/signup"
          element={<SignUpPage signin_link="/students/signin" />}
        />
        <Route
          path="/lecturers/signup"
          element={<SignUpPage signin_link="/lecturers/signin" />}
        />

        {/* check your email for matric no/employee ID  */}
        <Route
          path="/students/check-your-email"
          element={
            <CheckYourEmail
              information="We sent your Registration Number and password to your verified email,
              kindly use the detail to login."
              location="/students/signin"
              location_text="Proceed to login"
            />
          }
        />
        <Route
          path="/lecturers/check-your-email"
          element={
            <CheckYourEmail
              information="We sent your EmployeeID and password to your verified email,
            kindly use the detail to login."
              location="/lecturers/signin"
              location_text="Proceed to login"
            />
          }
        />

        <Route path="/students/dashboard" element={<StudentDashboard />} />
        <Route path="/lecturers/dashboard" element={<LecturerDashboard />} />
        <Route path="/students/dashboard/enrolled-courses" element={<StudentEnrolledCourses />} />

      </Routes>
    </>
  );
}

export default App;
