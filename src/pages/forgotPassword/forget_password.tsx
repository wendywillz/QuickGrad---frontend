import "./forget_password.css";
import quickgradelogo from "../../assets/quick_grade_logo_with_text_blue.png";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react";
import MainButton from "../../components/buttons/mainButton";
import axios from "axios";

interface ForgotPasswordProps {
  location: string;
}
export function ForgotPassword(props: ForgotPasswordProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const handleUserEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail((event.currentTarget as HTMLInputElement).value);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const baseURL = location.pathname.startsWith("/students")
      ? "http://localhost:3000/students"
      : location.pathname.startsWith("/lecturers")
      ? "http://localhost:3000/lecturers"
      : "";
    try {
      const res = await axios.post(`${baseURL}/reset-password`, {
        email: email,
      });

      // checking the response
      if (res.status === 200 && res.data.userNotFoundError) {
        navigate(`${baseURL}/forgot-password`);
      } else if (res.status === 200 && res.data.linkSentSuccessfully) {
        baseURL.includes("/students")
          ? navigate("/students/reset-password/check-your-email")
          : navigate("/lecturers/reset-password/check-your-email");
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
          <MainButton button_text="Forgot Password" />
          <Link to={props.location} className="back-end-login-input-btn">
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
}
