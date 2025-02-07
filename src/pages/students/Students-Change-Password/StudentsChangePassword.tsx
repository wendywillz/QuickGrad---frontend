import "./StudentsChangePassword.css";
import SideBar from "../../../components/sidebar/sideBar";
import { Link } from "react-router-dom";
import { FormEvent } from "react";
import axios from "axios";
import { useState } from "react";
import MainButton from "../../../components/buttons/mainButton";

function StudentsChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate the form fields
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      setError("All fields are required");
      return;
    }

    // Check if new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      setError("New password and confirm new password must match");
      return;
    }

    // API call to update password
    try {
      const res = await axios.put(
        "http://localhost:3000/students/dashboard/change-password",
        {
          newPassword: newPassword,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res.data);

      if (res.status === 200) {
        setSuccessMessage("Password updated successfully");
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
      } else {
        setError("Failed to update password");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setError("Internal Server Error");
    }
  };

  return (
    <>
      <div className="change-password-container">
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
                  <Link
                    to="/students/dashboard/results"
                    className="text-wrapper-6"
                  >
                    Results
                  </Link>
                </div>
              </>
            ),
          }}
        </SideBar>
        <div className="change-password-body">
          <div className="change-password-form">
            <h3>Change Password</h3>
            <form onSubmit={handleFormSubmit}>
              {error && <div className="error-message">{error}</div>}
              {successMessage && (
                <div className="success-message">{successMessage}</div>
              )}

              <div className="change-password-inner-form">
                <div>
                  <label htmlFor="old-password">Old Password</label>
                  <input
                    name="old-password"
                    type="password"
                    placeholder="Enter your old password"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="new-password">New Password</label>
                  <input
                    name="new-password"
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="confirm-new-password">
                    Confirm New Password
                  </label>
                  <input
                    name="confirm-new-password"
                    type="password"
                    placeholder="Confirm your new password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                </div>
              </div>

              <MainButton button_text="Change Password" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentsChangePassword;
