import "./check_your_email.css";
import quickgradelogo from "../../assets/quick_grade_logo_with_text_blue.png";
import { Link } from "react-router-dom";

interface CheckYourEmailProps {
  information: string;
  location: string;
  location_text: string;
}
export function CheckYourEmail(props: CheckYourEmailProps) {
  return (
    <div className="reset-otp-body-wrapper">
      <header className="reset-otp-header">
        <img src={quickgradelogo} alt="Quickgrade Logo" />
      </header>

      <div className="reset-otp-app">
        <h1 className="reset-otp-heading">Check your Email</h1>
        <p className="check-your-email-text">{props.information}</p>
        <Link to={props.location} className="check-your-email-link">
          {" "}
          {props.location_text}
        </Link>
      </div>
    </div>
  );
}
