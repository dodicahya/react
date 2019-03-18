import React, { Component } from 'react';
// import './App.css';
import HeaderComponent from './Header.js'
import SectionComponent from './Section.js'
import PortofolioComponent from './Portofolio.js'
class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent
        name="3008 Sarah Drive"
        address="Franklin,LA 70538"
        />
        <SectionComponent />
        <PortofolioComponent />
      </div>
    )
  }
}

export default App;
