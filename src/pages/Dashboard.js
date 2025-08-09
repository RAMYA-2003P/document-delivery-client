





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';

// function Dashboard({ user }) {
//   return (
//     <div>
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <Container>
//           <Navbar.Brand> Dashboard</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link as={Link} to="/request-new">Request New</Nav.Link>
//               <Nav.Link as={Link} to="/all-requests">All Requests</Nav.Link>
//             </Nav>
//             <Nav className="ms-auto">
//               <Navbar.Text className="me-3">
//                 Signed in as: <strong>{user.name}</strong>
//               </Navbar.Text>
//               <LogoutButton />
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <Container className="mt-4">
//         <h2>Welcome, {user.name}!</h2>
//         <p>Use the navigation above to manage your article requests.</p>
//       </Container>
//     </div>
//   );
// }

// function LogoutButton() {
//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.location.href = '/login';
//   };

//   return <Button variant="outline-light" onClick={handleLogout}>Logout</Button>;
// }

// export default Dashboard;



import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Card, Row, Col } from 'react-bootstrap';
import './Dashboard.css'; // We'll create this CSS file

function Dashboard({ user }) {
  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <Navbar bg="primary" variant="dark" expand="lg" className="dashboard-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <i className="fas fa-book-open me-2"></i>Article Request System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/request-new" className="nav-link">
                <i className="fas fa-plus-circle me-1"></i>Request New
              </Nav.Link>
              <Nav.Link as={Link} to="/all-requests" className="nav-link">
                <i className="fas fa-list me-1"></i>All Requests
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Navbar.Text className="me-3 user-info">
                <i className="fas fa-user-circle me-1"></i>
                <strong>{user.name}</strong>
              </Navbar.Text>
              <LogoutButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="dashboard-content">
        <Row className="mb-4">
          <Col>
            <h2 className="welcome-heading">
              <i className="fas fa-home me-2"></i>Welcome, {user.name}!
            </h2>
            <p className="welcome-text">Manage your article requests efficiently using the dashboard.</p>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="mb-4">
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-plus-circle text-primary me-2"></i>
                  New Request
                </Card.Title>
                <Card.Text>
                  Submit a new article request for processing. Fill out the form with article details.
                </Card.Text>
                <Button 
                  as={Link} 
                  to="/request-new" 
                  variant="primary" 
                  className="card-button"
                >
                  Create Request
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card className="dashboard-card h-100">
              <Card.Body>
                <Card.Title>
                  <i className="fas fa-list text-success me-2"></i>
                  View Requests
                </Card.Title>
                <Card.Text>
                  View all your submitted requests and check their current status.
                </Card.Text>
                <Button 
                  as={Link} 
                  to="/all-requests" 
                  variant="success" 
                  className="card-button"
                >
                  View All
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function LogoutButton() {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Button 
      variant="outline-light" 
      onClick={handleLogout}
      className="logout-button"
    >
      <i className="fas fa-sign-out-alt me-1"></i>Logout
    </Button>
  );
}

export default Dashboard;