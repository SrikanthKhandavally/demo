import React, { Component } from 'react';
import PrimarySearchAppBar from '../Components/layouts/AppBar'
import Body from '../Components/layouts/body'
import SectionLogin from './LoginCard'

class LandingPage extends Component {
  constructor() {
      super();
      this.state = {
          isLoginOpen: true
      }
  }


  render() {
    return (
        <div>
                <PrimarySearchAppBar />
                <Body />
        </div>
    );
  }
}

export default LandingPage;
