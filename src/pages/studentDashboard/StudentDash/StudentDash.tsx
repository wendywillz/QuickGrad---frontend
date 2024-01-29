import "./StudentDash.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SideBar from "../../../components/sidebar/sideBar";
import Header from "../../../components/header/header";
import BlueHeader from "../../../components/header/blueHeader/blueHeader";

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

const StudentDash = () => {
  const [studentData, setStudentData] = useState<Student | null>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedSemester, setSelectedSemester] = useState<string>("First");


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
  const newUser = studentData?.matricNo || "newUser";
  return (
    <div className="student-dashboard-container">
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

      <div className="student-dashboard-body">
        <Header newUser={newUser} />
        <div className="heading-dashboard">Dashboard</div>

          <BlueHeader
            session="2023/2024/019"
            userDetails={{
              department: "Department of Biochemistry.",
              faculty: "Faculty of Science.",
              university: "Camouflage University.",
              location: "Atlanta, Nigeria.",
            }}
          />

          {courses && (
            <div >
              <div >
                <div >
                  <div className="semester-div-container">
                    <div >Semester:</div>
                    <div className="session-dropdown">
                      <select
                        className="session-button-default"
                        value={selectedSemester}
                        onChange={(e) => setSelectedSemester(e.target.value)}
                      >
                        <option value="First">
                          First
                        </option>
                        <option value="Second">
                          Second
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="session-div-container">
                    <div >Session:</div>
                    <div className="session-dropdown">
                      <select className="session-button-default">
                        <option >2023/2024</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="student-result-table">
                  <div className="student-result-table-header">
                    <div className="student-result-table-header-item">
                      Course Code
                    </div>
                    <div className="student-result-table-header-item">
                      Course Title
                    </div>
                    <div className="student-result-table-header-item">
                      Credit Unit
                    </div>
                  </div>
                  
                  < StudentResultDiv courseCode="BCH 401" courseTitle="Anatomy" creditUnit="3 Units" />
                  < StudentResultDiv courseCode="MAT 201" courseTitle="Geometry" creditUnit="4 Units" />
                  
                </div>
              </div>
            </div>
          )}
        
      </div>
    </div>
  );
};

export default StudentDash;

interface StudentResultDivProps {
  courseCode: string;
  courseTitle: string;
  creditUnit: string;
}

export function StudentResultDiv(props: StudentResultDivProps){
 return (
  <div className="student-result-table-body">
  <p>{props.courseCode}</p>
  <p>{props.courseTitle}</p>
  <p>{props.creditUnit}</p>
  <button className="enroll-button">Enroll</button>
</div>
 )
}