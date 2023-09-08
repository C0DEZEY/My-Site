
import React from 'react';

export default function Title({ HeaderText, MainText, SubText }) {
  const titleStyle = {
    marginTop: '23vh', 
    marginLeft: '6vh',
    resize: 'none',
  };

  const H3Style = {
  color: 'rgba(255, 255, 255, 0.46)',
  fontSize: '55px', 
  fontStyle: 'normal',
  fontWeight: '400', 
   resize: 'none',
  };


  const H1Style = {
  color: '#FFF',
  fontSize: '65px', 
  fontStyle: 'normal', 
  fontWeight: '400',
   resize: 'none',
  }
  
const H2Style = {
  color: 'rgba(255, 255, 255, 0.46)',
  fontSize: '55px',
  fontStyle: 'normal',
  fontWeight: '400',
   resize: 'none', 
};

const Box = {
  backgroundColor: '#009ff9',
  borderRadius: '15px', 
  height: '5px',
  width: '235px',
  marginTop: '2vh', 
  marginLeft: '0vw',
   resize: 'none',
};
  return (
    <div style={titleStyle}>
      <h2 style={H2Style}>{HeaderText}</h2>
      <h1 style={H1Style}>{MainText}</h1>
      {SubText && <div style={Box}></div>}
      <h3 style={H3Style}>{SubText}</h3>
    </div>
  );
}
