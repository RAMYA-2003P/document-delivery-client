// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated } = useSelector((state) => state.auth);
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;


import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;