// @flow
import React, { Component } from 'react';
import BasePythonModule from './BasePythonModule';

var ExeService = require('../../services/ExecutableService')


export default class CiscoConfigBackupCLIModule extends BasePythonModule {
  constructor() {
    super('CiscoConfigBackupCLI', 'Backup of Configuration from Switches')
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

    var params = ['--parallel-sessions ' + this.state.parallelSessions, this.state.username, this.state.password, '"' + this.state.directory + '"', this.state.ips.replace(/\n/g, ' ')];
     
    ExeService.ExecuteExe('CiscoConfigBackupCLI.exe', params, outputLine => {
      this.setState({ output: this.state.output + '\n' + outputLine });
    });

    return false;
  }


  render() {

    return <div className="col-md-12">
      <div className="row"><h1>CiscoConfigBackupCLIModule</h1></div>
      <br />
      <div className="form-group">
        <label for="firstName">Username</label>
        <input type="text" className="form-control" id="" placeholder="Enter Username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
      </div>
      <div className="form-group">
        <label for="firstName">Password</label>
        <input type="text" className="form-control" id="" placeholder="Enter Password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
      </div>
      <div class="form-group">
        <label for="">Output folder</label>
        <input type="file" className="form-control-file" directory="" webkitdirectory="" onChange={(event) => this.setState({ directory: event.target.files[0].path })} />
      </div>
      <div className="form-group">
        <label for="firstName">Parallel sessions</label>
        <input type="number" className="form-control" id="" placeholder="Enter Session number" value={this.state.parallelSessions} onChange={(event) => this.setState({ parallelSessions: event.target.value })} />
      </div>
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
        <label for="firstName">Script ouput</label>
        <textarea rows="30" className="form-control" disabled="disabled" value={this.state.output} />
        <br />
        <span>{this.state.error}</span>
      </div>
    </div>;
  }
}
