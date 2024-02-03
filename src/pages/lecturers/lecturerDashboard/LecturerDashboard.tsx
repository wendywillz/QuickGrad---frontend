import "../../students/studentDashboard/StudentDash.css";
import "./Dashboard.css";
import "../../../assets/menu-board.png";
import SideBar from "../../../components/sidebar/sideBar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../components/header/header";
import BlueHeader from "../../../components/header/blueHeader/blueHeader";
import { useAuth } from "../../../components/protectedRoutes/protectedRoute";

interface Exam {
  courseCode: string;
  department: string;
  examDate: Date;
  examDuration: string;
  venue: string;
  registered: string;
}

function LecturerDashboard() {
  const { lecturerData } = useAuth();

  const [examData, setExamData] = useState<Exam[]>([]);
  const [selectedSemester, setSelectedSemester] = useState<string>("First");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/lecturers/dashboard`,
          {
            withCredentials: true,
            params: { semester: selectedSemester },
          }
        );

        if (res.status === 200 && res.data.lecturer.lecturerId) {
          setExamData(res.data.exam);
          console.log(res.data);
        }
      } catch (error) {
        console.log("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, [selectedSemester]);

  const newUser =
    lecturerData?.title + " " + lecturerData?.firstName || "newUser";

  return (
    <div className="student-dashboard-container">
      <div className="dashboard">
        {lecturerData && (
          <section className="hero">
            <div className="hero-content">
              <img
                className="img"
                src="https://c.animaapp.com/IX1zE9E9/img/notification.svg"
              />
              <div className="text-wrapper">
                Welcome, {lecturerData.lecturerId}
              </div>
            </div>
          </section>
        )}

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
                  <Link to="/lecturers/dashboard" className="text-wrapper-6">
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

                  <Link
                    to="/lecturers/dashboard/set-exams"
                    className="text-wrapper-6"
                  >
                    Set Exams
                  </Link>
                </div>
                <div className="feature-2">
                  <img
                    className="img-2"
                    src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-sort.svg"
                  />
                  <Link
                    to="/lecturers/dashboard/grade-exams"
                    className="text-wrapper-6"
                  >
                    Grade Exams
                  </Link>
                </div>
                <div className="feature-2">
                  <img
                    className="img-2"
                    src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-refresh-square-2.svg"
                  />
                  <Link
                    to="/lecturers/dashboard/results"
                    className="text-wrapper-6"
                  >
                    Results
                  </Link>
                </div>
              </>
            ),
          }}
        </SideBar>

        <div className="student-dashboard-body">
          {lecturerData && <Header newUser={newUser} />}
          <div className="heading-dashboard">Dashboard</div>

          <BlueHeader
            userDetails={{
              matricNo: lecturerData?.employeeID || "",
              department: lecturerData?.department || "",
              faculty: lecturerData?.faculty || "",
              university: "Camouflage University.",
              location: "Atlanta, Nigeria.",
            }}
          />

          {/* Main content */}
          <main className="frame-5">
            {lecturerData && (
              <div className="frame-wrapper">
                <p className="lecturer">
                  Lecturer {lecturerData.title} {lecturerData.lastName},
                  Department of {lecturerData.department}.
                  <br />
                  {lecturerData.faculty}.
                  <br />
                  Camouflage University. <br />
                  Atlanta, Nigeria.
                </p>
              </div>
            )}

            {examData && examData.length > 0 && (
              <div className="div-wrapper">
                <div className="frame-7">
                  <div className="semester-session-container">
                    <div className="frame-9">
                      <div className="wrapper-text">
                        <select
                          value={selectedSemester}
                          onChange={(e) => setSelectedSemester(e.target.value)}
                        >
                          <option className="text" value="First">
                            2023/2024 : {selectedSemester}
                          </option>
                        </select>
                        <div className="course">
                          Course Examination TimeTable
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-10">
                    <div className="frame-12-lecturer">
                      <div className="lecturerTexts">Course Code</div>
                      <div className="lecturerTexts">Department</div>
                      <div className="lecturerTexts">Date/Time</div>
                      <div className="lecturerTexts">Venue</div>
                      <div className="lecturerTexts">Registered</div>
                      <div className="lecturerTexts">Action</div>
                    </div>
                    <div className="frame-13-lecturer">
                      <table>
                        <tbody>
                          {examData.map((exam, index) => (
                            <tr key={index}>
                              <td className="text-wrapper-10-lecturer">
                                {exam.courseCode}
                              </td>
                              <td className="text-wrapper-10-lecturer">
                                {exam.department}
                              </td>
                              <td className="text-wrapper-10-lecturer">
                                {exam.examDate.toLocaleString()} / <br />{" "}
                                {exam.examDuration}
                              </td>
                              <td className="text-wrapper-10-lecturer">
                                {exam.venue}
                              </td>
                              <td className="text-wrapper-10-lecturer">
                                {exam.registered}
                              </td>
                              <td>
                                <button
                                  type="submit"
                                  className="submit-button-for-lecturer"
                                >
                                  Set Action
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default LecturerDashboard;
