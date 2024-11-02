import logo from './logo.svg';
import './App.css';
import React from 'react';
import './Hello.css' ;



function Hello({fname}) {
  return (
    <p className='para'> This is a para by {fname} in Hello Tag. </p>
        );
}

export default Hello;
