import { Link } from 'react-router-dom';
import SideBar from '../../components/sidebar/sideBar';
import './completedExamObj.css';

const CompletedExamOBJ = () => {
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

     {/* <div className='sidebar-div'> */}
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

      {/* <div className="main-container"> */}
        <div className="header">
         <p>Results/ <span className='header_span'>BCH 208</span> </p>
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
          <p className='div-student-id-section-p'>ID: <span>20/21/03/051</span></p>
          <div className="sub-div">
            <p className='sub-div-p'>Total score</p>
            <div className="green-circle">62</div>
          </div>
        
        </div>

        <div className="div-for-section-A">
          <p id="section-p">
            Section A <span className='section-span'> (Multiple choice questions)</span>
            <hr className='hr' />
          </p>
         
          <p id="section-p2">40 Marks</p>
          <div className="section-score">
            <p className='section-score-p'>
              Section score 
            </p>
            <div className="brown-circle">38</div>
          </div>
        </div>

        <form action="/" className="second-form">
            <p className='second-form-p'>1. What does CE stand for?</p>
            
            <label className='second-form-label' htmlFor="option1">
                A. <span className='second-form-span'>Option 1</span>
                <input type="radio" name="options" id="option1" className="option"/>
            </label>
            
            <label className='second-form-label' htmlFor="option2">
                B. <span className='second-form-span'>Option 2</span>
                <input type="radio" name="options" id="option2" className="option"/>
            </label>
            
            <label className='second-form-label' htmlFor="option3">
                C. <span className='second-form-span'>Option 3</span>
                <input type="radio" name="options" id="option3" className="option"/>
            </label>
            
            <label className='second-form-label' htmlFor="option4">
                D. <span className='second-form-span'>Option 4</span>
                <input type="radio" name="options" id="option4" className="option" checked/>
            </label>
        </form>
    
        <div className="anchor-div">
          <a href="/" id="first-anchor">
            &larr; Previous Section
          </a>
          <button className='button' id="button1">1</button>
          <button className='button'>2</button>
          <button className='button'>3</button>
          <button className='button'>4</button>
          <button className='button'>5</button>
          <button className='button'>6</button>
          <a href="/" id="second-anchor">
            Next Section &rarr;
          </a>
        </div>
        </div>
      
      </div>
  );
};

export default CompletedExamOBJ;
