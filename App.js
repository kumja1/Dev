import React from 'react';
import styled from 'styled-components';

const PonderButton = styled.button`
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #ccc;
  }
`;

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <PonderButton onClick={handleClick}>Button 1</PonderButton>
      <PonderButton onClick={handleClick}>Button 2</PonderButton>
    </div>
  );
};

export default App;
