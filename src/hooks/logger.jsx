import React from 'react';

const consoleLogger = (data) => {
  console.log('consoleLogger ~ process.env.REACT_ENV:', process.env.REACT_ENV);
  if (process.env.REACT_ENV === 'development') {
    console.log(data);
  }
};

export default consoleLogger;
