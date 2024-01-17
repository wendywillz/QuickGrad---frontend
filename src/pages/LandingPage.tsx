import { useState, FormEvent } from "react"
import "../styles/LandingPage.css"
import quickgradelogo from "../assets/quick_grade_logo_with_text.png"
function LandingPage() {
  const [userRole, setUserRole] = useState("") // State to manage user type selection

  const handleUserRoleChange = (event: FormEvent) => {
    setUserRole((event.currentTarget as HTMLSelectElement).value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    // redirect to a different page based on user type
    console.log("Form submitted with user type:", userRole)
  }

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

              <button className="landing-page-get-started-btn">Get Started</button>
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
