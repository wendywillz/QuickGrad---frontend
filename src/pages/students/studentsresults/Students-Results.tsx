import "./Students-Results.css";
import SideBar from "../../../components/sidebar/sideBar";
import { Link } from "react-router-dom";
import arrowdown from "../../../assets/arrowdown.png";
import { useAuth } from "../../../components/protectedRoutes/protectedRoute";

function StudentsResults() {
  const { studentData } = useAuth();
  return (
    <div className="students-Results-main-body-wrapper">
      <SideBar>
        {{
          sidebarElement: (
            <>
              <div className="feature-2">
                <img
                  className="img-feat"
                  src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-menu.svg"
                />
                <Link to="/students/dashboard" className="text-wrapper-6">
                  Dashboard
                </Link>
              </div>
              <div className="feature-2">
                <img
                  className="img-2"
                  src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-book-square.svg"
                />
                <Link
                  to="/students/dashboard/enrolled-courses"
                  className="text-wrapper-6"
                >
                  Enrolled Courses
                </Link>
              </div>
              <div className="feature-2">
                <img
                  className="img-2"
                  src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-sort.svg"
                />
                <Link
                  to="/students/dashboard/results"
                  className="text-wrapper-6"
                >
                  Results
                </Link>
              </div>
            </>
          ),
        }}
      </SideBar>
      <div className="students-Results-right-body-wrapper">
        <div className="header-wrapper">
          {/* <div className="hero-content"></div> */}
          <div className="text-wrapper">
            <img
              className="students-Results-header-img"
              src="https://c.animaapp.com/IX1zE9E9/img/notification.svg"
            />
            <p>Welcome, {studentData?.firstName}</p>
          </div>
        </div>

        <div className="first">
          <div className="results-info">
            <h3 className="results">Results</h3>
          </div>

          <div className="semester-info">
            <label htmlFor="semester">Semester :</label>
            <select id="semester">
              <option value="first">First</option>
              <option value="second">Second</option>
            </select>
          </div>
          <div className="session-info">
            <label htmlFor="session">Session :</label>
            <select id="session">
              <option value="2022/2023">2022/2023</option>
              <option value="2023/2024">2023/2024</option>
            </select>
          </div>
        </div>
        <div className="search-section">
          <input
            className="search-by-course-input"
            type="search"
            placeholder="Search by course code"
          />
        </div>
        {/* </div className="grid-form"> */}
        <div className="grid-container">
          <div className="course-card">
            <h1 className="card-header">BCH 208</h1>
            <div className="middle-card">
              <div className="middle-left">
                <p className="number">62</p>
                <h4 className="totalscore">Total Score</h4>
              </div>
              <div className="middle-right">
                <h5 className="grade-sections">Section A: 38/40</h5>
                <h5 className="grade-sections">Section B: 24/30</h5>
              </div>
            </div>
            <div className="course-info">
              <p className="info">View Script</p>
              <img className="arrowdown" src={arrowdown} />
            </div>
          </div>
          <div className="course-card">
            <h1 className="card-header">BCH 108</h1>
            <div className="middle-card">
              <div className="middle-left">
                <p className="number">57</p>
                <h4 className="totalscore">Total Score</h4>
              </div>
              <div className="middle-right">
                <h5 className="grade-sections">Section A: 20/30</h5>
                <h5 className="grade-sections">Section B: 19/20</h5>
                <h5 className="grade-sections">Section c: 18/20</h5>
              </div>
            </div>
            <div className="course-info">
              <p className="info">View Script</p>
              <img className="arrowdown" src={arrowdown} />
            </div>
          </div>
          <div className="course-card">
            <h1 className="card-header">BCH 233</h1>
            <div className="middle-card">
              <div className="middle-left">
                <p className="number">68</p>
                <h4 className="totalscore">Total Score</h4>
              </div>
              <div className="middle-right">
                <h5 className="grade-sections">Section A: 40/40</h5>
                <h5 className="grade-sections">Section B: 28/30</h5>
              </div>
            </div>
            <div className="course-info">
              <p className="info">View Script</p>
              <img className="arrowdown" src={arrowdown} />
            </div>
          </div>
          <div className="course-card">
            <h1 className="card-header">BCH 225</h1>
            <div className="middle-card">
              <div className="middle-left">
                <p className="number">68</p>
                <h4 className="totalscore">Total Score</h4>
              </div>
              <div className="middle-right">
                <h5 className="grade-sections">Section A: 29/30</h5>
                <h5 className="grade-sections">Section B: 20/20</h5>
                <h5 className="grade-sections">Section c: 19/20</h5>
              </div>
            </div>
            <div className="course-info">
              <p className="info">View Script</p>
              <img className="arrowdown" src={arrowdown} />
            </div>
          </div>
          <div className="course-card">
            <h1 className="card-header">BCH 223</h1>
            <div className="middle-card">
              <div className="middle-left">
                <p className="number">46</p>
                <h4 className="totalscore">Total Score</h4>
              </div>
              <div className="middle-right">
                <h5 className="grade-sections">Section A: 26/40</h5>
                <h5 className="grade-sections">Section B: 19/20</h5>
              </div>
            </div>
            <div className="course-info">
              <p className="info">View Script</p>
              <img className="arrowdown" src={arrowdown} />
            </div>
          </div>
          <div className="course-card">
            <h1 className="card-header">BCH 203</h1>
            <div className="middle-card">
              <div className="middle-left">
                <p className="noresults">
                  No <br></br>Results
                </p>
                <h4 className="totalscore">Total Score</h4>
              </div>
              <h6 className="not-ready">Result Not Ready</h6>
            </div>
          </div>
          <div className="course-card">
            <h1 className="card-header">BCH 214</h1>
            <div className="middle-card">
              <div className="middle-left">
                <p className="noresults">No Results</p>
                <h4 className="totalscore">Total Score</h4>
              </div>
              <h6 className="not-ready">Result Not Ready</h6>
            </div>
          </div>
          <div className="course-card">
            <h1 className="card-header">BCH 222</h1>
            <div className="middle-card">
              <div className="middle-left">
                <p className="noresults">No Results</p>
                <h4 className="totalscore">Total Score</h4>
              </div>
              <h6 className="not-ready">Result Not Ready</h6>
            </div>
          </div>
          <div className="course-card">
            <h1 className="card-header">BCH 217</h1>
            <div className="middle-card">
              <div className="middle-left">
                <p className="noresults">No Results</p>
                <h4 className="totalscore">Total Score</h4>
              </div>
              <h6 className="not-ready">Result Not Ready</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsResults;
