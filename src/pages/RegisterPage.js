// import { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add registration logic here
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="container my-5" style={{ maxWidth: '500px' }}>
//       <h2>Register</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Register
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default RegisterPage;