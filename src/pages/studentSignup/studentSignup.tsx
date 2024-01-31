import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SignUpPage from "../../components/signup/signUpPage";

export default function StudentSignup() {
  const navigate = useNavigate();
  const location = useLocation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const handleFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName((event.currentTarget as HTMLInputElement).value);
  };
  const handleLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName((event.currentTarget as HTMLInputElement).value);
  };
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

      const res = await axios.post(`http://localhost:3000/students/signup`, {
        firstName,
        lastName,
        email,
        password,
        department,
        faculty,
      });
      // checking the response
      if (res.status === 200 && res.data.existingStudentError) {
        navigate("/students/signup");
      } else if (res.status === 200 && res.data.successfulSignup) {
        navigate("/students/confirm-email");
      }
    } catch (error) {
      console.log("error", error);
    }

    // redirect to a different page based on user type
  };

  return (
    <SignUpPage signin_link="/lecturers/signin" onsubmit={handleSubmit}>
      {{
        signupFormElement: (
          <>
            <label className="signup-form-labels" htmlFor="emailInput">
              First Name
            </label>
            <br></br>
            <input
              className="signup-form-inputs"
              placeholder="Enter your FirstName"
              id="firstNameInput"
              name="firstName"
              value={firstName}
              onChange={handleFirstName}
            />

            <label className="signup-form-labels" htmlFor="emailInput">
              Last Name
            </label>
            <br></br>
            <input
              className="signup-form-inputs"
              placeholder="Enter your LastName"
              id="lastNameInput"
              name="lastName"
              value={lastName}
              onChange={handleLastName}
            />

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

            <label className="signup-form-labels" htmlFor="facultyInput">
              Faculty
            </label>
            <input
              className="signup-form-inputs"
              placeholder="Enter faculty"
              id="facultyInput"
              name="faculty"
              value={faculty}
              onChange={handleUserFaculty}
            />

            <label className="signup-form-labels" htmlFor="departmentInput">
              Department
            </label>
            <input
              className="signup-form-inputs"
              placeholder="Enter department"
              id="departmentInput"
              name="department"
              value={department}
              onChange={handleUserDepartment}
            />

            <label className="signup-form-labels" htmlFor="passwordInput">
              Password
            </label>
            <input
              className="signup-form-pw-input"
              placeholder="Enter password"
              id="passwordInput"
              name="passwordInput"
              type="password"
              value={password}
              onChange={handleUserPassword}
            />
          </>
        ),
      }}
    </SignUpPage>
  );
}
