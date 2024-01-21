import "./Reset_enter_new_pw.css";
import quickgradelogo from "../../assets/quick_grade_logo_with_text_blue.png";
import MainButton from "../../components/buttons/mainButton";

const ResetEnterNewPasswordPage = () => {
  return (
    <div className="re-enter-password-wrapper">
      <div className="re-enter-password-header">
        <img src={quickgradelogo} alt="logo png" />
      </div>
      <div className="re-enter-password-container">
        <div className="form-container">
          <h1 className="form-title">Reset Password</h1>

          <form className="form">
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
              <MainButton button_text="Reset PAssword" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ResetEnterNewPasswordPage;
