import React from 'react';
import { Container } from 'react-bootstrap';
import ArticleRequestForm from '../components/ArticleRequestForm';

const ArticleRequestPage = () => {
  return (
    <Container className="py-4">
      <div className="mx-auto" style={{ maxWidth: '800px' }}>
        <ArticleRequestForm />
      </div>
    </Container>
  );
};

export default ArticleRequestPage;