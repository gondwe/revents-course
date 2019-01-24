import React from 'react'
import { List, Segment, Item, Image, ItemContent, ItemHeader, Label } from 'semantic-ui-react';

const EventDetailSidebar = ({ attendees }) => {
  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length } {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
          </Segment>

      <Segment attached>
        <List relaxed divided>
          {attendees && attendees.map(attendee => (
            <Item style={{ position: 'relative' }}>
              <Label
                style={{ position: 'absolute' }}
                color="orange"
                ribbon="right"
              >
                Host</Label>

              <Image size="tiny" src="/assets/user.png" />
              <ItemContent verticalAlign="middle">
                <ItemHeader as="h3">
                  <a>{attendee.name}</a>
                </ItemHeader>
              </ItemContent>
            </Item>

          ))}
        </List>
      </Segment>
    </div>
  )
}

export default EventDetailSidebar
