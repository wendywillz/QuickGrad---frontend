import "./setExamStyle.css";
import addButton from "../../assets/add_button_logo copy.png";
import nextArrow from "../../assets/next_section_arrow copy.png";
import SideBar from "../../components/sidebar/sideBar";
import { Link } from "react-router-dom";
import { useEffect, useState, FormEvent } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Question {
  type: "regular" | "theory";
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
}

interface Section {
  questions: Question[];
}

function SetExamPage() {
  // const navigate = useNavigate();
  // const fetchDashboardDisplay = () => {
  //   axios
  //     .get(`http://localhost:3000/students/dashboard`)
  //     .then((response) => {
  //       const result = response;
  //       if (result.status === 200 && result.data.UnauthorizedError) {
  //         navigate("/lecturers/signin");
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // };
  // fetchDashboardDisplay();
  // const increaseCount = () => {
  //   return count++;
  // };
  const [courseDetails, setCourseDetails] = useState([]);
  useEffect(() => {
    fetchCourseDetails();
  }, []);

  const fetchCourseDetails = async () => {
    const res = await axios.get("http://localhost:3000/get-courses");
    setCourseDetails(res.data.coureDetailFromServer);
  };

  const [sections, setSections] = useState<Section[]>([
    { questions: [] },
    { questions: [] },
  ]);

  const handleQuestionChange = (
    sectionIndex: number,
    questionIndex: number,
    field: keyof Question,
    value: string
  ) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions[questionIndex] = {
      ...updatedSections[sectionIndex].questions[questionIndex],
      [field]: value,
    };
    setSections(updatedSections);
  };

  const addQuestion = (sectionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions.push({
      type: "regular",
      questionText: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
    });
    setSections(updatedSections);
  };

  const addTheoryQuestion = (sectionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions.push({
      type: "theory",
      questionText: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
    });
    setSections(updatedSections);
  };

  const removeQuestion = (sectionIndex: number, questionIndex: number) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].questions.splice(questionIndex, 1);
    setSections(updatedSections);
  };

  const [totalScore, setTotalScore] = useState("");
  const [examDuration, setexamDuration] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [session, setSession] = useState("");
  const [faculty, setFaculty] = useState("");
  const [examDate, setExamDate] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  console.log("0", session);
  console.log("1", examDuration);
  console.log("2", courseCode);
  console.log("3", semester);
  console.log("4", courseTitle);
  console.log("5", faculty);
  console.log("6", department);
  console.log("7", examDate);
  console.log("8", totalScore);
  const submitQuestions = async (e: FormEvent) => {
    e.preventDefault();
    const assembledQuestions = sections.reduce(
      (allQuestions, section) => allQuestions.concat(section.questions),
      [] as Question[]
    );

    console.log("Submitted Questions:", assembledQuestions);

    // Your axios post request here
    try {
      const res = await axios.post("http://localhost:3000/lecturers/set-exam", {
        examDuration,
        courseCode,
        semester,
        session,
        courseTitle,
        faculty,
        lecturerId: "0ff0ba86-eb5d-40b7-bfbe-f4e549284e1b",
        department,
        examDate,
        totalScore: Number(totalScore),
        questions: assembledQuestions,
      });

      if (res.status === 200) {
        console.log("Exam created successfully");
      } else {
        console.log("res", res);
      }
    } catch (error) {
      console.error("Error submitting questions:", error);
    }
  };
  return (
    <>
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
      <main className="set-exams-page-main-section">
        <div className="set-exams-page-main-section-title-container">
          <h1 className="set-exams-page-main-section-title">Set Exams</h1>
        </div>

        <div className="set-exams-page-all-forms">
          <div className="set-exams-page-top-form">
            <div className="set-exams-page-session-form-container">
              <form className="set-exams-page-session-form">
                <div className="set-exams-page-session-form-row">
                  <div className="set-exams-page-form-label-and-inputs">
                    <label
                      className="set-exams-page-session-form-label"
                      htmlFor="sessionInput"
                    >
                      Session
                    </label>
                    <br />
                    <select
                      className="set-exams-page-session-form-input"
                      name="session"
                      id="sessionInput"
                      value={session}
                      onChange={(e) => setSession(e.target.value)}
                    >
                      <option value="Please select">Please Select</option>
                      <option defaultValue="2022/2023">2022/2023</option>
                    </select>
                  </div>

                  <div className="set-exams-page-form-label-and-inputs">
                    <label
                      className="set-exams-page-session-form-label"
                      htmlFor="semesterInput"
                    >
                      Semester
                    </label>
                    <br />
                    <select
                      className="set-exams-page-session-form-input"
                      name="semester"
                      id="semesterInput"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="first semester">First</option>
                      <option value="second semester">Second</option>
                    </select>
                  </div>

                  <div className="set-exams-page-form-label-and-inputs">
                    <label
                      className="set-exams-page-session-form-label"
                      htmlFor="facultyInput"
                    >
                      Faculty
                    </label>
                    <br />
                    <select
                      className="set-exams-page-session-form-input"
                      name="semester"
                      id="semesterInput"
                      value={faculty}
                      onChange={(e) => setFaculty(e.target.value)}
                    >
                      <option value="Please select">Please Select</option>
                      {courseDetails.length > 0 ? (
                        courseDetails.map(
                          (course: Record<string, unknown>, index: number) => (
                            <option
                              value={course.faculty as string}
                              key={index}
                            >
                              {course.faculty as string}
                            </option>
                          )
                        )
                      ) : (
                        <option value="fetching">fetching..</option>
                      )}
                    </select>
                  </div>

                  <div className="set-exams-page-form-label-and-inputs">
                    <label
                      className="set-exams-page-session-form-label"
                      htmlFor="departmentInput"
                    >
                      Department
                    </label>
                    <br />
                    <select
                      className="set-exams-page-session-form-input"
                      name="semester"
                      id="semesterInput"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    >
                      <option value="Please select">Please Select</option>
                      {courseDetails.length > 0 ? (
                        courseDetails.map(
                          (course: Record<string, unknown>, index: number) => (
                            <option
                              value={course.department as string}
                              key={index}
                            >
                              {course.department as string}
                            </option>
                          )
                        )
                      ) : (
                        <option value="fetching">fetching..</option>
                      )}
                    </select>
                  </div>
                </div>

                <div className="set-exams-page-session-form-row">
                  <div className="set-exams-page-form-label-and-inputs">
                    <label
                      className="set-exams-page-session-form-label"
                      htmlFor="courseCodeInput"
                    >
                      Course Code
                    </label>
                    <br />
                    <select
                      className="set-exams-page-session-form-input"
                      name="semester"
                      id="semesterInput"
                      value={courseCode}
                      onChange={(e) => setCourseCode(e.target.value)}
                    >
                      <option value="Please select">Please Select</option>
                      {courseDetails.length > 0 ? (
                        courseDetails.map(
                          (course: Record<string, unknown>, index: number) => (
                            <option
                              value={course.courseCode as string}
                              key={index}
                            >
                              {course.courseCode as string}
                            </option>
                          )
                        )
                      ) : (
                        <option value="fetching">fetching..</option>
                      )}
                    </select>
                  </div>

                  <div className="set-exams-page-form-label-and-inputs">
                    <label
                      className="set-exams-page-session-form-label"
                      htmlFor="courseTitleInput"
                    >
                      Course Title
                    </label>
                    <br />
                    <select
                      className="set-exams-page-session-form-input"
                      name="semester"
                      id="semesterInput"
                      value={courseTitle}
                      onChange={(e) => setCourseTitle(e.target.value)}
                    >
                      <option value="Please select">Please Select</option>
                      {courseDetails.length > 0 ? (
                        courseDetails.map(
                          (course: Record<string, unknown>, index: number) => (
                            <option
                              value={course.courseTitle as string}
                              key={index}
                            >
                              {course.courseTitle as string}
                            </option>
                          )
                        )
                      ) : (
                        <option value="fetching">fetching..</option>
                      )}
                    </select>
                  </div>

                  <div className="set-exams-page-form-label-and-inputs">
                    <label
                      className="set-exams-page-session-form-label"
                      htmlFor="totalScoreInput"
                    >
                      Total Score
                    </label>
                    <br />
                    <input
                      className="set-exams-page-session-form-input"
                      placeholder="Type Obtainable Score"
                      type="number"
                      id="totalScoreInput"
                      name="totalScore"
                      value={totalScore}
                      onChange={(e) => setTotalScore(e.target.value)}
                    />
                  </div>

                  <div className="set-exams-page-form-label-and-inputs">
                    <label
                      className="set-exams-page-session-form-label"
                      htmlFor="timeAllowedInput"
                    >
                      Time allowed
                    </label>
                    <br />
                    <input
                      className="set-exams-page-session-form-input"
                      placeholder="60 mins"
                      type="text"
                      id="timeAllowedInput"
                      name="timeAllowed"
                      value={examDuration}
                      onChange={(e) => setexamDuration(e.target.value)}
                    />
                  </div>
                </div>

                <div className="set-exams-page-session-form-instruction-row">
                  <input
                    type="datetime-local"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                  />
                  <label
                    className="set-exams-page-session-form-label"
                    htmlFor="instructionsInput"
                  >
                    Instructions
                  </label>{" "}
                  <br />
                  <input
                    className="set-exams-page-session-form-instructions-input"
                    placeholder="Type Instructions"
                    type="text"
                    id="instructionsInput"
                    name="instructions"
                  />
                </div>

                <div className="set-exam-page-session-form-button-container">
                  <button
                    className="set-exam-page-session-form-button"
                    type="submit"
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="set-exams-page-bottom-form">
            <div className="set-exams-page-add-section-button-container">
              <form
                className="set-exams-page-add-section-button-form"
                action="#"
                method="post"
              >
                <button className="set-exams-page-add-section-button">
                  {" "}
                  <img src={addButton} />
                  <span className="set-exams-page-add-section-button-text">
                    {" "}
                    Add Section
                  </span>
                </button>
              </form>
            </div>

            <div className="set-exams-page-questions-section-container">
              <div className="set-exams-page-questions-section-header-and-marks">
                <h1 className="set-exams-page-questions-section-title">
                  Section A{" "}
                  <span className="set-exams-page-questions-section-header-subtitle">
                    (Multiple Choice Question)
                  </span>
                </h1>
                <hr />
                <p className="set-exams-page-questions-section-marks">
                  40 Marks
                </p>
              </div>

              <div className="set-exams-page-questions-form-container">
                <form className="questions-form" onSubmit={submitQuestions}>
                  <div>
                    <h2>Regular Questions</h2>
                    {sections[0].questions.map((question, questionIndex) => (
                      <div key={`regular-${questionIndex}`}>
                        <div className="number-question-input-wrapper">
                          <div className="btn-wrapper">
                            <button
                              className="add-new-question-btn"
                              type="button"
                              onClick={() => removeQuestion(0, questionIndex)}
                            >
                              X
                            </button>
                          </div>
                          <span className="number-question-input-wrapper-number">
                            {questionIndex + 1}
                          </span>
                          <input
                            type="text"
                            placeholder="Question Text"
                            className="objective-input-field"
                            value={question.questionText}
                            onChange={(e) =>
                              handleQuestionChange(
                                0,
                                questionIndex,
                                "questionText",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <div className="options-wrapper">
                          <input
                            type="text"
                            placeholder="Option A"
                            value={question.optionA}
                            onChange={(e) =>
                              handleQuestionChange(
                                0,
                                questionIndex,
                                "optionA",
                                e.target.value
                              )
                            }
                          />
                          <input
                            type="text"
                            placeholder="Option B"
                            value={question.optionB}
                            onChange={(e) =>
                              handleQuestionChange(
                                0,
                                questionIndex,
                                "optionB",
                                e.target.value
                              )
                            }
                          />
                          <input
                            type="text"
                            placeholder="Option C"
                            value={question.optionC}
                            onChange={(e) =>
                              handleQuestionChange(
                                0,
                                questionIndex,
                                "optionC",
                                e.target.value
                              )
                            }
                          />
                          <input
                            type="text"
                            placeholder="Option D"
                            value={question.optionD}
                            onChange={(e) =>
                              handleQuestionChange(
                                0,
                                questionIndex,
                                "optionD",
                                e.target.value
                              )
                            }
                          />
                          <select
                            value={question.correctAnswer}
                            onChange={(e) =>
                              handleQuestionChange(
                                0,
                                questionIndex,
                                "correctAnswer",
                                e.target.value
                              )
                            }
                          >
                            <option
                              value="select correct answer"
                              defaultValue={"select correct answer"}
                            >
                              Select Correct answer
                            </option>
                            <option value={question.optionA}>
                              {question.optionA}
                            </option>
                            <option value={question.optionB}>
                              {question.optionB}
                            </option>
                            <option value={question.optionC}>
                              {question.optionC}
                            </option>
                            <option value={question.optionD}>
                              {question.optionD}
                            </option>
                          </select>
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={() => addQuestion(0)}>
                      Add Question
                    </button>
                  </div>

                  <div className="theory-question-wrapper">
                    <h2>Theory Questions</h2>
                    {sections[1].questions.map((question, questionIndex) => (
                      <div key={`theory-${questionIndex}`}>
                        <div className="number-question-input-wrapper">
                          <span className="number-question-input-wrapper-number">
                            {questionIndex + 1}
                          </span>
                          <input
                            type="text"
                            className="theory-question-input"
                            placeholder="Question Text"
                            value={question.questionText}
                            onChange={(e) =>
                              handleQuestionChange(
                                1,
                                questionIndex,
                                "questionText",
                                e.target.value
                              )
                            }
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Option A"
                          className="theory-question-input-options"
                          value={question.optionA}
                          onChange={(e) =>
                            handleQuestionChange(
                              1,
                              questionIndex,
                              "optionA",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          placeholder="Option B"
                          className="theory-question-input-options"
                          value={question.optionB}
                          onChange={(e) =>
                            handleQuestionChange(
                              1,
                              questionIndex,
                              "optionB",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          placeholder="Option C"
                          className="theory-question-input-options"
                          value={question.optionC}
                          onChange={(e) =>
                            handleQuestionChange(
                              1,
                              questionIndex,
                              "optionC",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          placeholder="Option D"
                          className="theory-question-input-options"
                          value={question.optionD}
                          onChange={(e) =>
                            handleQuestionChange(
                              1,
                              questionIndex,
                              "optionD",
                              e.target.value
                            )
                          }
                        />
                        <input
                          type="text"
                          placeholder="Correct Answer"
                          className="theory-question-input-options"
                          value={question.correctAnswer}
                          onChange={(e) =>
                            handleQuestionChange(
                              1,
                              questionIndex,
                              "correctAnswer",
                              e.target.value
                            )
                          }
                        />
                        <button
                          type="button"
                          onClick={() => removeQuestion(1, questionIndex)}
                        >
                          Remove Question
                        </button>
                      </div>
                    ))}
                    <button type="button" onClick={() => addTheoryQuestion(1)}>
                      Add Theory Question
                    </button>
                  </div>

                  {/* Button to submit questions to the backend */}
                  <button type="submit">Submit Questions</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="set-exams-page-next-section-and-save-button-container">
          <a href="#" className="set-exams-page-next-section-link">
            <span className="set-exams-page-next-section-text">
              Next Section
            </span>
            <img
              src={nextArrow}
              className="set-exams-page-next-section-arrow"
            />
          </a>

          <button className="set-exams-page-save-button">Save</button>
        </div>
      </main>
    </>
  );
}

export default SetExamPage;

//  <div className="hiddenfunction">{increaseCount()}</div>
// <div className="hiddenfunction">{increaseCount()}</div>
