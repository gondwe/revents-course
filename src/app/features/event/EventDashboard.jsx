import React, { Component } from 'react'
import { Grid, GridColumn, Button } from 'semantic-ui-react';
import EventListing from './EventList/EventListing';
import EventForm from './EventForm';
import cuid from "cuid";

const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
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
    date: '2018-03-28',
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
      selectedEvent:null,
      isOpen:false
    }

    cancelForm = () => {
      this.setState({
        isOpen:false
      })
    }

    openForm = ()=>{
      this.setState({
        selectedEvent:null,
        isOpen:true
      })
    }

    handleEventEdit = (eventToUpdate) => () => {
      this.setState({
        selectedEvent:eventToUpdate,
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

    eventUpdate = (updatedEvent)=>{
      this.setState({
        isOpen:false,
        selectedEvent:null,
        events:this.state.events.map(event=>{
          if(event.id === updatedEvent.id){
            return Object.assign({},updatedEvent)
          }else{
            return event;
          }
        })
      })
    }


    eventDelete = (EventID) => () => {
      this.setState({
        events : this.state.events.filter(e=>e.id !== EventID)
      })
    }

  render() {
    
    const {selectedEvent} = this.state
    return (
      <div>
        <Grid>
            <GridColumn width={10}>
              <EventListing deleteEvent={this.eventDelete} eventEdit={this.handleEventEdit} events={this.state.events}/>
            </GridColumn>
            <GridColumn width={6}>
            <Button onClick={this.openForm} content="Create Event" positive ></Button>
              {
                this.state.isOpen &&
                <EventForm updateEvent={this.eventUpdate} selectedEvent={selectedEvent} addEvent={this.eventCreate} cancelForm={this.cancelForm}/>
              }
            </GridColumn>
        </Grid>
      </div>
    )
  }
}

export default EventDashboard;