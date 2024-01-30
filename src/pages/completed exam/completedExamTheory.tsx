import { Link } from 'react-router-dom';
import SideBar from '../../components/sidebar/sideBar';
import './completedExamTheory.css';

const CompletedExamTheory = () => {
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

      <div className="header">
        <p>
          Results/ <span className='header-span'>CE 522</span>
        </p>
        <a className='header-anchor' href="/">&larr;Go Back</a>
      </div>

      <div className="main-container">
        <div className="div-for-first-form">
          <form action="/" className="first-form">
             
             <div>
                <label className='first-form-label' htmlFor="session">Session</label><br />
                <input type="text" value="2022/2023" className="input-form-1" />
            </div>

            <div>
                <label className='first-form-label' htmlFor="Semester">Semester</label><br />
                <input type="text" value="Second" className="input-form-1" />
            </div>

            <div>
                <label className='first-form-label' htmlFor="Faculty">Faculty</label><br />
                <input type="text" value="Science" className="input-form-1" />
            </div>

            <div>
                <label className='first-form-label' htmlFor="Department">Department</label><br />
                <input type="text" value="Biochemistry" className="input-form-1" />
            </div>

            <div>
                <label className='first-form-label' htmlFor="Course Code">Course Code</label><br />
                <input type="text" value="BCH 208" className="input-form-1" />
            </div>

            <div>
                <label className='first-form-label' htmlFor="Course Title">Course Title</label><br />
                <input type="text" value="Enzymology" className="input-form-1" />
            </div>

            <div>
                <label className='first-form-label' htmlFor="Total Score">Total Score</label><br />
                <input type="text" value="70" className="input-form-1" />
            </div>

            <div>
                <label className='first-form-label' htmlFor="Time allowed">Time Allowed</label><br />
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
          <p className='div-student-id-section-p'>
            ID: <span>20/21/03/051</span>
          </p>
          <div className="sub-div">
            <p className='sub-div-p'>Total score</p>
            <div className="green-circle">62</div>
          </div>
        </div>

        <div className="div-for-section-B">
          <p id="section-p">
            Section B <span className='section-span'>(Fill-in-the-blank and theory questions)</span>
            <hr className='hr' />
          </p>

          <p id="section-p2">30 Marks</p>
          <div className="section-score">
            <p className='section-score-p'>Section score</p>
            <div className="brown-circle">24</div>
          </div>
        </div>

        <form action="/" className="second-formB">
           <label htmlFor="one"><p className='second-formB-p'>1. Define Chemical Engineering.</p></label>
            <textarea className='textarea' name="one">
            Students often face difficulties in accessing their results on time and also knowing how they did and what they got right or wrong. Universities also face challenges in managing large volumes of data because of the number of students and delivering results in a timely and efficient manner.
            </textarea>
        </form>

        <div className="anchor-divB">
          <a href="/" id="first-anchor">
            &larr; Previous Section
          </a>
          <button className='button'>1</button>
          <button className='button'>2</button>
          <button className='button'>3</button>
          <button className='button'>4</button>
          <button className='button'>5</button>
          <button className='button' id="button1">6</button>
          <a href="/" id="second-anchorB">
            Next Section &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompletedExamTheory;
