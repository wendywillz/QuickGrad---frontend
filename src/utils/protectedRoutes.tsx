import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";
import jwt from "jsonwebtoken";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  console.log("ProtectedRoute: ", process.env.secret);
  const navigate = useNavigate();
  //   const location = useLocation();
  const secret = process.env.secret ?? "";
  useEffect(() => {
    console.log("ProtectedRoute: ", secret);
    // Check if a valid token is present in localStorage
    const token = localStorage.getItem("token"); // Replace with your actual token key
    if (!token || isTokenExpired(token)) {
      navigate("/students/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to check if the token is expired (you may need to implement your own logic)
  const isTokenExpired = (token: string): boolean => {
    const decoded = jwt.verify(token, secret);
    if (!decoded) {
      return true;
    }
    return false;
  };

  // Render children if the token is valid
  return <>{children}</>;
};

export default ProtectedRoute;
