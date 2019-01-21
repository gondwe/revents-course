import React, { Component } from 'react';
import EventDashboard from '../features/event/EventDashboard';
import NavBar from '../features/nav/NavBar';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavBar/>
        <Container className="main">
          <EventDashboard/>
        </Container>

      </div>  
    );
  }
}

export default App;
