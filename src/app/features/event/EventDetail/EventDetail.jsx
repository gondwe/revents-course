import React from 'react'
import { connect } from 'react-redux'
import { Grid, GridColumn } from 'semantic-ui-react';
import EventDetailChat from './EventDetailChat'
import EventDetailHeader from './EventDetailHeader'
import EventDetailInfo from './EventDetailInfo'
import EventDetailSidebar from './EventDetailSidebar'
// import { createEvent, updateEvent, deleteEvent } from '../EventActions'

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id

  let event = {}

  if (eventId && state.events.length) {
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    event
  }

}

// const actions = 

function EventDetail({ event }) {

  return (
    <div>
      <Grid>
        <GridColumn width={10}>
          <EventDetailHeader event={event} />
          <EventDetailInfo event={event} />
          <EventDetailChat />
        </GridColumn>

        <GridColumn width={6}>
          <EventDetailSidebar attendees={event.attendees} />
        </GridColumn>
      </Grid>
    </div>
  )
}

export default connect(mapState) (EventDetail)
