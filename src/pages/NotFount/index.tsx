import React, { useEffect } from 'react';
import { Title, ErrorContainer, Error } from '../../styles/global';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
    
  return (
    <ErrorContainer>
      <Title>ERROR 404</Title>
      <Error>Sorry, page not found</Error>
    </ErrorContainer>
  )
};

export default NotFound;
