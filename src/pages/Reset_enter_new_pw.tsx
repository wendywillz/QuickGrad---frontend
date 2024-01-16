import "../styles/Reset_enter_new_pw.css";
import quickgradelogo from "../assets/quick_grade_logo_with_text.png";
const ResetEnterNewPasswordPage = () => {
  return (
    <div className="re-enter-password-wrapper">
      <div className="header">
        <img src={quickgradelogo} alt="logo png" />
      </div>
      <div className="container">
        <div className="form-container">
          <h1 className="form-title">Reset Password</h1>

          <form className="form">
            <div className="form-inner-container">
              <label className="re-enter-password-label" htmlFor="password">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter your new Password"
                name="Enter your new password"
                id="password"
                required
                className="re-enter-password-input"
              />

              <br />
              <label
                className="re-enter-password-label"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm New Password"
                name="confirm-password"
                id="confirm-password"
                required
                className="re-enter-password-input"
              />

              <button className="btn">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetEnterNewPasswordPage;
