import { LeftImageWrapper } from "../components/Login_background";
import "../components/Login_style.css";

interface Props {
  id_or_email: string;
  placeholder: string;
  form_title: string;
  backgroundImage: string;
}
export function LoginPage(props: Props) {
  return (
    <div className="main-body-wrapper">
      <div className="inner-body-wrapper">
        <LeftImageWrapper backgroundImage={props.backgroundImage}>
          <h1 className="university-title">Camouflage University</h1>
          <p className="moto-wrapper">Inspiring greatness through education</p>
        </LeftImageWrapper>

        <div className="login-form-wrapper">
          <form className="login-form">
            <h1 className="form-title">{props.form_title}</h1>
            <div className="field">
              <label className="form-label">{props.id_or_email}</label>
              <input
                className="input"
                type="text"
                placeholder={props.placeholder}
              />
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="password-icon-wrapper">
                <i className="fa-solid fa-lock password-icon"></i>
                <input
                  className="password_input"
                  type="text"
                  placeholder="Enter password"
                />
              </div>
              <p className="forgot-password">Forgot password?</p>
            </div>
            <button className="sign-in-btn">Sign in</button>
          </form>
        </div>
      </div>
      <footer>
        <div className="inner-footer-wrapper">
          <div className="left-footer-text-wrapper">
            <p className="footer-text">QuickGrade</p>
          </div>
          <div className="center-footer-text-wrapper">
            <p className="footer-text">QuickGrade Inc. All rights Reserved</p>
          </div>
          <div className="right-footer-text-wrapper">
            <p className="footer-text privacy">Privacy</p>
            <p className="footer-text terms">Terms</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
