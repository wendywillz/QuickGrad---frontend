import "../styles/reset_otp.css";
import quickgradelogo from "../assets/quick_grade_logo_with_text_blue.png";
function ResetOtp() {
  return (
    <div className="reset-otp-body-wrapper">
      <header className="header">
        <img src={quickgradelogo} alt="Quickgrade Logo" />
      </header>

      <div className="app">
        <h1 className="reset-otp-heading">Reset Password</h1>
        <label className="reset-otp-label">
          Enter the OTP sent to your email:
        </label>

        <form action="#" method="post">
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="Enter OTP"
            required
            className="reset-otp-input"
          />

          <button type="submit" className="reset-otp-input-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetOtp;
