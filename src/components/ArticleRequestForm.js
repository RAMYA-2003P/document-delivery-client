


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ArticleRequestForm = ({ user, token }) => {
//   const [formData, setFormData] = useState({
//     userId: "",
//     name: "",
//     email: "",
//     prn: "",
//     department: "",
//     articleTitle: "",
//     authorDetails: "",
//     publicationDetails: "",
//     doi: "",
//     url: "",
//   });

//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (user) {
//       setFormData((prev) => ({
//         ...prev,
//         userId: user._id,
//         name: user.name,
//         email: user.email,
//         prn: user.prn,
//       }));
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     setFormData((f) => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitSuccess(false);
//     setSubmitError(null);
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:5000/api/article-requests", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setSubmitSuccess(true);
//       setFormData((f) => ({
//         ...f,
//         department: "",
//         articleTitle: "",
//         authorDetails: "",
//         publicationDetails: "",
//         doi: "",
//         url: "",
//       }));
//     } catch (err) {
//       setSubmitError(err.response?.data?.error || "Submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600 }}>
//       <h4>Request an Article</h4>

//       {submitSuccess && <div className="alert alert-success">Article request submitted successfully.</div>}
//       {submitError && <div className="alert alert-danger">{submitError}</div>}

//       <form onSubmit={handleSubmit}>
//         <div className="mb-2">
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             readOnly
//           />
//         </div>

//         <div className="mb-2">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             value={formData.email}
//             readOnly
//           />
//         </div>

//         <div className="mb-2">
//           <label>PRN</label>
//           <input
//             type="text"
//             name="prn"
//             className="form-control"
//             value={formData.prn}
//             readOnly
//           />
//         </div>

//         <div className="mb-2">
//           <label>Department *</label>
//           <input
//             type="text"
//             name="department"
//             className="form-control"
//             value={formData.department}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-2">
//           <label>Article Title *</label>
//           <input
//             type="text"
//             name="articleTitle"
//             className="form-control"
//             value={formData.articleTitle}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-2">
//           <label>Author(s)</label>
//           <input
//             type="text"
//             name="authorDetails"
//             className="form-control"
//             value={formData.authorDetails}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-2">
//           <label>Publication Info</label>
//           <input
//             type="text"
//             name="publicationDetails"
//             className="form-control"
//             value={formData.publicationDetails}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-2">
//           <label>DOI</label>
//           <input
//             type="text"
//             name="doi"
//             className="form-control"
//             value={formData.doi}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-2">
//           <label>Article URL</label>
//           <input
//             type="url"
//             name="url"
//             className="form-control"
//             value={formData.url}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? "Submitting..." : "Submit Request"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArticleRequestForm;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ArticleRequestForm = ({ user, token }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     prn: "",
//     department: "",
//     articleTitle: "",
//     authorDetails: "",
//     publicationDetails: "",
//     doi: "",
//     url: "",
//   });

//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (user) {
//       setFormData((prev) => ({
//         ...prev,
//         name: user.name || "",
//         email: user.email || "",
//         prn: user.prn || "",
//       }));
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitSuccess(false);
//     setSubmitError(null);
//     setLoading(true);

//     const payload = { ...formData };
//     console.log("Submitting payload:", payload);

//     try {
//       await axios.post("http://localhost:5000/api/article-requests", payload, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       setSubmitSuccess(true);
//       setFormData((f) => ({
//         ...f,
//         department: "",
//         articleTitle: "",
//         authorDetails: "",
//         publicationDetails: "",
//         doi: "",
//         url: "",
//       }));
//     } catch (err) {
//       setSubmitError(err.response?.data?.error || "Submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600 }}>
//       <h4>Request an Article</h4>

//       {submitSuccess && (
//         <div className="alert alert-success">
//           Article request submitted successfully.
//         </div>
//       )}
//       {submitError && <div className="alert alert-danger">{submitError}</div>}

//       <form onSubmit={handleSubmit}>
//         <div className="mb-2">
//           <label>Name *</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-2">
//           <label>Email *</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-2">
//           <label>PRN *</label>
//           <input
//             type="text"
//             name="prn"
//             className="form-control"
//             value={formData.prn}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-2">
//           <label>Department *</label>
//           <input
//             type="text"
//             name="department"
//             className="form-control"
//             value={formData.department}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-2">
//           <label>Article Title *</label>
//           <input
//             type="text"
//             name="articleTitle"
//             className="form-control"
//             value={formData.articleTitle}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-2">
//           <label>Author(s)</label>
//           <input
//             type="text"
//             name="authorDetails"
//             className="form-control"
//             value={formData.authorDetails}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-2">
//           <label>Publication Info</label>
//           <input
//             type="text"
//             name="publicationDetails"
//             className="form-control"
//             value={formData.publicationDetails}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-2">
//           <label>DOI</label>
//           <input
//             type="text"
//             name="doi"
//             className="form-control"
//             value={formData.doi}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-2">
//           <label>Article URL</label>
//           <input
//             type="url"
//             name="url"
//             className="form-control"
//             value={formData.url}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? "Submitting..." : "Submit Request"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArticleRequestForm;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ArticleRequestForm = ({ user, token }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     prn: "",
//     department: "",
//     articleTitle: "",
//     authorDetails: "",
//     publicationDetails: "",
//     doi: "",
//     url: "",
//   });

//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (user) {
//       setFormData((prev) => ({
//         ...prev,
//         name: user.name || "",
//         email: user.email || "",
//         prn: user.prn || "",
//       }));
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitSuccess(false);
//     setSubmitError(null);
//     setLoading(true);

//     try {
//       await axios.post("http://localhost:5000/api/article-requests", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       setSubmitSuccess(true);
//       setFormData((f) => ({
//         ...f,
//         department: "",
//         articleTitle: "",
//         authorDetails: "",
//         publicationDetails: "",
//         doi: "",
//         url: "",
//       }));
//     } catch (err) {
//       setSubmitError(err.response?.data?.error || "Submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600 }}>
//       <h4>Request an Article</h4>

//       {submitSuccess && (
//         <div className="alert alert-success">
//           Article request submitted successfully.
//         </div>
//       )}
//       {submitError && <div className="alert alert-danger">{submitError}</div>}

//       <form onSubmit={handleSubmit}>
//         <div className="mb-2">
//           <label>Name *</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-2">
//           <label>Email *</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-2">
//           <label>PRN *</label>
//           <input
//             type="text"
//             name="prn"
//             className="form-control"
//             value={formData.prn}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-2">
//           <label>Department *</label>
//           <input
//             type="text"
//             name="department"
//             className="form-control"
//             value={formData.department}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-2">
//           <label>Article Title *</label>
//           <input
//             type="text"
//             name="articleTitle"
//             className="form-control"
//             value={formData.articleTitle}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-2">
//           <label>Author(s)</label>
//           <input
//             type="text"
//             name="authorDetails"
//             className="form-control"
//             value={formData.authorDetails}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label>Publication Info</label>
//           <input
//             type="text"
//             name="publicationDetails"
//             className="form-control"
//             value={formData.publicationDetails}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label>DOI</label>
//           <input
//             type="text"
//             name="doi"
//             className="form-control"
//             value={formData.doi}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-2">
//           <label>Article URL</label>
//           <input
//             type="url"
//             name="url"
//             className="form-control"
//             value={formData.url}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? "Submitting..." : "Submit Request"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArticleRequestForm;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const ArticleRequestForm = () => {
//   const { user, token } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     prn: "",
//     department: "",
//     articleTitle: "",
//     authorDetails: "",
//     publicationDetails: "",
//     doi: "",
//     url: "",
//   });

//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (user) {
//       setFormData((prev) => ({
//         ...prev,
//         name: user.name || "",
//         email: user.email || "",
//         prn: user.prn || "",
//       }));
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitSuccess(false);
//     setSubmitError(null);
//     setLoading(true);
//     try {
//       await axios.post("http://localhost:5000/api/article-requests", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       setSubmitSuccess(true);
//       setFormData({
//         ...formData,
//         department: "",
//         articleTitle: "",
//         authorDetails: "",
//         publicationDetails: "",
//         doi: "",
//         url: "",
//       });
//     } catch (err) {
//       setSubmitError(err.response?.data?.error || "Submission failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "auto" }}>
//       <h4 className="mb-3">Request an Article</h4>

//       {submitSuccess && (
//         <div className="alert alert-success">Article request submitted successfully.</div>
//       )}
//       {submitError && <div className="alert alert-danger">{submitError}</div>}

//       <form onSubmit={handleSubmit}>
//         {[
//           { label: "Name", name: "name", required: true, type: "text" },
//           { label: "Email", name: "email", required: true, type: "email" },
//           { label: "PRN", name: "prn", required: true, type: "text" },
//           { label: "Department", name: "department", required: true, type: "text" },
//           { label: "Article Title", name: "articleTitle", required: true, type: "text" },
//           { label: "Author(s)", name: "authorDetails", type: "text" },
//           { label: "Publication Info", name: "publicationDetails", type: "text" },
//           { label: "DOI", name: "doi", type: "text" },
//           { label: "Article URL", name: "url", type: "text" },
//         ].map((field) => (
//           <div className="mb-3" key={field.name}>
//             <label className="form-label">{field.label}{field.required && " *"}</label>
//             <input
//               type={field.type}
//               name={field.name}
//               className="form-control"
//               value={formData[field.name]}
//               onChange={handleChange}
//               required={field.required}
//             />
//           </div>
//         ))}

//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? "Submitting..." : "Submit Request"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArticleRequestForm;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';

// const ArticleRequestForm = () => {
//   const { user, token } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     department: '',
//     articleTitle: '',
//     authorDetails: '',
//     publicationDetails: '',
//     doi: '',
//     url: '',
//   });

//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitSuccess(false);
//     setSubmitError(null);
//     setLoading(true);
//     try {
//       await axios.post(
//         'http://localhost:5000/api/article-requests',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       setSubmitSuccess(true);
//       setFormData({
//         department: '',
//         articleTitle: '',
//         authorDetails: '',
//         publicationDetails: '',
//         doi: '',
//         url: '',
//       });
//     } catch (err) {
//       setSubmitError(err.response?.data?.error || 'Submission failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: 'auto' }}>
//       <h4 className="mb-3">Request an Article</h4>

//       {submitSuccess && (
//         <div className="alert alert-success">
//           Article request submitted successfully.
//         </div>
//       )}
//       {submitError && <div className="alert alert-danger">{submitError}</div>}

//       <form onSubmit={handleSubmit}>
//         {/* Show user info as read-only */}
//         <div className="mb-3">
//           <label className="form-label">Name *</label>
//           <input
//             type="text"
//             name="name"
//             className="form-control"
//             value={user?.name || ''}
//             readOnly
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Email *</label>
//           <input
//             type="email"
//             name="email"
//             className="form-control"
//             value={user?.email || ''}
//             readOnly
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">PRN *</label>
//           <input
//             type="text"
//             name="prn"
//             className="form-control"
//             value={user?.prn || ''}
//             readOnly
//           />
//         </div>

//         {/* Editable fields for request */}
//         <div className="mb-3">
//           <label className="form-label">Department *</label>
//           <input
//             type="text"
//             name="department"
//             className="form-control"
//             value={formData.department}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Article Title *</label>
//           <input
//             type="text"
//             name="articleTitle"
//             className="form-control"
//             value={formData.articleTitle}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Author(s)</label>
//           <input
//             type="text"
//             name="authorDetails"
//             className="form-control"
//             value={formData.authorDetails}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Publication Info</label>
//           <input
//             type="text"
//             name="publicationDetails"
//             className="form-control"
//             value={formData.publicationDetails}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">DOI</label>
//           <input
//             type="text"
//             name="doi"
//             className="form-control"
//             value={formData.doi}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Article URL</label>
//           <input
//             type="text"
//             name="url"
//             className="form-control"
//             value={formData.url}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? 'Submitting...' : 'Submit Request'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArticleRequestForm;





// import React, { useState } from 'react';
// import axios from 'axios';

// const ArticleRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     prn: '',
//     department: '',
//     articleTitle: '',
//     authorDetails: '',
//     publicationDetails: '',
//     doi: '',
//     url: '',
//   });

//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitSuccess(false);
//     setSubmitError(null);
//     setLoading(true);
//     try {
//       await axios.post('http://localhost:5000/api/article-requests', formData);
//       setSubmitSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         prn: '',
//         department: '',
//         articleTitle: '',
//         authorDetails: '',
//         publicationDetails: '',
//         doi: '',
//         url: '',
//       });
//     } catch (err) {
//       setSubmitError(err.response?.data?.error || 'Submission failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: 'auto' }}>
//       <h4 className="mb-3">Request an Article</h4>

//       {submitSuccess && (
//         <div className="alert alert-success">
//           Article request submitted successfully.
//         </div>
//       )}
//       {submitError && <div className="alert alert-danger">{submitError}</div>}

//       <form onSubmit={handleSubmit}>
//         {['name', 'email', 'prn', 'department', 'articleTitle', 'authorDetails', 'publicationDetails', 'doi', 'url'].map((field) => (
//           <div className="mb-3" key={field}>
//             <label className="form-label">
//               {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
//               {(field === 'name' || field === 'email' || field === 'prn' || field === 'department' || field === 'articleTitle') && ' *'}
//             </label>
//             <input
//               type="text"
//               name={field}
//               className="form-control"
//               value={formData[field]}
//               onChange={handleChange}
//               required={['name', 'email', 'prn', 'department', 'articleTitle'].includes(field)}
//             />
//           </div>
//         ))}

//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? 'Submitting...' : 'Submit Request'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArticleRequestForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const ArticleRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     prn: '',
//     department: '',
//     articleTitle: '',
//     authorDetails: '',
//     publicationDetails: '',
//     doi: '',
//     url: '',
//   });

//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((f) => ({ ...f, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitSuccess(false);
//     setSubmitError(null);
//     setLoading(true);

//     try {
//       const token = localStorage.getItem('token');

//       await axios.post(
//         'http://localhost:5000/api/article-requests',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setSubmitSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         prn: '',
//         department: '',
//         articleTitle: '',
//         authorDetails: '',
//         publicationDetails: '',
//         doi: '',
//         url: '',
//       });
//     } catch (err) {
//       console.error('Submission error:', err.response?.data || err.message);
//       setSubmitError(err.response?.data?.message || 'Submission failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: 'auto' }}>
//       <h4 className="mb-3">Request an Article</h4>

//       {submitSuccess && (
//         <div className="alert alert-success">
//           Article request submitted successfully.
//         </div>
//       )}
//       {submitError && <div className="alert alert-danger">{submitError}</div>}

//       <form onSubmit={handleSubmit}>
//         {['name', 'email', 'prn', 'department', 'articleTitle', 'authorDetails', 'publicationDetails', 'doi', 'url'].map((field) => (
//           <div className="mb-3" key={field}>
//             <label className="form-label">
//               {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
//               {(field === 'name' || field === 'email' || field === 'prn' || field === 'department' || field === 'articleTitle') && ' *'}
//             </label>
//             <input
//               type="text"
//               name={field}
//               className="form-control"
//               value={formData[field]}
//               onChange={handleChange}
//               required={['name', 'email', 'prn', 'department', 'articleTitle'].includes(field)}
//             />
//           </div>
//         ))}

//         <button type="submit" className="btn btn-primary" disabled={loading}>
//           {loading ? 'Submitting...' : 'Submit Request'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ArticleRequestForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ArticleRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     prn: '',
//     department: '',
//     articleTitle: '',
//     authorDetails: '',
//     publicationDetails: '',
//     doi: '',
//     url: '',
//   });

//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitSuccess(false);
//     setSubmitError(null);
//     setLoading(true);

//     try {
//       const token = localStorage.getItem('token');

//       await axios.post(
//         'http://localhost:5000/api/article-requests',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setSubmitSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         prn: '',
//         department: '',
//         articleTitle: '',
//         authorDetails: '',
//         publicationDetails: '',
//         doi: '',
//         url: '',
//       });
//     } catch (err) {
//       console.error('Submission error:', err.response?.data || err.message);
//       setSubmitError(err.response?.data?.message || 'Submission failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (submitSuccess) {
//       const timer = setTimeout(() => setSubmitSuccess(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [submitSuccess]);

//   const formGroupStyle = {
//     marginBottom: '8px', // less vertical space
//     display: 'flex',
//     flexDirection: 'column',
//   };

//   const labelStyle = {
//     fontWeight: '600',
//     marginBottom: '3px', // tighter space under label
//   };

//   const inputStyle = {
//     padding: '8px 10px', // smaller padding inside input
//     fontSize: '1.05rem', // slightly bigger text
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     outline: 'none',
//   };

//   const inputFocusStyle = {
//     borderColor: '#007bff',
//     boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//   };

//   const [focusedField, setFocusedField] = useState(null);

//   return (
//     <div className="container mt-4" style={{ maxWidth: '520px' }}>
//       <div className="card shadow-sm">
//         <div className="card-body p-4">
//           <h4 className="card-title mb-3 text-center">Request an Article</h4>

//           {submitSuccess && (
//             <div className="alert alert-success py-2 text-center" role="alert">
//               Request submitted successfully.
//             </div>
//           )}
//           {submitError && (
//             <div className="alert alert-danger py-2 text-center" role="alert">
//               {submitError}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             {[
//               'name',
//               'email',
//               'prn',
//               'department',
//               'articleTitle',
//               'authorDetails',
//               'publicationDetails',
//               'doi',
//               'url',
//             ].map((field) => (
//               <div key={field} style={formGroupStyle}>
//                 <label htmlFor={field} style={labelStyle}>
//                   {field.charAt(0).toUpperCase() +
//                     field.slice(1).replace(/([A-Z])/g, ' $1')}
//                   {(field === 'name' ||
//                     field === 'email' ||
//                     field === 'prn' ||
//                     field === 'department' ||
//                     field === 'articleTitle') &&
//                     ' *'}
//                 </label>
//                 <input
//                   id={field}
//                   type="text"
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleChange}
//                   required={['name', 'email', 'prn', 'department', 'articleTitle'].includes(field)}
//                   style={{
//                     ...inputStyle,
//                     ...(focusedField === field ? inputFocusStyle : {}),
//                   }}
//                   onFocus={() => setFocusedField(field)}
//                   onBlur={() => setFocusedField(null)}
//                 />
//               </div>
//             ))}

//             <button
//               type="submit"
//               className="btn btn-primary w-100 mt-3"
//               disabled={loading}
//             >
//               {loading ? 'Submitting...' : 'Submit Request'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleRequestForm;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ArticleRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     prn: '',
//     department: '',
//     articleTitle: '',
//     authorDetails: '',
//     publicationDetails: '',
//     doi: '',
//     url: '',
//   });

//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitSuccess(false);
//     setSubmitError(null);
//     setLoading(true);

//     try {
//       const token = localStorage.getItem('token');

//       await axios.post(
//         'http://localhost:5000/api/article-requests',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setSubmitSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         prn: '',
//         department: '',
//         articleTitle: '',
//         authorDetails: '',
//         publicationDetails: '',
//         doi: '',
//         url: '',
//       });
//     } catch (err) {
//       console.error('Submission error:', err.response?.data || err.message);
//       setSubmitError(err.response?.data?.message || 'Submission failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (submitSuccess) {
//       const timer = setTimeout(() => setSubmitSuccess(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [submitSuccess]);

//   return (
//     <div className="container mt-4" style={{ maxWidth: '520px' }}>
//       <div className="card shadow-sm">
//         <div className="card-body p-4">
//           <h4 className="card-title mb-4 text-center">Request an Article</h4>

//           {submitSuccess && (
//             <div className="alert alert-success py-2 text-center" role="alert">
//               Request submitted successfully.
//             </div>
//           )}
//           {submitError && (
//             <div className="alert alert-danger py-2 text-center" role="alert">
//               {submitError}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="mb-2">
//               <label htmlFor="name">Name *</label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="email">Email *</label>
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="prn">PRN *</label>
//               <input
//                 id="prn"
//                 type="text"
//                 name="prn"
//                 className="form-control"
//                 value={formData.prn}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="department">Department *</label>
//               <input
//                 id="department"
//                 type="text"
//                 name="department"
//                 className="form-control"
//                 value={formData.department}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="articleTitle">Article Title *</label>
//               <input
//                 id="articleTitle"
//                 type="text"
//                 name="articleTitle"
//                 className="form-control"
//                 value={formData.articleTitle}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="authorDetails">Author(s)</label>
//               <input
//                 id="authorDetails"
//                 type="text"
//                 name="authorDetails"
//                 className="form-control"
//                 value={formData.authorDetails}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="publicationDetails">Publication Info</label>
//               <input
//                 id="publicationDetails"
//                 type="text"
//                 name="publicationDetails"
//                 className="form-control"
//                 value={formData.publicationDetails}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="doi">DOI</label>
//               <input
//                 id="doi"
//                 type="text"
//                 name="doi"
//                 className="form-control"
//                 value={formData.doi}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="url">Article URL</label>
//               <input
//                 id="url"
//                 type="url"
//                 name="url"
//                 className="form-control"
//                 value={formData.url}
//                 onChange={handleChange}
//               />
//             </div>

//             <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//               {loading ? 'Submitting...' : 'Submit Request'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleRequestForm;

















import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    prn: '',
    department: '',
    articleTitle: '',
    authorDetails: '',
    publicationDetails: '',
    doi: '',
    url: '',
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch user details on mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Fetched Profile:", res.data);
        const { name, email, prn, department } = res.data;


        setFormData((prev) => ({
          ...prev,
          name,
          email,
          prn,
          department,
        }));
      } catch (err) {
        console.error('Failed to fetch user data:', err.response?.data || err.message);
        setSubmitError('Failed to load user details.');
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setSubmitError(null);
    setLoading(true);

    try {
      const token = localStorage.getItem('token');

      await axios.post(
        'http://localhost:5000/api/article-requests',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSubmitSuccess(true);
      setFormData((prev) => ({
        ...prev,
        articleTitle: '',
        authorDetails: '',
        publicationDetails: '',
        doi: '',
        url: '',
      }));
    } catch (err) {
      console.error('Submission error:', err.response?.data || err.message);
      setSubmitError(err.response?.data?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => setSubmitSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

//   return (
//     <div className="container mt-4" style={{ maxWidth: '520px' }}>
//       <div className="card shadow-sm">
//         <div className="card-body p-4">
//           <h4 className="card-title mb-4 text-center">Request an Article</h4>

//           {submitSuccess && (
//             <div className="alert alert-success py-2 text-center" role="alert">
//               Request submitted successfully.
//             </div>
//           )}
//           {submitError && (
//             <div className="alert alert-danger py-2 text-center" role="alert">
//               {submitError}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="mb-2">
//               <label htmlFor="name">Name *</label>
//               <input
//                 id="name"
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 value={formData.name}
//                 onChange={handleChange}
//                 disabled
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="email">Email *</label>
//               <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 value={formData.email}
//                 onChange={handleChange}
//                 disabled
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="prn">PRN *</label>
//               <input
//                 id="prn"
//                 type="text"
//                 name="prn"
//                 className="form-control"
//                 value={formData.prn}
//                 onChange={handleChange}
//                 disabled
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="department">Department *</label>
//               <input
//                 id="department"
//                 type="text"
//                 name="department"
//                 className="form-control"
//                 value={formData.department}
//                 onChange={handleChange}
//                disabled
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="articleTitle">Article Title *</label>
//               <input
//                 id="articleTitle"
//                 type="text"
//                 name="articleTitle"
//                 className="form-control"
//                 value={formData.articleTitle}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="authorDetails">Author(s)</label>
//               <input
//                 id="authorDetails"
//                 type="text"
//                 name="authorDetails"
//                 className="form-control"
//                 value={formData.authorDetails}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="publicationDetails">Publication Info</label>
//               <input
//                 id="publicationDetails"
//                 type="text"
//                 name="publicationDetails"
//                 className="form-control"
//                 value={formData.publicationDetails}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="doi">DOI</label>
//               <input
//                 id="doi"
//                 type="text"
//                 name="doi"
//                 className="form-control"
//                 value={formData.doi}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="mb-2">
//               <label htmlFor="url">Article URL</label>
//               <input
//                 id="url"
//                 type="url"
//                 name="url"
//                 className="form-control"
//                 value={formData.url}
//                 onChange={handleChange}
//               />
//             </div>

//             <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//               {loading ? 'Submitting...' : 'Submit Request'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleRequestForm;

  return (
    <div className="container mt-4" style={{ maxWidth: '520px' }}>
      <div className="card shadow-sm">
        <div className="card-body p-4">
          <h4 className="card-title mb-4 text-center">Request an Article</h4>

          {submitSuccess && (
            <div className="alert alert-success py-2 text-center" role="alert">
              Request submitted successfully.
            </div>
          )}
          {submitError && (
            <div className="alert alert-danger py-2 text-center" role="alert">
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name">Name *</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
                 disabled
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                 disabled
              />
            </div>

            <div className="mb-2">
              <label htmlFor="prn">PRN *</label>
              <input
                id="prn"
                type="text"
                name="prn"
                className="form-control"
                value={formData.prn}
                onChange={handleChange}
                required
                 disabled
              />
            </div>

            <div className="mb-2">
              <label htmlFor="department">Department *</label>
              <input
                id="department"
                type="text"
                name="department"
                className="form-control"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="articleTitle">Article Title *</label>
              <input
                id="articleTitle"
                type="text"
                name="articleTitle"
                className="form-control"
                value={formData.articleTitle}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-2">
              <label htmlFor="authorDetails">Author(s)</label>
              <input
                id="authorDetails"
                type="text"
                name="authorDetails"
                className="form-control"
                value={formData.authorDetails}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="publicationDetails">Publication Info</label>
              <input
                id="publicationDetails"
                type="text"
                name="publicationDetails"
                className="form-control"
                value={formData.publicationDetails}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="doi">DOI</label>
              <input
                id="doi"
                type="text"
                name="doi"
                className="form-control"
                value={formData.doi}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="url">Article URL</label>
              <input
                id="url"
                type="url"
                name="url"
                className="form-control"
                value={formData.url}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleRequestForm;


