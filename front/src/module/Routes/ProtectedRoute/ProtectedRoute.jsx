import { Navigate } from "react-router-dom";
import { useAuth } from "../../common/hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user && window.localStorage.getItem("user") !== null) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
