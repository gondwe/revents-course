import React, { Component } from 'react'
import EventListItem from './EventListItem';


export default class EventListing extends Component {
  render() {
    const {events} = this.props
    return (
      <div>
        {events.map((event)=>(
          <EventListItem key={event.id} event={event} />
        )) }
      </div>
    )
  }
}
