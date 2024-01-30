import { LoginPage } from "../loginPage/Login";
import "./App.css";
import student_login_page_bg from "../../assets/loginBackground.png";
import lecturer_login_page_bg from "../../assets/lecturer_signin_bg.png";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../landingPage/LandingPage";
import EnterOtp from "../enter-otp/enter_otp";
import ResetEnterNewPasswordPage from "../reset-enter-new-password/Reset_enter_new_pw";
import LecturerDashboard from "../lecturerDashboard/LecturerDashboard";
import VerifyEmail from "../verify-email/VerifyEmailPage";
import SignUpPage from "../signup/signUpPage";
import { CheckYourEmail } from "../check-you-email/check_your_email";
import { ForgotPassword } from "../forgotPassword/forget_password";
import LecturerResults from "../LecturerResultsPage/LecturerResults";
import StudentDash from "../studentDashboard/StudentDash/StudentDash";
import StudentTakeExamsInstructions from "../studentTakeExamsInstructions/studentTakeExamsInstructions";

import StudentsChangePassword from "../Students-Change-Password/StudentsChangePassword";

import SetExamPage from "../setExam/setExamPage";

// import CompletedExamOBJ from "../completed exam/completedExamObj";

import StudentsResults from "../studentsresults/Students-Results";

import StudentEnrolledCourses from "../studentEnrolledCourses/studentEnrolledCourses";

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
        
        <Route path="/verify-email" element={<VerifyEmail />} />
        
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
        <Route path="/students/dashboard" element={<StudentDash />} />
        <Route path="/lecturers/dashboard" element={<LecturerDashboard />} />
        <Route path="/lecturers/results" element={<LecturerResults />} />
        <Route
          path="/students/dashboard/enrolled-courses"
          element={<StudentEnrolledCourses />}
        />
        <Route
          path="/students/dashboard/take-exams/instructions"
          element={<StudentTakeExamsInstructions />}
        />
        <Route
          path="/students/dashboard/change-password"
          element={<StudentsChangePassword />}
        />
        
        <Route
          path="/lecturers/dashboard/set-exams"
          element={<SetExamPage />}
        />

        {/* <Route
          path="/students/dashboard/completed-exam-obj"
          element={<CompletedExamOBJ />}
        /> */}

        <Route path="/students/dashboard/results" element={<StudentsResults />} />

        {/* <Route
          path="/students/dashboard/completed-exam-theory"
          element={<CompletedExamTheory />}
        /> */}

      </Routes>
    </>
  );
}

export default App;
