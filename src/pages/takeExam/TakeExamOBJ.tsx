
import { Link } from 'react-router-dom';
import SideBar from '../../components/sidebar/sideBar';
import './TakeExamOBJ.css';

const TakeExamOBJ = () => {
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

      <div className='takeExamTimer'>
        <p className="tagBold">TAKE EXAM</p>

        <div className="timer-container">
        <div className='circle-box'>
      <div className="timer-circle">
        <p>118</p>
      </div>
      <div className='dot'><p>:</p></div>
      <div className="timer-circle">
        <p>32</p>
      </div>

      </div>
      <div className='minute-seconds'>
        <p>Minutes</p>
        <p>Seconds</p>
      </div>
    </div>
   
    </div>

      <div className="main-container">
        <div className="div-for-first-form">
        <form action="/" className="first-form">
            <div>
                <label htmlFor="session">Session</label><br />
                <input type="text" value="2022/2023" className="input-form-1" />
            </div>

            <div>
                <label htmlFor="Semester">Semester</label><br />
                <input type="text" value="Second" className="input-form-1" />
            </div>

            <div>
                <label htmlFor="Faculty">Faculty</label><br />
                <input type="text" value="Science" className="input-form-1" />
            </div>

            <div>
                <label htmlFor="Department">Department</label><br />
                <input type="text" value="Biochemistry" className="input-form-1" />
            </div>

            <div>
                <label htmlFor="Course Code">Course Code</label><br />
                <input type="text" value="BCH 208" className="input-form-1" />
            </div>

            <div>
                <label htmlFor="Course Title">Course Title</label><br />
                <input type="text" value="Enzymology" className="input-form-1" />
            </div>

            <div>
                <label htmlFor="Total Score">Total Score</label><br />
                <input type="text" value="70" className="input-form-1" />
            </div>

            <div>
                <label htmlFor="Time allowed">Time Allowed</label><br />
                <input type="text" value="120 Minutes" className="input-form-1" />
            </div>
        </form>

          <div className="lower-part-of-first-form">
            <p>Instructions</p>
            <p className="second-p">
              1. There are 2 sections. Answer all questions in section A and any 5 questions in section B
            </p>
            <p className="second-p">
              2. Time allowed is 2 hours, after which the session ends and your exam is automatically submitted.
            </p>
          </div>
        </div>
        <div className="div-student-id-section">
          <p>ID: <span>20/21/03/051</span></p>
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
            <p>
              Section score 
            </p>
            <div className="brown-circle"></div>
          </div>
        </div>

        <form action="/" className="second-form">
            <p>1. What does CE stand for?</p>
            
            <label htmlFor="option1">
                A. <span>Option 1</span>
                <input type="radio" name="options" id="option1" className="option"/>
            </label>
            
            <label htmlFor="option2">
                B. <span>Option 2</span>
                <input type="radio" name="options" id="option2" className="option"/>
            </label>
            
            <label htmlFor="option3">
                C. <span>Option 3</span>
                <input type="radio" name="options" id="option3" className="option"/>
            </label>
            
            <label htmlFor="option4">
                D. <span>Option 4</span>
                <input type="radio" name="options" id="option4" className="option"/>
            </label>
        </form>
    
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
      </div>
    </div>
  );
};

export default TakeExamOBJ;
