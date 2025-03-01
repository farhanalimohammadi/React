import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuth } from '../../Redux/Slices/authSlice';

const ProtectedRoute = ({ children }) => {
  const { token } = useSelector(selectAuth);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/users/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;