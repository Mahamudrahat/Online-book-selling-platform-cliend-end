import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../components/shared/Loader";

const PrivateRoute = ({ children }) => {
  //const navigate = useNavigate();
  const { user,loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);
  
  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }
  else{
    return <Navigate state={location.pathname} to="/login" />;
  }
  
};

export default PrivateRoute;