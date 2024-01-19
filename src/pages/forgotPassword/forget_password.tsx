import "./forget_password.css";
import quickgradelogo from "../../assets/quick_grade_logo_with_text_blue.png";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

export function ForgotPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const handleUserEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail((event.currentTarget as HTMLInputElement).value);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("userRole: ", email);
    try {
      const currentRoute = location.pathname;
      console.log("currentRoute: ", currentRoute);
      if (currentRoute === "/students/forgot-password") {
        const res = await axios.post(
          `http://localhost:3000/students/reset-password`,
          {
            email: email,
          }
        );
        // checking the response
        if (res.status === 200 && res.data.studentNotFoundError) {
          navigate("/students/forgot-password");
        } else if (res.status === 200 && res.data.linkSentSuccessfully) {
          navigate("/students/signin");
        }
      } else if (currentRoute === "/lecturers/forgot-password") {
        const res = await axios.post(
          `http://localhost:3000/lecturers/reset-password`,
          {
            email: email,
          }
        );
        // checking the response
        if (res.status === 200 && res.data.studentNotFoundError) {
          navigate("/lecturers/forgot-password");
        } else if (res.status === 200 && res.data.linkSentSuccessfully) {
          navigate("/lecturers/signin");
        }
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="reset-otp-body-wrapper">
      <header className="reset-otp-header">
        <img src={quickgradelogo} alt="Quickgrade Logo" />
      </header>

      <div className="reset-otp-app">
        <h1 className="reset-otp-heading">Forgot Password</h1>
        <p className="instruction">
          Enter the email associated with your account and we’ll send an email
          with instruction to reset your password
        </p>
        <label className="reset-otp-label">Email</label>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="Enter your email"
            required
            className="reset-otp-input"
            value={email}
            onChange={handleUserEmail}
          />

          <button type="submit" className="reset-otp-input-btn">
            Forgot Password
          </button>
          <Link to="/" className="back-end-login-input-btn">
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}
