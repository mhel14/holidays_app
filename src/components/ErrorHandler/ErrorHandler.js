import { PropTypes } from 'prop-types';
import React from 'react';
import './ErrorHandler.css';

const ErrorHandler = ({ errorCode }) => {
  let renderErrorInfo = () => (<></>);
  switch (errorCode) {
    case '599':
      renderErrorInfo = () => (
        <p>Error, Internet disconected</p>
      );
      break;
    case '404':
      renderErrorInfo = () => (
        <p>404 Not Found</p>
      );
      break;
    case '403':
      renderErrorInfo = () => (
        <p>403 Forbidden</p>
      );
      break;
    case '500':
      renderErrorInfo = () => (
        <p>500 Internal Server Error</p>
      );
      break;
    case '503':
      renderErrorInfo = () => (
        <p>503 Service Unavailable</p>
      );
      break;
    default:
      renderErrorInfo = () => (<>Oops, something went wrong.</>);
  }

  return (
    <div className="errorHandler">
      {renderErrorInfo()}
    </div>
  );
};

ErrorHandler.propTypes = {
  errorCode: PropTypes.string,
};

ErrorHandler.defaultProps = {
  errorCode: '',
};

export default ErrorHandler;
