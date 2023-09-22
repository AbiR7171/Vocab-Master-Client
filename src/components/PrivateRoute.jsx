import React, { useContext } from "react";

import {
  Navigate,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from "../Authentication/Provider/AuthProvider";
import Loader from "./Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <Loader></Loader>
    );
  }

  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
