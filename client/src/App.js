import React, { Component } from 'react';

import Navbarc from './components/Navbar/Navbarc'
import Footerc from './components/Footer/Footerc'

import HomePag from './paginas/Home/HomePag'

class App extends Component {
  render() {
    return (
      <div>  
        <Navbarc />
        <HomePag />     
        <Footerc />
      </div>
    );
  }
}

export default App;
