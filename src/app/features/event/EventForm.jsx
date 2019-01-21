import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';


class EventForm extends Component {
    
    state = {
      event: {
        title:"",
        date:"",
        city:"",
        venue:"",
        hostedBy:""
      }
    }


      formInput = (evt)=>{
        const newEvent = this.state.event;
        newEvent[evt.target.name] = evt.target.value;
        this.setState({
          event:newEvent
        })
      }

      onformSubmit = (evt)=>{
        evt.preventDefault();
        this.props.addEvent(this.state.event)
      }
    
    render() {
    const {cancelForm} = this.props;
    const {event} = this.state;
    return (
            <Segment>
              <Form onSubmit={this.onformSubmit}>
                <Form.Field>
                  <label>Event Title</label>
                  <input name="title" onChange={this.formInput} value={event.title} placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Event Date</label>
                  <input name="date" onChange={this.formInput} value={event.date} type="date" placeholder="Event Date" />
                </Form.Field>
                <Form.Field>
                  <label>City</label>
                  <input name="city" onChange={this.formInput} value={event.city} placeholder="City event is taking place" />
                </Form.Field>
                <Form.Field>
                  <label>Venue</label>
                  <input name="venue" onChange={this.formInput} value={event.venue} placeholder="Enter the Venue of the event" />
                </Form.Field>
                <Form.Field>
                  <label>Hosted By</label>
                  <input name="hostedBy" onChange={this.formInput} value={event.hostedBy} placeholder="Enter the name of person hosting" />
                </Form.Field>
                <Button positive type="submit">Submit</Button>
                <Button onClick={cancelForm} type="button">Cancel</Button>
              </Form>
            </Segment>
    )
  }
}

export default EventForm;