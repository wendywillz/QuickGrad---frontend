import './Dashboard.css'

function Dashboard () {
    return (
        <div className="dashboard">
        {/* <div className="div"> */}
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
                    <img className="img-2" src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-book-square.svg" />
                    <a href="#" className="text-wrapper-6">Enrolled Courses</a>
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
                <div className="text-wrapper-7">22/23/08/019</div>
                <p className="department-of">
                  Department of Biochemistry.<br />Faculty of Science.<br />Camouflage University. <br />Atlanta, Nigeria.
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
                          <option value="1">First</option>
                          <option value="2">Second</option>
                          <option value="3">Third</option>
                      </select>
                    </div>
                  </div>
                  <div className="frame-9">
                    <div className="text">Session:</div>
                    <select className="button-default">
                      <option className="text-2">2022/2023</option>
                      <option className="text-2">2021/2022</option>
                      <option className="text-2">2020/2021</option>
                    </select>
                  </div>
                </div>
                <div className="frame-10">
                  <div className="frame-11">
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
                        <div><button className="text-wrapper-12">Enroll</button></div>
                      </div>
                      <div className="frame-16">
                        <div className="text-wrapper-10">BCH 201</div>
                        <div className="text-wrapper-11">Nutrition and Diet</div>
                        <div className="text-wrapper-11">4 Units</div>
                        <div ><button className="text-wrapper-13">Enroll</button></div>
                      </div>
                      <div className="frame-18">
                        <div className="text-wrapper-10">BCH 212</div>
                        <div className="text-wrapper-11">Blood &amp; Body Fluids</div>
                        <div className="text-wrapper-11">2 Units</div>
                        <div ><button className="text-wrapper-13">Enroll</button></div>
                      </div>
                      <div className="frame-19">
                        <div className="text-wrapper-10">BCH 121</div>
                        <div className="text-wrapper-11">DNA / RNA Sequence</div>
                        <div className="text-wrapper-11">4 Units</div>
                        <div ><button className="text-wrapper-13">Enroll</button></div>
                      </div>
                      <div className="frame-18">
                        <div className="text-wrapper-10">Chem 212</div>
                        <div className="text-wrapper-11">Organic Chemistry</div>
                        <div className="text-wrapper-11">2 Units</div>
                        <div ><button className="text-wrapper-13">Enroll</button></div>
                      </div>
                      <div className="frame-19">
                        <div className="text-wrapper-10">BCH 233</div>
                        <div className="text-wrapper-11">Pharmacology</div>
                        <div className="text-wrapper-11">4 Units</div>
                        <div><button className="text-wrapper-13">Enroll</button></div>
                      </div>
                      <div className="frame-19">
                        <div className="text-wrapper-10">BCH 205</div>
                        <div className="text-wrapper-11">Cytochromes Reactivity</div>
                        <div className="text-wrapper-11">2 Units</div>
                        <div><button className="text-wrapper-13">Enroll</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        {/* </div> */}
      </div>
    )
  }

  export default Dashboard;