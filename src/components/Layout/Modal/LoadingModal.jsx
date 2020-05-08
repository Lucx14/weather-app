import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px black solid;
  border-radius: 6px;
  background-color: black;
  opacity: 0.3;
  height: 18.75rem;
  color: white;
  text-align: center;
  padding-top: 8rem;
`;

const LoadingModal = () => {
  return (
    <Wrapper>
      <h1>Loading.......</h1>
    </Wrapper>
  );
};

export default LoadingModal;
