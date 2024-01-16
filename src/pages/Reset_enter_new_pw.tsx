import '../styles/Reset_enter_new_pw.css';


const ResetEnterNewPasswordPage= () => {
  return (

<>
    <div className="header">
                 <img src ='/quick.png' alt="logo png"/>
                 
            </div>
    <div className="container">
          
        <div className = "form-container">
                <h1 className="form-title">Reset Password</h1>

                 <form className = "form">
                      <div className="form-inner-container">
                        
                            <label htmlFor="password">New Password</label>
                            <input type="password" placeholder="Enter your new Password" name="Enter your new password" id="password" required/>
 
                                <br/>
                             <label htmlFor="confirm-password">Confirm Password</label>
                             <input type="password" placeholder="Confirm New Password" name="confirm-password" id="confirm-password" required/>
 
                             <button className="btn">Reset Password</button>
                             
                      </div>
                </form>
        </div>
    </div>
</>
  );
}
 
export default ResetEnterNewPasswordPage;
 