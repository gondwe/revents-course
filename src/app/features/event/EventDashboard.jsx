import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import EventListing from './EventList/EventListing';
import EventForm from './EventForm';
import cuid from "cuid";

const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'assets/user.png',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'assets/user.png'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'assets/user.png'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'assets/user.png',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'assets/user.png'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'assets/user.png'
      }
    ]
  }
]


class EventDashboard extends Component {

    state = {
      events:events,
      isOpen:false
    }

    cancelForm = () => {
      this.setState({
        isOpen:false
      })
    }

    openForm = ()=>{
      this.setState({
        isOpen:true
      })
    }

    eventCreate = (newEv)=>{
      newEv.id = cuid();
      newEv.hostPhotoURL = "assets/user.png";
      const newEvents = [...this.state.events, newEv];
      this.setState({
        events:newEvents,
        isOpen:false
      })
    }

  render() {
    return (
      <div>
        <Grid>
            <GridColumn width={10}>
              <EventListing events={this.state.events}/>
            </GridColumn>
            <GridColumn width={6}>
            <Button onClick={this.openForm} content="Create Event" positive ></Button>
              {
                this.state.isOpen &&
                <EventForm addEvent={this.eventCreate} cancelForm={this.cancelForm}/>
              }
            </GridColumn>
        </Grid>
      </div>
    )
  }
}

export default EventDashboard;