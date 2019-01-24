import React, { Component } from 'react'
import { Grid, GridColumn } from 'semantic-ui-react';
import { connect } from 'react-redux'
import EventListing from './EventList/EventListing';
import { deleteEvent } from './EventActions'

const mapState = (state) => ({
  events: state.events
})


class EventDashboard extends Component {

  eventDelete = (EventID) => () => {
    this.props.deleteEvent(EventID)
  }

  render() {
    const { events } = this.props;
    return (
      <div>
        <Grid>
          <GridColumn width={10}>
            <EventListing deleteEvent={this.eventDelete} eventEdit={this.handleEventEdit} events={events} />
          </GridColumn>
          <GridColumn width={6}>

          </GridColumn>
        </Grid>
      </div>
    )
  }
}

export default connect(mapState, { deleteEvent })(EventDashboard);