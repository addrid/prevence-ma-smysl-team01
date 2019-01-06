import React, { Component } from 'react';
import { FormGroup, Form, Label, Input } from 'reactstrap';

export class EventDescription extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onChange({ description: e.target.value });
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="eventText">Popis akce</Label>
          <Input
            type="textarea"
            name="text"
            id="eventText"
            value={this.props.value}
            onChange={e => this.handleChange(e)}
          />
        </FormGroup>
      </Form>
    );
  }
}
