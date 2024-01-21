import { ChangeEvent, FormEvent, useState } from "react";
import "./signUpPageStyle.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pagepic from "../../assets/sign_up_page_bg_pic copy.png";
import axios from "axios";
import Footer from "../../components/footer/footer";
import MainButton from "../../components/buttons/mainButton";
interface SignUpPageProps {
  signin_link: string;
}
function SignUpPage(props: SignUpPageProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const handleUSerEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail((event.currentTarget as HTMLInputElement).value);
  };
  const handleUserPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword((event.currentTarget as HTMLInputElement).value);
  };
  const handleUserFaculty = (event: ChangeEvent<HTMLInputElement>) => {
    setFaculty((event.currentTarget as HTMLInputElement).value);
  };
  const handleUserDepartment = (event: ChangeEvent<HTMLInputElement>) => {
    setDepartment((event.currentTarget as HTMLInputElement).value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log("userRole: ", email);
    try {
      const currentRoute = location.pathname;
      console.log("currentRoute: ", currentRoute);
      if (currentRoute === "/students/signup") {
        const res = await axios.post(`http://localhost:3000/students/signup`, {
          email: email,
          password: password,
          department: department,
          faculty: faculty,
        });
        // checking the response
        if (res.status === 200 && res.data.existingStudentError) {
          navigate("/students/signup");
        } else if (res.status === 200 && res.data.successfulSignup) {
          navigate("/students/check-your-email");
        }
      } else if (currentRoute === "/lecturers/signup") {
        const res = await axios.post(`http://localhost:3000/lecturers/signup`, {
          email: email,
          password: password,
          department: department,
          faculty: faculty,
        });
        // checking the response
        if (res.status === 200 && res.data.existingLecturerError) {
          navigate("/lecturers/signup");
        } else if (res.status === 200 && res.data.successfulSignup) {
          navigate("/lecturers/check-your-email");
        }
      }
    } catch (error) {
      console.log("error", error);
    }

    // redirect to a different page based on user type
  };
  return (
    <div className="entire-signup-page-container">
      <div className="main-body-container">
        <div className="image-card-section">
          <div className="signup-overlay"></div>
          <div className="image-card-container">
            <img
              src={pagepic}
              alt="two graduants smiling"
              className="signup-page-photo"
            />
          </div>
          <div className="page-title-container">
            <h4 className="signup-uni-title">Camouoflage University</h4>
            <h2 className="signup-page-title-note">
              Inspiring greatness through education
            </h2>
          </div>
        </div>

        <div className="form-section">
          <div className="whole-sign-up-form-container">
            <div className="top-sign-in-message">
              Already Created an Account? Sign in
              <Link to={props.signin_link}> here</Link>
            </div>

            <div className="sign-in-form-container">
              <div className="sign-in-form-message">
                Create QuickGrade Account
              </div>

              <form className="sign-up-form" onSubmit={handleSubmit}>
                <label className="signup-form-labels" htmlFor="emailInput">
                  Email
                </label>
                <br></br>
                <input
                  className="signup-form-inputs"
                  placeholder="Enter email"
                  id="emailInput"
                  name="email"
                  value={email}
                  onChange={handleUSerEmail}
                />
                <br></br>
                <label className="signup-form-labels" htmlFor="facultyInput">
                  Faculty
                </label>
                <br></br>
                <input
                  className="signup-form-inputs"
                  placeholder="Enter faculty"
                  id="facultyInput"
                  name="faculty"
                  value={faculty}
                  onChange={handleUserFaculty}
                />
                <br></br>
                <label className="signup-form-labels" htmlFor="departmentInput">
                  Department
                </label>
                <br></br>
                <input
                  className="signup-form-inputs"
                  placeholder="Enter department"
                  id="departmentInput"
                  name="department"
                  value={department}
                  onChange={handleUserDepartment}
                />
                <br></br>

                <br></br>
                <label className="signup-form-labels" htmlFor="passwordInput">
                  Password
                </label>
                <br></br>
                <input
                  className="signup-form-inputs"
                  placeholder="Enter password"
                  id="passwordInput"
                  name="passwordInput"
                  value={password}
                  onChange={handleUserPassword}
                />
                <br></br>
                <MainButton button_text="Sign up" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer footer_text="blue-text" />
    </div>
  );
}

export default SignUpPage;
