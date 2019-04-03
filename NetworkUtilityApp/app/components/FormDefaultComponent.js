// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import * as ConfigurationService from '../services/ConfigurationService';

type Props = {

};

export default class FormDefaultComponent extends Component<Props> {
  props: Props;

  constructor() {
    super();
    this.state = {
      value: '',
      checked: false
    };
  }

  changeDefault(checked) {
    this.setState({ checked: checked });

    if (checked) {
      var configurationValue = ConfigurationService.GetConfiguration()[this.props.property];
      this.setState({ value: configurationValue });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value != this.state.value)
      this.props.onChange(this.state.value);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-10">
          <div className="form-group">
            <label htmlFor="firstName">{this.props.label}</label>
            <input type={this.props.inputType} disabled={this.state.checked} className="form-control" id="" placeholder={this.props.label} value={this.state.value} onChange={(event) => this.setState({ value: event.target.value })} />
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-group">
            <div className="form-check">
              <input id={this.props.property} type="checkbox" checked={this.state.checked} className="form-check-input" onChange={(event) => { this.changeDefault(event.target.checked) }} />
              <label htmlFor={this.props.property} className="form-check-label">Use Default</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
