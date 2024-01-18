import "../styles/verify-email.css";
import quickgradelogo from "../assets/quick_grade_logo_with_text_blue.png";
function ResetOtp() {
  return (
    <div className="verify-email-body-wrapper">
      <header className="header">
        <img src={quickgradelogo} alt="Quickgrade Logo" />
      </header>

      <div className="app">
        <h1 className="verify-email-heading"> Verify your Email Address </h1>
        <label className="verify-email-label">Input your email address:</label>

        <form action="#" method="post">
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="Enter Email Address"
            required
            className="verify-email-input"
          />

          <button type="submit" className="verify-email-input-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetOtp;
