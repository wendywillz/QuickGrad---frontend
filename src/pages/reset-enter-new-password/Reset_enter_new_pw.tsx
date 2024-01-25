import "./Reset_enter_new_pw.css";
import quickgradelogo from "../../assets/quick_grade_logo_with_text_blue.png";
import MainButton from "../../components/buttons/mainButton";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const ResetEnterNewPasswordPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = useState("");
  const handleUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword((event.currentTarget as HTMLInputElement).value);
  };
  const currentRoute = location.pathname;
  console.log("currentroute", currentRoute);
  console.log(currentRoute === "/students/reset-password/token");
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const baseURL = currentRoute.startsWith("/students")
        ? "http://localhost:3000/students"
        : currentRoute.startsWith("/lecturers")
        ? "http://localhost:3000/lecturers"
        : "";

      const res = await axios.post(`${baseURL}/reset-password/${token}`, {
        password: password,
        token: token,
      });

      // checking the response
      if (
        res.status === 200 &&
        (res.data.invalidPasswordResetToken || res.data.tokenExpired)
      ) {
        navigate(`${baseURL}/forgot-password`);
      } else if (res.status === 200 && res.data.passwordResetSuccessful) {
        baseURL.includes("/students") ? navigate("/students/signin") : navigate("/lecturers/signin");

      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="re-enter-password-wrapper">
      <div className="re-enter-password-header">
        <img src={quickgradelogo} alt="logo png" />
      </div>
      <div className="re-enter-password-container">
        <div className="form-container">
          <h1 className="form-title">Reset Password</h1>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-inner-container">
              <label className="re-enter-password-label" htmlFor="password">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter your new password"
                name="Enter your new password"
                id="password"
                required
                value={password}
                onChange={handleUserPassword}
                className="re-enter-password-input"
              />

              <label
                className="re-enter-password-label"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                name="confirm-password"
                id="confirm-password"
                required
                className="re-enter-password-input"
              />
              <MainButton button_text="Reset Password" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ResetEnterNewPasswordPage;
