// @flow
import React, { Component } from 'react';
import BasePythonModule from './BasePythonModule';

var PythonService = require('../../services/PythonService')

export default class PingModule extends BasePythonModule {
  constructor() {
    super('Ping', 'Allows to ping remote servers', 'create')
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
    return <div className="col-md-6">
      <div className="row"><h1>Ping module</h1></div>
      <br />
      <div className="row">

        <label for="firstName">IP address</label>
        <input type="text" className="form-control" id="sampleIp" placeholder="Enter IP" value={this.state.ip} onChange={(event) => this.setState({ ip: event.target.value })} />
      </div>
      <br />
      <div className="row">
        <hr className="mb-4" />
        <button className="btn btn-primary btn-lg btn-block" type="button" onClick={this.submitForm}>Execute</button>

      </div>
      <br />  <br />
      <div className="row">
        <label for="firstName">Script ouput</label>
        <textarea rows="5" className="form-control" disabled="disabled" value={this.state.output} />
        <br />
        <span>{this.state.error}</span>
      </div>
    </div>;
  }
}
