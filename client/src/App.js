import React, { Component } from 'react';

import NavbarCom from './components/Navbar/NavbarCom'
import FooterCom from './components/Footer/FooterCom'

import HomePag from './paginas/Home/HomePag'

class App extends Component {
  render() {
    return (
      <div>  
        <NavbarCom />
         <HomePag />     
        <FooterCom />
      </div>
    );
  }
}

export default App;
