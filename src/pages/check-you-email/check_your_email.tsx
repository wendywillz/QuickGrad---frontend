import "./check_your_email.css";
import quickgradelogo from "../../assets/quick_grade_logo_with_text_blue.png";
import { useNavigate, useLocation, Link } from "react-router-dom";

interface CheckYourEmailProps {
  userType: string;
  location: string
}
export function CheckYourEmail(props: CheckYourEmailProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = async () => {
    try {
      const currentRoute = location.pathname;
      console.log("currentRoute: ", currentRoute);
      if (currentRoute === "/students/check-your-email") {
        navigate("/students/confirm-email");
      } else if (currentRoute === "/lecturers/confirm-email") {
        navigate("/lecturers/confirm-email");
      }
    } catch (error) {
      console.log("error", error);
    }

    // redirect to a different page based on user type
  };
  return (
    <div className="reset-otp-body-wrapper">
      <header className="reset-otp-header">
        <img src={quickgradelogo} alt="Quickgrade Logo" />
      </header>

      <div className="reset-otp-app">
        <h1 className="reset-otp-heading">Check your Email</h1>
        <p className="check-your-email-text">
          We have sent your {props.userType} and password to your verified email,
          kindly use the detail to login.
        </p>
        <Link  to={props.location} className="check-your-email-link" onClick={handleOnClick}>
          {" "}
          Click here to login
        </Link>
      </div>
    </div>
  );
}
