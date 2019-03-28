// import React, { Component } from 'react';
// import './App.css';
// import Travel from './Travel';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Travel 
//           destination='Chichiriviche '
//           country='Venezuela '
//           distance='7287 kms'
//           photo='https://upload.wikimedia.org/wikipedia/commons/5/5c/20160630_175251_Amanecer_desde_Chichiriviche.png'
//         />
//         <Travel
//           destination='London '
//           country='United Kingdom '
//           distance='773 kms'
//           photo='https://cdn.pixabay.com/photo/2016/06/07/11/02/london-1441427_960_720.png'
//         />
//       </div>
        
//     );
//   }
// }

// ******************* fin de quête React 1 ************************


import React, {Component} from "react";
import './App.css';
import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div>
        <Travel />
      </div>
    );
  }
}

export default App;