import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button, Grid, GridColumn, Header } from 'semantic-ui-react';
import { createEvent, updateEvent, deleteEvent } from './EventActions';
import cuid from 'cuid'
import { reduxForm, Field } from 'redux-form'
import TextInput from '../../common/Form/TextInput';
import SelectInput from '../../common/Form/SelectInput';
import { combineValidators, isRequired, hasLengthGreaterThan, composeValidators } from 'revalidate'
import DateInput from '../../common/Form/DateInput';
import TextareaInput from '../../common/Form/TextareaInput';
import moment from 'moment';




const mapState = (state, ownProps) => {

  const eventId = ownProps.match.params.id

  const emptyEvent = {}

  const event = (eventId && state.events.length) ? state.events.filter(event => event.id === eventId)[0] : emptyEvent;

  return {
    initialValues: event
  }

}

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' },
];

const isReq = isRequired({message:'a littel description please'})

const validate = combineValidators({
  'title': isRequired({ message: 'The event title is required' }),
  'category': isRequired({ message: 'The categir title is required' }),
  'descriptions' : composeValidators(isReq, hasLengthGreaterThan(4)({message:'Cannot be less than 5 chars'}))(),
  'city': isRequired({ message: 'which town Omera' }),
  'venue': isRequired({ message: 'Wapi ??' }),
  'date':isRequired('date')
})

class EventForm extends Component {

  onformSubmit = values => {
    values.date = moment(values.date).format();
    if (this.props.initialValues.id) {
      this.props.updateEvent(values)
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Ben'
      }
      this.props.createEvent(newEvent)
      this.props.history.push('/events');
    }

  }



  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <GridColumn width={10}>
          <Segment>
            <Form onSubmit={this.props.handleSubmit(this.onformSubmit)}>
              <Header color='teal' sub content='Event Details' />
              <Field name='title' component={TextInput} type='text' placeholder='Events Title' />
              <Field name='category' options={category} component={SelectInput} type='text' placeholder='Events Category' />
              <Field name='descriptions' component={TextareaInput} placeholder='Events Description' />
              <Header color='teal' sub content='Event Location' />
              <Field name='city' component={TextInput} type='text' placeholder='Events City' />
              <Field name='venue' component={TextInput} type='text' placeholder='Events Venue' />
              <Field name='date' component={DateInput} dateFormat='yyyy-MM-dd HH:mm' timeFormat='HH:mm' showTimeSelect type='text' placeholder='Events Date & TIme' />
              <Button disabled={invalid || submitting || pristine} positive type="submit">Submit</Button>
              <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
            </Form>
          </Segment>
        </GridColumn>
      </Grid>
    )
  }
}

export default connect(mapState, { createEvent, updateEvent, deleteEvent })(reduxForm({ form: 'eventForm', enableReinitialize: true, validate })(EventForm));