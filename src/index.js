import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Now, let's call this 'root' element to add further components/tags into it so that those components will be displayed on HTML page.

root.render(
      <div>
        <App 
        name= "Farhad Ali," 
        age={29} 
        IsReactDev= {true} 
        level= "beginner"
        />
        </div>  
  ); 

/*
root.render(
      <div> Successfully deployed through GitHub Workflow using npm install, build and test </div>
);*/
  
/*  root.render(
//    React.createElement('div', null, "Hello World") //React will consider 'name' with small letters as built-in component, and 'name' with 1st-Capital letter as custom component.
    React.createElement('div', null, React.createElement('span', null, "Hello World in Span")) 
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
