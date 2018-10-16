  import React from 'react';
  import ReactDOM from 'react-dom';

 //create a new component and this component should produce some html

 const App = () => {  //declaring app as constant and => is the same as function, just in ES6.
    return <div>Hi!</div>;   // JSX is subset of js which allows us to write html in our js. It still looks like HTML,
                             //but its actually js. JSX gets
}
  ReactDOM.render(<App />, document.querySelector('.container'));

