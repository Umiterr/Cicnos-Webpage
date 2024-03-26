import React from "react";
import { Route, Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, children }) {
  return loggedIn ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
