import React, { Component } from 'react';
import EventDashboard from '../features/event/EventDashboard';
import NavBar from '../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from "react-router-dom";
import EventForm from '../features/event/EventForm';
import EventDetail from '../features/event/EventDetail';
import UserDashboard from '../features/user/UserDashboard';
import UserDetails from '../features/user/UserDetails';
import HomePage from '../features/home/HomePage';
import SettingsDashboard from '../features/user/settings/SettingsDashboard';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route path="/(.+)" render={() => (
          <div className="App">
            <NavBar />
            <Container className="main">
              <Switch>
                <Route path="/events" component={EventDashboard} />
                <Route path="/event/:id" component={EventDetail} />
                <Route path="/users" component={UserDashboard} />
                <Route path="/users/:id" component={UserDetails} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/create" component={EventForm} />
              </Switch>
            </Container>
          </div>
        )} />

      </div>
    );
  }
}

export default App;
