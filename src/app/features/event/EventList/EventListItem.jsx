import React, { Component } from 'react'
import { Segment, Item, List, Icon, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom'

class EventListItem extends Component {
  render() {
    const {event, deleteEvent} = this.props;
    return (
           <Segment.Group>
              <Segment>
                <Item.Group>
                  <Item>
                    <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                    <Item.Content>
                      <Item.Header as="a">{event.title}</Item.Header>
                      <Item.Description>
                        Hosted by <a href="#host">{event.hostedBy}</a>
                      </Item.Description>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Segment>
              <Segment>
                <span>
                  <Icon name="clock" /> {event.date} |
                  <Icon name="marker" /> {event.category}
                </span>
              </Segment>
              <Segment secondary>
                <List horizontal>
                {event.attendees && event.attendees.map((event)=>(
                  <EventListAttendee key={event.id} pipo={event}/>

                ))}
                </List>
              </Segment>
              <Segment clearing>
                <span>{event.description}</span>
                <div className="row">
                <Button onClick={deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" icon="times"/>
                <Button  as={Link} to={`/event/${event.id}`} color="teal" floated="left" content="View" />
                </div>
              </Segment>
            </Segment.Group>
    )
  }
}

export default EventListItem;