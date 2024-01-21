import { ReactNode } from "react";
import "./sideBar.css";

interface SideBarChildren {
  children: {
    sidebarElement: ReactNode;
  };
}
function SideBar({ children }: SideBarChildren) {
  const { sidebarElement } = children;

  return (
    <section className="side-bar-default">
      <div className="logo">
        <div className="vuesax-bulk-award-wrapper">
          <img
            className="img-2"
            src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-award.svg"
          />
        </div>
        <div className="text-wrapper-3">QuickGrade</div>
      </div>
      <div className="divider-wrapper">
        <div className="divider">
          <img
            className="vector"
            src="https://c.animaapp.com/IX1zE9E9/img/vector-2.svg"
          />
        </div>
      </div>
      <div className="frame-3">
        <div className="frame-3">
          <div className="text-wrapper-4">Overview</div>
          <div className="frame-4">{sidebarElement}</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-4">Others</div>
          <div className="frame-4">
            <div className="feature-2">
              <img
                className="img-2"
                src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-setting-2.svg"
              />
              <a href="#" className="text-wrapper-6">
                Settings
              </a>
            </div>
            <div className="feature-2">
              <img
                className="img-2"
                src="https://c.animaapp.com/IX1zE9E9/img/vuesax-bulk-logout.svg"
              />
              <a href="#" className="text-wrapper-6">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBar;
