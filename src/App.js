//import logo from './logo.svg';
import './App.css';
import Hello from './Hello';


// const Hello = ({props}) => "Hello World" +props.name ; 

function App(props) {

//  let name = user.name;
//  let age = user.age;

  let {name, age, IsReactDev, level} = props ;
  
  return (
    <div className="App">
        Hello World from App.JS from {name} Age = {age -5}.<br/> He is a {IsReactDev} react developer. Okay, So his level is beginner = {level.beginner}.
        <div> Another Tree 
          <br/> <Hello fname= {name}></Hello>
        </div>

    </div>       // We can have only 1x element (<div>) in this function as we have to 'return' single element (JS XML) at the end.
                 // Yet we can have a Tree i.e. multiple elements inside the 'main' element (component).
  );
}

export default App;
