
import "../styles/signUpPageStyle.css"
import pagepic from "../assets/sign_up_page_bg_pic copy.png"

function StudentSignUpPage(){
  return (

    <div className="entire-signup-page-container">
            <div className="main-body-container">


            <div className="image-card-section">
                <div className="signup-overlay"></div>
                <div className="image-card-container">
                    <img src={pagepic} alt="two graduants smiling" className="signup-page-photo"/>
                </div>
                <div className="page-title-container">
                    <h4 className="signup-uni-title">Camouoflage University</h4>
                    <h2 className="signup-page-title-note">Inspiring greatness through education</h2>
                </div>
            </div>


            <div className="form-section">
                <div className="whole-sign-up-form-container"> 

                    <div className="top-sign-in-message">
                        Already Created an Account? <a href="/signin" className="sign-in-redirect">Sign in</a> here.
                    </div>

                    <div className="sign-in-form-container">
                        <div className="sign-in-form-message">
                            Create QuickGrade Account
                        </div>

                        <form className="sign-up-form" action="/INSERT-ENDPOINT" method="post">

                            <label className="signup-form-labels" htmlFor="studentNameInput"> Name</label> <br></br>
                            <input className="signup-form-inputs" placeholder="Enter name" id="studentNameInput" name="name"/><br></br>

                            <label className="signup-form-labels" htmlFor="emailInput">Email</label><br></br>
                            <input className="signup-form-inputs" placeholder="Enter email" id="emailInput" name="email"/><br></br>

                            <label className="signup-form-labels" htmlFor="facultyInput">Faculty</label><br></br>
                            <input className="signup-form-inputs" placeholder="Enter faculty" id="facultyInput" name="faculty"/><br></br>

                            <label  className="signup-form-labels"htmlFor="departmentInput">Department</label><br></br>
                            <input className="signup-form-inputs" placeholder="Enter department" id="departmentInput" name="department"/><br></br>

                            <label className="signup-form-labels" htmlFor="studentIdInput">Student Identification Number</label><br></br>
                            <input className="signup-form-inputs" placeholder="Enter your Registration number" id="studentIdInput" name="studentId"/><br></br>

                            <label className= "signup-form-labels" htmlFor="passwordInput">Password</label><br></br>
                            <input className= "signup-form-inputs" placeholder="Enter password" id="passwordInput" name="passwordInput"/><br></br>

                            <button className="signup-form-submit-button" type="submit">Sign up</button>

                        </form>

                        

                    </div>
                </div>
                    
            </div>

            
            </div>

            <footer className="signup-footer-contents">
            <p className="footer-website-name">QuickGrade</p>
            <p className="footer-rights-notice">QuickGrade Inc. All Rights Reserved</p>
            <div className="footer-links">
                <a href="/INSERT-LINK">Privacy</a>
                <a href="/INSERT-LINK">Terms</a>
            </div>
        
        </footer>
        </div>
  )
}

export default StudentSignUpPage