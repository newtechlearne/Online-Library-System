import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default NotFoundPage;
