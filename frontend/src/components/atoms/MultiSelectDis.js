import React, { Component } from "react";
import Select from 'react-select';

const options = [
  { value: 'hypertenze', label: 'hypertenze' },
  { value: 'diabetes', label: 'diabetes' },
  { value: 'poruchy štítné žlázy', label: 'poruchy štítné žlázy' }
];

export class MultiSelectDis extends Component {
  state = {
    selectedOption: null,
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select style={{'border-color': '#17a2b8', 'border-radius': '20px'}}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isMulti={true}
      />
    );
  }
}