import SideBar from "../../components/sidebar/sideBar";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function StudentDashboard() {
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

      {/* Main content */}
      <main className="frame-5">
        <div className="frame-wrapper">
          <div className="frame-6">
            <div className="text-wrapper-7">22/23/08/019</div>
            <p className="department-of">
              Department of Biochemistry.
              <br />
              Faculty of Science.
              <br />
              Camouflage University. <br />
              Atlanta, Nigeria.
            </p>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="frame-7">
            <div className="frame-8">
              <div className="frame-9">
                <div className="text">Semester:</div>
                <div className="dropdown">
                  <select className="button-default">
                    <option className="text-2" value="1">
                      First
                    </option>
                    <option className="text-2" value="2">
                      Second
                    </option>
                    <option className="text-2" value="3">
                      Third
                    </option>
                  </select>
                </div>
              </div>
              <div className="frame-9">
                <div className="text">Session:</div>
                <div className="dropdown">
                  <select className="button-default">
                    <option className="text-2">2022/2023</option>
                    <option className="text-2">2021/2022</option>
                    <option className="text-2">2020/2021</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="frame-10">
              {/* <div className="frame-11"> */}
              <div className="frame-12">
                <div className="text-wrapper-8">Course Code</div>
                <div className="text-wrapper-9">Course Title</div>
                <div className="text-wrapper-9">Credit Unit</div>
              </div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="text-wrapper-10">BCH 208</div>
                  <div className="text-wrapper-11">Enzymology</div>
                  <div className="text-wrapper-11">5 Units</div>
                  <div>
                    <button type="submit" className="text-wrapper-13">
                      Enroll
                    </button>
                  </div>
                </div>
                <div className="frame-16">
                  <div className="text-wrapper-10">BCH 201</div>
                  <div className="text-wrapper-11">Nutrition and Diet</div>
                  <div className="text-wrapper-11">4 Units</div>
                  <div>
                    <button type="submit" className="text-wrapper-13">
                      Enroll
                    </button>
                  </div>
                </div>
                <div className="frame-18">
                  <div className="text-wrapper-10">BCH 212</div>
                  <div className="text-wrapper-11">Blood &amp; Body Fluids</div>
                  <div className="text-wrapper-11">2 Units</div>
                  <div>
                    <button className="text-wrapper-13">Enroll</button>
                  </div>
                </div>
                <div className="frame-19">
                  <div className="text-wrapper-10">BCH 121</div>
                  <div className="text-wrapper-11">DNA / RNA Sequence</div>
                  <div className="text-wrapper-11">4 Units</div>
                  <div>
                    <button className="text-wrapper-13">Enroll</button>
                  </div>
                </div>
                <div className="frame-18">
                  <div className="text-wrapper-10">Chem 212</div>
                  <div className="text-wrapper-11">Organic Chemistry</div>
                  <div className="text-wrapper-11">2 Units</div>
                  <div>
                    <button className="text-wrapper-13">Enroll</button>
                  </div>
                </div>
                <div className="frame-19">
                  <div className="text-wrapper-10">BCH 233</div>
                  <div className="text-wrapper-11">Pharmacology</div>
                  <div className="text-wrapper-11">4 Units</div>
                  <div>
                    <button className="text-wrapper-13">Enroll</button>
                  </div>
                </div>
                <div className="frame-19">
                  <div className="text-wrapper-10">BCH 205</div>
                  <div className="text-wrapper-11">Cytochromes Reactivity</div>
                  <div className="text-wrapper-11">2 Units</div>
                  <div>
                    <button className="text-wrapper-13">Enroll</button>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default StudentDashboard;
