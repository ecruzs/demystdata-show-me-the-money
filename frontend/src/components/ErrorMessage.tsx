import React from 'react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div style={{ color: 'red', marginTop: '20px' }}>
      <strong>Error:</strong> {message}
    </div>
  );
};

export default ErrorMessage;
