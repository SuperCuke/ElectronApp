// @flow
import React, { Component } from 'react';
import BasePythonModule from './BasePythonModule';
import FormDefaultComponent from '../../components/FormDefaultComponent';

var ExeService = require('../../services/ExecutableService')


export default class CiscoSwitchInventoryCollectorCLIModule extends BasePythonModule {
  constructor() {
    super('CiscoSwitchInventoryCollectorCLI', 'Cisco Swich Inventory Collector', 'create')
    this.state = {
      username: '',
      password: '',
      error: '',
      directory: '',
      parallelSessions: '',
      ips : '',
      output: ''
    };
  }

  submitForm = () => {
    this.setState({ output: '' });

    var switchIps = this.state.ips.split(/\n/g);
    var params = [
      '--parallel-sessions',
      this.state.parallelSessions,
      this.state.username,
      this.state.password,
      '"' + this.state.directory + '"'];
    params = params.concat(switchIps);
     
    ExeService.ExecuteExe('CiscoSwitchInventoryCollectorCLI.exe', params, outputLine => {
      this.state.output = this.state.output + '\n' + outputLine;
      this.setState(this.state);
    });

    return false;
  }


  render() {

    return <div className="col-md-12">
      <div className="row"><h1>CiscoSwitchInventoryCollectorCLI</h1></div>
      <br />
      <FormDefaultComponent label="Username" property="username" inputType="text" onChange={(newValue) => this.setState({ username: newValue })} />
      <FormDefaultComponent label="Password" property="password" inputType="password" onChange={(newValue) => this.setState({ password: newValue })} />
      <div className="form-group">
        <label htmlFor="">Output folder</label>
        <input type="file" className="form-control-file" directory="" webkitdirectory="" onChange={(event) => this.setState({ directory: event.target.files[0].path })} />
      </div>
      <FormDefaultComponent label="Parallel sessions" property="parallelSessions" inputType="number" onChange={(newValue) => this.setState({ parallelSessions: newValue })} />
      <div className="form-group">
        <label>Switch IPs</label>
        <textarea className="form-control" rows="5" value={this.state.ips} onChange={(event) => this.setState({ ips: event.target.value })}></textarea>
      </div>
      <br />
      <div className="form-group">
        <hr className="mb-4" />
        <button className="btn btn-primary btn-lg btn-block" type="button" onClick={this.submitForm}>Execute</button>
      </div>
      <div className="form-group">
        <label htmlFor="firstName">Script ouput</label>
        <textarea rows="30" className="form-control" disabled="disabled" value={this.state.output} />
        <br />
        <span>{this.state.error}</span>
      </div>
    </div>;
  }
}
