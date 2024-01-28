import React from 'react';
import ReactDOM from 'react-dom/client';
import Nika from './nika';
class Car extends React.Component{
  render() {   
    const x=5;
    const y=5;
     return (
       <React.Fragment>
          <h1>jami: {x+y}</h1>
          <h1>sxvaoba: {x-y}</h1>
          <h1>gakopa: {x/y}</h1>
          <h1>namravli: {x*y}</h1>
       </React.Fragment>
    );
  }
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Car></Car>);