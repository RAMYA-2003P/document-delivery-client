// import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { login } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [prn, setPrn] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Simple validation - just check if PRN is entered
//     if (!prn.trim()) {
//       setError('Please enter your registration number');
//       return;
//     }
    
//     dispatch(login(prn));
//     navigate('/dashboard');
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: '500px' }}>
//       <h2 className="mb-4">College Login</h2>
//       {error && <Alert variant="danger">{error}</Alert>}
      
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>PRN/SRN/Staff ID</Form.Label>
//           <Form.Control
//             type="text"
//             value={prn}
//             onChange={(e) => setPrn(e.target.value)}
//             placeholder="Enter your college registration number"
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit" className="w-100">
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default LoginPage;

// import React, { useState } from 'react';
// import { Form, Button, Alert, Spinner } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginSuccess, loginFailure } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [prn, setPrn] = useState('');
//   const [error, setError] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading } = useSelector((state) => state.auth);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!prn.trim()) {
//       setError('Please enter your registration number');
//       return;
//     }

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 500));
      
//       // Validate PRN format (example: minimum 6 characters)
//       if (prn.length < 6) {
//         throw new Error('Invalid registration number format');
//       }

//       dispatch(loginSuccess(prn));
//       navigate('/dashboard');
//     } catch (err) {
//       dispatch(loginFailure(err.message));
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: '500px' }}>
//       <h2 className="mb-4">College Login</h2>
//       {error && <Alert variant="danger">{error}</Alert>}
      
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>PRN/SRN/Staff ID</Form.Label>
//           <Form.Control
//             type="text"
//             value={prn}
//             onChange={(e) => setPrn(e.target.value)}
//             placeholder="Enter your college registration number"
//             required
//             disabled={loading}
//           />
//         </Form.Group>

//         <Button 
//           variant="primary" 
//           type="submit" 
//           className="w-100"
//           disabled={loading}
//         >
//           {loading ? (
//             <Spinner as="span" animation="border" size="sm" />
//           ) : (
//             'Login'
//           )}
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default LoginPage;

// import { loginSuccess, loginFailure } from '../features/authSlice';

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from './features/auth/authSlice';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector(state => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email, password }));
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: '400px' }}>
//       <h2>Login</h2>
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="form-control mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           disabled={loading}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="form-control mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           disabled={loading}
//         />
//         <button className="btn btn-primary w-100" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


// import { login } from '../features/auth/authSlice';
// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email, password }));
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: '400px' }}>
//       <h2>Login</h2>
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="form-control mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           disabled={loading}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="form-control mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           disabled={loading}
//         />
//         <button className="btn btn-primary w-100" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';

function Login({ onLogin }) {
  const [prn, setPrn] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!prn) {
      setError('Please enter your PRN');
      return;
    }

    try {
      const res = await fetch('https://document-delivery-backend-3.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prn }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      // Save token to localStorage and pass user to parent
      localStorage.setItem('token', data.token);
      onLogin(data.user);
    } catch (err) {
      setError('Server error');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>Login with PRN</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter PRN"
          value={prn}
          onChange={(e) => setPrn(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        <button type="submit" style={{ width: '100%', marginTop: 10 }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;














