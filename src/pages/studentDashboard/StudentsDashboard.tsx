import { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/sidebar/sideBar";
import "./Dashboard.css";
import { Link } from "react-router-dom";

interface Student {
  matricNo: string;
  department: string;
  faculty: string;
}

interface Course {
  courseCode: string;
  courseTitle: string;
  creditUnit: number;
}

function StudentDashboard() {
  const [studentData, setStudentData] = useState<Student | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedSemester, setSelectedSemester] = useState<string>("First");
  // const navigate = useNavigate();

  // const fetchDashboardDisplay = () => {
  //   axios
  //     .get(`http://localhost:3000/students/dashboard`, {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //       const result = response;
  //       if (result.status === 200 && result.data.UnauthorizedError) {
  //         navigate("/students/signin");
  //       } else {
  //         navigate("/students/dashboard");
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };
  // fetchDashboardDisplay();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/students/dashboard`,
          {
            withCredentials: true,
            params: { semester: selectedSemester },
          }
        );

        if (res.status === 200 && res.data.student.studentId) {
          setStudentData(res.data.student);
          setCourses(res.data.courses);
          console.log(res.data);
        }
      } catch (error) {
        console.log("Error fetching dashboard data:", error);
      }
    };

    fetchData();
    
  }, [selectedSemester]);

  return (
    <div className="dashboard">
      {studentData && (
        <section className="hero">
          <div className="hero-content">
            <img
              className="img"
              src="https://c.animaapp.com/IX1zE9E9/img/notification.svg"
            />

            <div className="text-wrapper">Welcome, {studentData.matricNo}</div>
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
        {studentData && (
          <div className="frame-wrapper">
            <div className="frame-6">
              <div className="text-wrapper-7">{studentData.matricNo}</div>
              <p className="department-of">
                {studentData.department}
                <br />
                {studentData.faculty}
                <br />
                Camouflage University. <br />
                Atlanta, Nigeria.
              </p>
            </div>
          </div>
        )}

        {courses && (
          <div className="div-wrapper">
            <div className="frame-7">
              <div className="frame-8">
                <div className="frame-9">
                  <div className="text">Semester:</div>
                  <div className="dropdown">
                    <select
                      className="button-default"
                      value={selectedSemester}
                      onChange={(e) => setSelectedSemester(e.target.value)}
                    >
                      <option className="text-2" value="First">
                        First
                      </option>
                      <option className="text-2" value="Second">
                        Second
                      </option>
                    </select>
                  </div>
                </div>
                <div className="frame-9">
                  <div className="text">Session:</div>
                  <div className="dropdown">
                    <select className="button-default">
                      <option className="text-2">2023/2024</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="frame-10">
                <div className="frame-12">
                  <div className="text-wrapper-8">Course Code</div>
                  <div className="text-wrapper-9">Course Title</div>
                  <div className="text-wrapper-10">Credit Unit</div>
                </div>

                <div className="frame-13">
                  <table>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.courseCode} className="frame-14">
                          <td className="text-wrapper-10">
                            {course.courseCode}
                          </td>
                          <td className="text-wrapper-11">
                            {course.courseTitle}
                          </td>
                          <td className="text-wrapper-11">
                            {course.creditUnit}
                          </td>
                          <td>
                            <button type="submit" className="text-wrapper-13">
                              Enroll
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
  );
}

export default StudentDashboard;
