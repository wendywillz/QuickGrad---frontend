import { Link, useParams } from "react-router-dom";
import SideBar from "../../components/sidebar/sideBar";
import "./TakeExamOBJ.css";
import { useEffect, useState } from "react";
import axios from "axios";
interface Question {
  questionText: string;
  questionType: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
}
const TakeExamOBJ = () => {
  const { courseCode } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log("courseCode: ", courseCode);
    const res = await axios.get(
      `http://localhost:3000/students/dashboard/take-exams/${courseCode}`,
      {
        withCredentials: true,
      }
    );

    // checking the response
    if (
      res.status === 200 &&
      (res.data.questionNotAvailable || res.data.internalServerError)
    ) {
      window.location.reload();
    } else if (res.status === 200 && res.data.questions) {
      setQuestions(res.data.questions);
    }
  }
  return (
    <div className="examContainer">
      <section className="hero">
        <div className="hero-content">
          <img
            className="img"
            src="https://c.animaapp.com/IX1zE9E9/img/notification.svg"
            alt="Notification"
          />
          <div className="text-wrapper">Welcome, 22/23/07/019</div>
        </div>
      </section>

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

      <div className="takeExamTimer">
        <p className="tagBold">TAKE EXAM</p>

        <div className="timer-container">
          <div className="circle-box">
            <div className="timer-circle">
              <p>118</p>
            </div>
            <div className="dot">
              <p>:</p>
            </div>
            <div className="timer-circle">
              <p>32</p>
            </div>
          </div>
          <div className="minute-seconds">
            <p>Minutes</p>
            <p>Seconds</p>
          </div>
        </div>
      </div>

      {questions && (
        <div className="main-container">
          <form className="take-exam-container">
            <div className="div-for-first-form">
              <div className="first-form">
                <div>
                  <label htmlFor="session">Session</label>
                  <br />
                  <input
                    type="text"
                    value="2022/2023"
                    className="input-form-1"
                  />
                </div>

                <div>
                  <label htmlFor="Semester">Semester</label>
                  <br />
                  <input type="text" value="Second" className="input-form-1" />
                </div>

                <div>
                  <label htmlFor="Faculty">Faculty</label>
                  <br />
                  <input type="text" value="Science" className="input-form-1" />
                </div>

                <div>
                  <label htmlFor="Department">Department</label>
                  <br />
                  <input
                    type="text"
                    value="Biochemistry"
                    className="input-form-1"
                  />
                </div>

                <div>
                  <label htmlFor="Course Code">Course Code</label>
                  <br />
                  <input type="text" value="BCH 208" className="input-form-1" />
                </div>

                <div>
                  <label htmlFor="Course Title">Course Title</label>
                  <br />
                  <input
                    type="text"
                    value="Enzymology"
                    className="input-form-1"
                  />
                </div>

                <div>
                  <label htmlFor="Total Score">Total Score</label>
                  <br />
                  <input type="text" value="70" className="input-form-1" />
                </div>

                <div>
                  <label htmlFor="Time allowed">Time Allowed</label>
                  <br />
                  <input
                    type="text"
                    value="120 Minutes"
                    className="input-form-1"
                  />
                </div>
              </div>

              <div className="lower-part-of-first-form">
                <p>Instructions</p>
                <p className="second-p">
                  1. There are 2 sections. Answer all questions in section A and
                  any 5 questions in section B
                </p>
                <p className="second-p">
                  2. Time allowed is 2 hours, after which the session ends and
                  your exam is automatically submitted.
                </p>
              </div>
            </div>
            <div className="div-student-id-section">
              <p>
                ID: <span>20/21/03/051</span>
              </p>
              <div className="sub-div">
                <p>Total score</p>
                <div className="green-circle"></div>
              </div>
            </div>

            <div className="div-for-section-A">
              <p id="section-p">
                Section A <span> (Multiple choice questions)</span>
                <hr />
              </p>

              <p id="section-p2">40 Marks</p>
              <div className="section-score">
                <p>Section score</p>
                <div className="brown-circle"></div>
              </div>
            </div>
            {questions
              .filter((question) => {
                console.log("question", question);
                return question.questionType === "Objective";
              })
              .map((question, index) => (
                <>
                  <div className="second-form" key={index}>
                    <span>{index}</span>
                    <p>{question.questionText}</p>

                    <label htmlFor="option1">
                      A. <span>{question.optionA}</span>
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        value={question.optionA}
                        className="option"
                      />
                    </label>

                    <label htmlFor="option1">
                      A. <span>{question.optionB}</span>
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        value={question.optionB}
                        className="option"
                      />
                    </label>

                    <label htmlFor="option1">
                      A. <span>{question.optionC}</span>
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        value={question.optionC}
                        className="option"
                      />
                    </label>

                    <label htmlFor="option1">
                      A. <span>{question.optionD}</span>
                      <input
                        type="radio"
                        name="options"
                        id="option1"
                        value={question.optionD}
                        className="option"
                      />
                    </label>
                  </div>
                </>
              ))}

            <div className="anchor-div">
              <a href="./take-exam-obj" id="first-anchor">
                &larr; Previous Section
              </a>
              <button id="button1">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <a href="./take-exam-theory" id="second-anchor">
                Next Section &rarr;
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TakeExamOBJ;
