import '../styles/Dashboard.css'
import '../assets/menu-board.png'
function LecturerDashboard () {
    return (
        <div className="dashboard">
          <section className="frame">
            <div className="frame-2">
              <div className="notification-wrapper">
                <img className="img" src="https://c.animaapp.com/IX1zE9E9/img/notification.svg" />
              </div>
              <div className="text-wrapper">Welcome, 22/23/07/019</div>
            </div>
          </section>
          {/* Sidebar */}
          <div className="text-wrapper-2">Dashboard</div>
          <section className="side-bar-default">
            <div className="logo">
              <div className="vuesax-bulk-award-wrapper">
                <img className="img-2" src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-award.svg" />
              </div>
              <div className="text-wrapper-3">QuickGrade</div>
            </div>
            <div className="divider-wrapper">
              <div className="divider"><img className="vector" src="https://c.animaapp.com/IX1zE9E9/img/vector-2.svg" /></div>
            </div>
            <div className="frame-3">
              <div className="frame-3">
                <div className="text-wrapper-4">Overview</div>
                <div className="frame-4">
                  <div className="feature">
                    <img className="img-2" src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-menu.svg" />
                    <div className="text-wrapper-5">Dashboard</div>
                  </div>
                  <div className="feature-2">
                    <img className="img-2"  src="menu-board.png" />
                    <a href="#" className="text-wrapper-6">Set Exams</a>
                  </div>
                  <div className="feature-2">
                    <img className="img-2" src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-sort.svg" />
                    <a href="#" className="text-wrapper-6">Grade Exams</a>
                  </div>
                  <div className="feature-2">
                    <img className="img-2" src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-sort.svg" />
                    <a href="#" className="text-wrapper-6">Results</a>
                  </div>
                </div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-4">Others</div>
                <div className="frame-4">
                  <div className="feature-2">
                    <img className="img-2" src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-setting-2.svg" />
                    <a href="#" className="text-wrapper-6">Settings</a>
                  </div>
                  <div className="feature-2">
                    <img className="img-2" src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-logout.svg" />
                    <a href="#" className="text-wrapper-6">Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
         {/* Main content */}
          <main className="frame-5">
            <div className="frame-wrapper">
              <div className="frame-6">
                <div className="text-wrapper-2">Dashboard</div>
                <p className="lecturer">
                  Lecturer (Dr.), Department of Chemistry.<br />Faculty of Science.<br />Camouflage University. <br />Atlanta, Nigeria.
                </p>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="frame-7">
                <div className="frame-8">
                  <div className="frame-9">
                    <div className="text">2022/2023 : Second Semester</div> 
                  </div>

                  <div className="text-wrapper-8">Course Examination TimeTable</div>
                  
                </div>
                <div className="frame-10">
                  <div className="frame-11">
                    <div className="frame-12">
                      <div className="text-wrapper-8">Course Code</div>
                      <div className="text-wrapper-8">Department</div>
                      <div className="text-wrapper-8">Date/Time</div>
                      <div className="text-wrapper-8">Venue</div>
                      <div className="text-wrapper-8">Registered</div>
                      <div className="text-wrapper-8">Action</div>
                    </div>
                    <div className="frame-13">
                      <div className="frame-14">
                        <div className="text-wrapper-10">CE 522</div>
                        <div className="text-wrapper-10">Chemical Engineering</div>
                        <div className="text-wrapper-10">10 Aug, 2013 / 2:10pm</div>
                        <div className="text-wrapper-10">Campus E-center</div>
                        <div className="text-wrapper-10">211</div>
                        <div><button className="text-wrapper-12">Set Action</button></div>
                      </div>
                      <div className="frame-14">
                        <div className="text-wrapper-10">CE 522</div>
                        <div className="text-wrapper-10">Chemical Engineering</div>
                        <div className="text-wrapper-10">10 Aug, 2013 / 2:10pm</div>
                        <div className="text-wrapper-10">Campus E-center</div>
                        <div className="text-wrapper-10">211</div>
                        <div><button className="text-wrapper-12">Set Action</button></div>
                      </div>
                      <div className="frame-14">
                        <div className="text-wrapper-10">CE 522</div>
                        <div className="text-wrapper-10">Chemical Engineering</div>
                        <div className="text-wrapper-10">10 Aug, 2013 / 2:10pm</div>
                        <div className="text-wrapper-10">Campus E-center</div>
                        <div className="text-wrapper-10">211</div>
                        <div><button className="text-wrapper-12">Set Action</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
      </div>
    )
  }

export default LecturerDashboard;