import React from 'react';
import { Badge, Button, Stack } from 'react-bootstrap';
import { format } from 'date-fns';
import { downloadArticle } from '../api/api';

const statusVariant = {
  Pending: 'warning',
  Processing: 'primary',
  Fulfilled: 'success',
  Rejected: 'danger'
};

const RequestItem = ({ request }) => {
  const handleDownload = async () => {
    try {
      const response = await downloadArticle(request._id);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${request.articleTitle.replace(/\s+/g, '_')}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="p-3 border-bottom">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <h5 className="mb-1">{request.articleTitle}</h5>
        <Badge bg={statusVariant[request.status] || 'secondary'} className="ms-2">
          {request.status}
        </Badge>
      </div>
      
      <div className="mb-2 text-muted small">
        Requested on: {format(new Date(request.requestedAt), 'MMM dd, yyyy h:mm a')}
      </div>
      
      {request.authorDetails && (
        <div className="mb-1">
          <strong>Authors:</strong> {request.authorDetails}
        </div>
      )}
      
      {request.publicationDetails && (
        <div className="mb-1">
          <strong>Publication:</strong> {request.publicationDetails}
        </div>
      )}
      
      <Stack direction="horizontal" gap={2} className="mt-2">
        {request.doi && (
          <Button 
            variant="outline-secondary" 
            size="sm" 
            href={`https://doi.org/${request.doi}`} 
            target="_blank"
            rel="noopener noreferrer"
          >
            View DOI
          </Button>
        )}
        
        {request.url && (
          <Button 
            variant="outline-info" 
            size="sm" 
            href={request.url} 
            target="_blank"
            rel="noopener noreferrer"
          >
            View Article
          </Button>
        )}
        
        {request.status === 'Fulfilled' && request.fileUrl && (
          <Button 
            variant="success" 
            size="sm" 
            onClick={handleDownload}
          >
            Download
          </Button>
        )}
      </Stack>
    </div>
  );
};

export default RequestItem;