import { useState, FormEvent, ChangeEvent } from "react";
import "../styles/LandingPage.css";
import quickgradelogo from "../assets/quick_grade_logo_with_text.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
function LandingPage() {
  const [userRole, setUserRole] = useState(""); // State to manage user type selection
  const navigate = useNavigate();
  console.log("Navigate function:", navigate);
  // useEffect(() => {
  //   axios.get(`http://localhost:3000/${userRole}`).then((res) => {
  //     if (res.status === 200) {
  //       if (res.data === "lecturer") {
  //         navigate("/lecturer_signin");
  //       }
  //     }
  //   });
  // }, [userRole, navigate]);

  const handleUserRoleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUserRole((event.currentTarget as HTMLSelectElement).value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("userRole: ", userRole);
    try {
      const res = await axios.get(`http://localhost:3000/${userRole}`);

      if (res.status === 200 && res.data.role === "lecturer") {
        navigate("/lecturer_signin");
      } else if (res.status === 200 && res.data.role === "student") {
        navigate("/student_signin");
      }
    } catch (error) {
      console.log("error", error);
    }

    // redirect to a different page based on user type
  };

  return (
    <>
      <div className="landing-container">
        <div className="container">
          <div className="sectionA">
            <div className="title1">
              <img src={quickgradelogo} alt="logo png" />
            </div>
            <div>
              <h4 className="unlock-your-potential">
                Unlock your exam potential with our management system.
              </h4>
            </div>
          </div>

          <div className="sectionB">
            {/* Form */}
            <form className="landing-page-form" onSubmit={handleSubmit}>
              <div className="form-label">
                <label className="landing-page-form-label" htmlFor="userRole">
                  Sign in As:
                </label>

                <select
                  id="userRole"
                  name="userRole"
                  value={userRole}
                  onChange={handleUserRoleChange}
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="lecturer">Lecturer</option>
                  <option value="student">Student</option>
                </select>
              </div>

              {/* <button type="submit">Get Started</button> */}

              <button className="landing-page-get-started-btn">
                Get Started
              </button>

              <div className="landing-page-register-here">
                <p className="no-account-register">
                  No account? Register{" "}
                  <Link to="" className="login-here">
                    here
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

        <div className="footer">
          <div className="footer-container">
            <div>Quickgrade</div>
            <div>QuickGrade Inc. All rights Reserved</div>
            <div>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
