// @flow
import React, { Component } from 'react';
import BasePythonModule from './BasePythonModule';

var PythonService = require('../../services/PythonService')

export default class PingModule extends BasePythonModule {
  constructor() {
    super('Ping', 'Allows to ping remote servers')
    this.state = {
      ip: '192.168.0.1',
      output: '',
      error: ''
    };
  }

  submitForm = () => {
    debugger;
    var ip = this.state.ip;
    PythonService.ExecuteScript('test.py', [ip], (response, error) => {
      if (error)
        this.setState({ error: error });
      else
        this.setState({ output: response });
    });

    return false;
  }

  render() {
    return <div>
      <h1>I am Ping module</h1>
        <div className="form-group">
          <label>IP address</label>
          <input type="text" className="form-control" id="sampleIp" placeholder="Enter IP" value={this.state.ip} onChange={(event) => this.setState({ ip: event.target.value })} />
        </div>
        <button type="button" onClick={this.submitForm} className="btn btn-primary">Submit</button>
        <div className="form-group">
          <textarea rows="5" disabled="disabled" value={this.state.output} />
          <br />
          <span>{this.state.error}</span>
        </div>   
    </div>;
  }
}
