import "./studentEnrolledCourses.css";
import SideBar from "../../components/sidebar/sideBar";
import { Link } from "react-router-dom";

function StudentEnrolledCourses() {
  return (
    <>
      <div className="enrolled-courses-page-container">
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
                  <Link to="/students/dashboard/enrolled-courses" className="text-wrapper-6">
                    Enrolled Courses
                  </Link>
                </div>
                <div className="feature-2">
                  <img
                    className="img-2"
                    src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-sort.svg"
                  />
                  <Link to="/" className="text-wrapper-6">
                    Results
                  </Link>
                </div>
              </>
            ),
          }}
        </SideBar>

        <section className="enrolled-courses-dashboard-container">
          <div className="enrolled-courses-dashboard-header">
            <img
              className="img"
              src="https://c.animaapp.com/IX1zE9E9/img/notification.svg"
            />
            <div className="enrolled-courses-dashboard-header-text-wrapper">
              Welcome, Nkachukwu
            </div>
          </div>

          <main className="enrolled-courses-body">
            <div className="enrolled-courses-title">
              <h3>Enrolled Courses</h3>
            </div>

            <div className="enrolled-courses-bio-card">
              <div>
                <h3>Nkachukwu Nwobi</h3>
              </div>
              <div>
                <p>Department of Chemical Engineering</p>
                <p>Faculty of Engineering</p>
                <p>Camouflage University</p>
                <p>Atlanta, Nigeria</p>
              </div>
            </div>
            <div className="enrolled-courses-container">
              <div className="enrolled-courses-year">
                <div className="enrolled-courses-semester">
                  <label htmlFor="courses-semester">Semester: </label>
                  <select name="courses-semester" id="">
                    <option value="">First</option>
                    <option value="">Second</option>
                  </select>
                </div>
                <div className="enrolled-courses-session">
                  <label htmlFor="courses-sem">Session: </label>
                  <select name="courses-semester" id="">
                    <option value="">2022/2023</option>
                    <option value="">2023/2024</option>
                  </select>
                </div>
              </div>
              <div className="enrolled-courses-timetable">
                <h5>Examinations Timetable</h5>
              </div>
              <div className="enrolled-courses-table-container">
                <table className="enrolled-courses-table">
                  <thead className="enrolled-courses-table-header">
                    <tr>
                      <th>Course Code</th>
                      <th>Course Title</th>
                      <th>Date/Time</th>
                      <th>Venue</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="enrolled-courses-table-body">
                    <tr>
                      <td>CHG 201</td>
                      <td>Thermodynamics</td>
                      <td>24 Aug, 2023 / 2:10PM</td>
                      <td>Campus E-center</td>
                      <td>Expired</td>
                    </tr>
                    <tr>
                      <td>CHG 201</td>
                      <td>Thermodynamics</td>
                      <td>24 Aug, 2023 / 2:10PM</td>
                      <td>Campus E-center</td>
                      <td>Expired</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </section>
      </div>
    </>
  );
}

export default StudentEnrolledCourses;
