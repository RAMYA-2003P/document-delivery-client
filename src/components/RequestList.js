// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Alert, Spinner, Container, Row, Col, Card } from 'react-bootstrap';
// import RequestItem from './RequestItem';
// import { fetchUserRequests } from '../services/api';
// import { Button } from 'react-bootstrap'; 

// const RequestList = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const authState = useSelector((state) => state?.auth?.user);

//   useEffect(() => {
//     const getUserRequests = async () => {
//       try {
//         if (authState?.email) {
//           const data = await fetchUserRequests(authState.email);
//           setRequests(data);
//         }
//       } catch (err) {
//         setError(err.message || 'Failed to fetch requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getUserRequests();
//   }, [authState]);

//   const refreshRequests = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchUserRequests(authState.email);
//       setRequests(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center my-5">
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//         <p>Loading your requests...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <Alert variant="danger" className="my-4">
//         Error: {error}
//       </Alert>
//     );
//   }

//   if (requests.length === 0) {
//     return (
//       <Alert variant="info" className="my-4">
//         You haven't made any article requests yet.
//       </Alert>
//     );
//   }

//   return (
//     <Container className="my-4">
//       <Row className="mb-3">
//         <Col>
//           <div className="d-flex justify-content-between align-items-center">
//             <h3>Your Article Requests</h3>
//             <Button 
//               variant="outline-primary" 
//               size="sm" 
//               onClick={refreshRequests}
//               disabled={loading}
//             >
//               Refresh
//             </Button>
//           </div>
//         </Col>
//       </Row>
      
//       <Card>
//         <Card.Body className="p-0">
//           {requests.map((request) => (
//             <RequestItem key={request._id} request={request} />
//           ))}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default RequestList;








// import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Alert, Spinner, Container, Row, Col, Card } from 'react-bootstrap';
// import RequestItem from './RequestItem';
// import { fetchUserRequests } from '../services/api';
// import { Button } from 'react-bootstrap'; 

// const RequestList = ({ refreshTrigger }) => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const authState = useSelector((state) => state?.auth?.user);

//   useEffect(() => {
//     const getUserRequests = async () => {
//       try {
//         if (authState?.email) {
//           const data = await fetchUserRequests(authState.email);
//           setRequests(data);
//         }
//       } catch (err) {
//         setError(err.message || 'Failed to fetch requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     getUserRequests();
//   }, [authState, refreshTrigger]);

//   const refreshRequests = async () => {
//     setLoading(true);
//     try {
//       const data = await fetchUserRequests(authState.email);
//       setRequests(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center my-5">
//         <Spinner animation="border" role="status">
//           <span className="visually-hidden">Loading...</span>
//         </Spinner>
//         <p>Loading your requests...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <Alert variant="danger" className="my-4">
//         Error: {error}
//       </Alert>
//     );
//   }

//   if (requests.length === 0) {
//     return (
//       <Alert variant="info" className="my-4">
//         You haven't made any article requests yet.
//       </Alert>
//     );
//   }

//   return (
//     <Container className="my-4">
//       <Row className="mb-3">
//         <Col>
//           <div className="d-flex justify-content-between align-items-center">
//             <h3>Your Article Requests</h3>
//             <Button 
//               variant="outline-primary" 
//               size="sm" 
//               onClick={refreshRequests}
//               disabled={loading}
//             >
//               Refresh
//             </Button>
//           </div>
//         </Col>
//       </Row>
      
//       <Card>
//         <Card.Body className="p-0">
//           {requests.map((request) => (
//             <RequestItem key={request._id} request={request} />
//           ))}
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default RequestList;




// import React, { useEffect, useState } from 'react';
// import { Table, Spinner, Alert } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// import { fetchUserRequests, downloadArticle } from '../api/api';

// const RequestList = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const authState = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!authState?.email) {
//         setError('User email not found. Please log in again.');
//         return;
//       }

//       try {
//         setLoading(true);
//         const data = await fetchUserRequests(authState.email);
//         setRequests(data);
//       } catch (err) {
//         setError('Failed to load article requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [authState?.email]);

//   const handleDownload = async (id) => {
//     try {
//       const response = await downloadArticle(id);
//       const disposition = response.headers['content-disposition'];
//       const filename = disposition?.split('filename=')[1]?.replace(/"/g, '') || 'article.pdf';
//       const blob = new Blob([response.data], { type: response.headers['content-type'] });
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = filename;
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//     } catch (err) {
//       alert('Download failed.');
//     }
//   };

//   if (loading) return <div className="text-center mt-4"><Spinner animation="border" /></div>;

//   return (
//     <div className="container mt-4">
//       <h4>Your Article Requests</h4>
//       {error && <Alert variant="danger">{error}</Alert>}

//       {requests.length === 0 ? (
//         <p>No article requests found.</p>
//       ) : (
//         <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Status</th>
//               <th>Requested On</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.status}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   {req.status === 'Completed' && req.articleFile ? (
//                     <button
//                       onClick={() => handleDownload(req._id)}
//                       className="btn btn-success btn-sm"
//                     >
//                       Download
//                     </button>
//                   ) : (
//                     <span className="text-muted">Not available</span>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// };

// export default RequestList;



// import React, { useEffect, useState } from 'react';
// import { fetchUserRequests } from '../api/api';

// const RequestList = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const loadRequests = async () => {
//       try {
//         const data = await fetchUserRequests();
//         setRequests(data);
//       } catch (err) {
//         setError('Failed to load requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadRequests();
//   }, []);

//   if (loading) return <p>Loading requests...</p>;
//   if (error) return <p className="text-danger">{error}</p>;

//   return (
//     <div className="container mt-4" style={{ maxWidth: '700px' }}>
//       <h4>Your Article Requests</h4>
//       {requests.length === 0 ? (
//         <p>No requests found.</p>
//       ) : (
//         <table className="table table-bordered table-striped">
//           <thead>
//             <tr>
//               <th>Article Title</th>
//               <th>Status</th>
//               <th>Requested At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.status}</td>
//                 <td>{new Date(req.requestedAt).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default RequestList;



// import React from 'react';

// function RequestList({ user }) {
//   if (!user) return <p>Please login to view requests.</p>;

//   return (
//     <div>
//       <h2>All Requests</h2>
//       {/* Add request list table here */}
//       <p>Requests for {user.name}</p>
//     </div>
//   );
// }

// export default RequestList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('http://localhost:5000/api/article-requests/my-requests', {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setRequests(res.data);
//       } catch (err) {
//         setError(err.response?.data?.message || 'Failed to fetch requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   return (
//     <div className="container mt-4" style={{ maxWidth: '700px' }}>
//       <h3 className="mb-4">My Article Requests</h3>

//       {loading && <div>Loading requests...</div>}

//       {error && (
//         <div className="alert alert-danger" role="alert">
//           {error}
//         </div>
//       )}

//       {!loading && requests.length === 0 && <div>No requests found.</div>}

//       {!loading && requests.length > 0 && (
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Article Title</th>
//               <th>Department</th>
//               <th>Status</th>
//               <th>Requested On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.department}</td>
//                 <td>{req.status || 'Pending'}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AllRequests;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('http://localhost:5000/api/article-requests/all-requests', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setRequests(res.data);
//       } catch (err) {
//         setError('Failed to fetch requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="container mt-4">
//       <h4>My Article Requests</h4>
//       {requests.length === 0 ? (
//         <p>No requests found.</p>
//       ) : (
//         <table className="table table-striped">
//           <thead>
//             <tr>
//                <th>Name</th>
//               <th>Title</th>
//               <th>Department</th>
//               <th>Date</th>

//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.department}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AllRequests;









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const token = localStorage.getItem('token');
// //         const res = await axios.get('http://localhost:5000/api/article-requests/all-requests', {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //         });
// const res = await axios.get('http://localhost:5000/api/article-requests/all-requests', {
//   headers: { Authorization: `Bearer ${token}` },
// });
//         setRequests(res.data);
//       } catch (err) {
//         setError('Failed to fetch requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="container mt-4">
//       <h4>All Article Requests</h4>
//       {requests.length === 0 ? (
//         <p>No requests found.</p>
//       ) : (
//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th>Email</th>
//               <th>PRN</th>
//               <th>Department</th>
//               <th>Article Title</th>
//               <th>Author(s)</th>
//               <th>Date</th>
//              <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.email}</td>
//                 <td>{req.prn}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                  <td>{req.status || 'Pending'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AllRequests;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('http://localhost:5000/api/article-requests/all-requests', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRequests(res.data);
//       } catch (err) {
//         setError('Failed to fetch requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests(); // initial fetch

//     const interval = setInterval(fetchRequests, 10000); // fetch every 10s
//     return () => clearInterval(interval); // cleanup
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="container mt-4">
//       <h4>All Article Requests</h4>
//       {requests.length === 0 ? (
//         <p>No requests found.</p>
//       ) : (
//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th>Email</th>
//               <th>PRN</th>
//               <th>Department</th>
//               <th>Article Title</th>
//               <th>Author(s)</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.email}</td>
//                 <td>{req.prn}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                 <td>{req.status || 'Pending'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AllRequests;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AllRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('http://localhost:5000/api/article-requests/my-requests', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRequests(res.data);
//       } catch (err) {
//         setError('Failed to fetch requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests(); // initial fetch

//     const interval = setInterval(fetchRequests, 10000); // auto-refresh every 10 seconds
//     return () => clearInterval(interval); // cleanup on unmount
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="container mt-4">
//       <h4>All Article Requests</h4>
//       {requests.length === 0 ? (
//         <p>No requests found.</p>
//       ) : (
//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th>Email</th>
//               <th>PRN</th>
//               <th>Department</th>
//               <th>Article Title</th>
//               <th>Author(s)</th>
//               <th>Date</th>
//               <th>Status</th>
//               <th>Download</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.email}</td>
//                 <td>{req.prn}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                 <td>{req.status || 'Pending'}</td>
//                 <td>
//                   {req.articleFile ? (
//                     <a
//                       href={`http://localhost:5000/uploads/${req.articleFile}`}
//                       download
//                     >
//                       Download
//                     </a>
//                   ) : (
//                     'Not Available'
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AllRequests;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, Badge, Spinner, Alert, Button } from 'react-bootstrap';
import { Download, Clock, CheckCircle, XCircle, AlertCircle } from 'react-feather';
import './AllRequests.css';

const AllRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshCount, setRefreshCount] = useState(0);

  const fetchRequests = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/article-requests/my-requests', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRequests(res.data);
      setRefreshCount(prev => prev + 1);
    } catch (err) {
      setError('Failed to fetch requests. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests(); // initial fetch

    const interval = setInterval(fetchRequests, 10000); // auto-refresh every 10 seconds
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <Badge bg="success" className="status-badge"><CheckCircle size={14} className="me-1" /> Approved</Badge>;
      case 'Rejected':
        return <Badge bg="danger" className="status-badge"><XCircle size={14} className="me-1" />Not Approved</Badge>;
      case 'Completed':
        return <Badge bg="primary" className="status-badge"><CheckCircle size={14} className="me-1" /> Completed</Badge>;
      default:
        return <Badge bg="warning" className="status-badge"><Clock size={14} className="me-1" /> Pending</Badge>;
    }
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-2">Loading your requests...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">
          <AlertCircle className="me-2" size={18} />
          {error}
          <Button variant="link" onClick={fetchRequests} className="p-0 ms-2">
            Retry
          </Button>
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="all-requests-container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="page-title">
          <span className="title-icon">📋</span> My Article Requests
        </h4>
        <div className="refresh-info">
          <small className="text-muted">
            Auto-refreshed <Badge bg="light" text="dark">{refreshCount}</Badge> times
          </small>
          <Button 
            variant="outline-primary" 
            size="sm" 
            onClick={fetchRequests}
            className="ms-2 refresh-button"
            disabled={loading}
          >
            {loading ? 'Refreshing...' : 'Refresh Now'}
          </Button>
        </div>
      </div>

      {requests.length === 0 ? (
        <Alert variant="info" className="no-requests-alert">
          You haven't submitted any article requests yet.
        </Alert>
      ) : (
        <div className="table-responsive">
          <Table striped bordered hover className="requests-table">
            <thead>
              <tr>
                <th>PRN</th>
                <th>Department</th>
                <th>Article Title</th>
                <th>Author(s)</th>
                <th>Request Date</th>
                <th>Status</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((req) => (
                <tr key={req._id} className={`status-${req.status?.toLowerCase()}`}>
                  <td>{req.prn}</td>
                  <td>{req.department}</td>
                  <td className="article-title">{req.articleTitle}</td>
                  <td>{req.authorDetails}</td>
                  <td>
                    <small>{new Date(req.createdAt).toLocaleDateString()}</small>
                    <br />
                    <small className="text-muted">
                      {new Date(req.createdAt).toLocaleTimeString()}
                    </small>
                  </td>
                  <td>{getStatusBadge(req.status)}</td>
                  <td className="text-center">
                    {req.articleFile ? (
                      <Button
                        variant="outline-primary"
                        size="sm"
                        href={`http://localhost:5000/uploads/${req.articleFile}`}
                        download
                        className="download-button"
                      >
                        <Download size={16} className="me-1" /> Download
                      </Button>
                    ) : (
                      <small className="text-muted">Not available</small>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default AllRequests;