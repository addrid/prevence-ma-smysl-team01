import React, { Component } from "react"

import {  FormGroup, Form, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { setDescription } from '../../services/AdminDiagnosis/actions';

export class DiagDescriptionRaw extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.setDescription(event.target.value);
  }

  render() {
    const { inputDescr } = this.props;
    return (
      <Form>
        <FormGroup>
          <Label for="exampleText">Popis diagnózy</Label>
          <Input type="textarea" name="text" id="exampleText" value={inputDescr} onChange={this.handleChange}/>
        </FormGroup>
      </Form>
    );
  }
}


const mapStateToProps = state => ({
  inputDescr: state.createDiagnosis.description
});

const mapDispatchToProps = {
  setDescription
};

export const DiagDescription = connect(mapStateToProps, mapDispatchToProps)(DiagDescriptionRaw);