// import '../styles/reset_otp.css'

function ResetOtp() {
  return (
    <div>
      <div className="logo">
        <header>
          <img src="/quick.png" alt="Quickgrade Logo" />
        </header>
      </div>

      <div className="app">
        <h1>Reset Password</h1>
        <p>Enter the OTP sent to your email:</p>
        <form action="#" method="post">
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="Enter OTP"
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ResetOtp;
