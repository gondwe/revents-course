import React, { Component } from 'react'
import { ListItem, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
  render() {
    const {pipo} = this.props
    return (
     
        <ListItem>
          <Image as='a' circular size='mini' src={pipo.photoURL} />
        </ListItem>
     
    )
  }
}

export default EventListAttendee