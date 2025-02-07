import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div role="alert" style={{ color: 'red', marginTop: '20px' }}>
      <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorMessage;
