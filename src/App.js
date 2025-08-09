


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ArticleRequestForm from './components/ArticleRequestForm';
import AllRequests from './components/RequestList';



function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginWrapper user={user} onLogin={setUser} />} />
        <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" replace />} />
        <Route path="/request-new" element={user ? <ArticleRequestForm user={user} /> : <Navigate to="/login" replace />} />
        <Route path="/all-requests" element={user ? <AllRequests user={user} /> : <Navigate to="/login" replace />} />
        <Route path="/" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
      </Routes>
    </Router>
  );
}

function LoginWrapper({ user, onLogin }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return <Login onLogin={onLogin} />;
}

export default App;





// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import ArticleRequestForm from './components/ArticleRequestForm';
// import MyRequests from './components/RequestList';

// function App() {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   const handleLogin = (userData, jwtToken) => {
//     setUser(userData);
//     setToken(jwtToken);
//     localStorage.setItem('token', jwtToken);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem('token');
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login onLogin={handleLogin} />} />
//         <Route path="/dashboard" element={user ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
//         <Route path="/request-new" element={user ? <ArticleRequestForm token={token} /> : <Navigate to="/login" />} />
//         <Route path="/all-requests" element={user ? <MyRequests token={token} /> : <Navigate to="/login" />} />
//         <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
