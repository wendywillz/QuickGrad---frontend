import "../studentDashboard/Dashboard.css";
import "../../assets/menu-board.png";
import SideBar from "../../components/sidebar/sideBar";
import { Link } from "react-router-dom";

function LecturerDashboard() {
  return (
    <div className="dashboard">
      <section className="hero">
        <div className="hero-content">
          <img
            className="img"
            src="https://c.animaapp.com/IX1zE9E9/img/notification.svg"
          />
          <div className="text-wrapper">Welcome, 22/23/07/019</div>
        </div>
      </section>
      {/* Sidebar */}
      <div className="text-wrapper-2">Dashboard</div>
      <SideBar>
        {{
          sidebarElement: (
            <>
              <div className="feature-2">
                <img
                  className="img-feat"
                  src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-menu.svg"
                />
                <Link to="/" className="text-wrapper-6">
                  Dashboard
                </Link>
              </div>
              <div className="feature-2">
                <img
                  className="img-2"
                  src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-book-square.svg"
                />
                <Link to="/" className="text-wrapper-6">
                  Courses
                </Link>
              </div>
              <div className="feature-2">
                <img
                  className="img-2"
                  src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-sort.svg"
                />
                <Link to="/" className="text-wrapper-6">
                  Set Exams
                </Link>
              </div>
              <div className="feature-2">
                <img
                  className="img-2"
                  src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-sort.svg"
                />
                <Link to="/" className="text-wrapper-6">
                  Grade Exams
                </Link>
              </div>
              <div className="feature-2">
                <img className="img-2" src="./img/refresh-square-2.png" />
                <Link to="/" className="text-wrapper-6">
                  Results
                </Link>
              </div>
            </>
          ),
        }}
      </SideBar>
      {/* Main content */}
      <main className="frame-5">
        <div className="frame-wrapper">
          <p className="lecturer">
            Lecturer (Dr.), Department of Chemistry.
            <br />
            Faculty of Science.
            <br />
            Camouflage University. <br />
            Atlanta, Nigeria.
          </p>
        </div>
        <div className="div-wrapper">
          <div className="frame-7">
            <div className="frame-8">
              <div className="frame-9">
                <div className="wrapper-text">
                  <div className="text">2022/2023 : Second Semester</div>
                  <div className="course">Course Examination TimeTable</div>
                </div>
              </div>
            </div>
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12-lecturer">
                  <div className="text-wrapper-8">Course Code</div>
                  <div className="text-wrapper-8">Department</div>
                  <div className="text-wrapper-8">Date/Time</div>
                  <div className="text-wrapper-8">Venue</div>
                  <div className="text-wrapper-8">Registered</div>
                  <div className="text-wrapper-8">Action</div>
                </div>
                <div className="frame-13">
                  <div className="frame-14-lecturer">
                    <div className="text-wrapper-10-lecturer">CE 522</div>
                    <div className="text-wrapper-10-lecturer">
                      Chemical Engineering
                    </div>
                    <div className="text-wrapper-10-lecturer">
                      10 Aug, 2013 / <br /> 2:10pm
                    </div>
                    <div className="text-wrapper-10-lecturer">
                      Campus E-center
                    </div>
                    <div className="text-wrapper-10-lecturer">211</div>
                    <div>
                      <button type="submit" className="text-wrapper-12">
                        Set Action
                      </button>
                    </div>
                  </div>
                  <div className="frame-14-lecturer">
                    <div className="text-wrapper-10-lecturer">CE 522</div>
                    <div className="text-wrapper-10-lecturer">
                      Chemical Engineering
                    </div>
                    <div className="text-wrapper-10-lecturer">
                      10 Aug, 2013 / <br /> 2:10pm
                    </div>
                    <div className="text-wrapper-10-lecturer">
                      Campus E-center
                    </div>
                    <div className="text-wrapper-10-lecturer">211</div>
                    <div>
                      <button className="text-wrapper-12">Set Action</button>
                    </div>
                  </div>
                  <div className="frame-14-lecturer">
                    <div className="text-wrapper-10-lecturer">CE 522</div>
                    <div className="text-wrapper-10-lecturer">
                      Chemical Engineering
                    </div>
                    <div className="text-wrapper-10-lecturer">
                      10 Aug, 2013 / <br /> 2:10pm
                    </div>
                    <div className="text-wrapper-10-lecturer">
                      Campus E-center
                    </div>
                    <div className="text-wrapper-10-lecturer">211</div>
                    <div>
                      <button className="text-wrapper-12">Set Action</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LecturerDashboard;
