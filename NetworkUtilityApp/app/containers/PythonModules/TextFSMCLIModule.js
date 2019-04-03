// @flow
import React, { Component } from 'react';
import BasePythonModule from './BasePythonModule';

var ExeService = require('../../services/ExecutableService')

export default class TextFSMCLIModule extends BasePythonModule {
  constructor() {
    super('TextFSMCLI', 'TextFSM CLI Tool', 'change')
    this.state = {
      templatePath: '',
      inputFolder: '',
      outputFolder: ''
    };
  }

  submitForm = () => {
    this.setState({ output: '' });

    var params = [`"${this.state.templatePath}"`, `"${this.state.inputFolder}"`, `"${this.state.outputFolder}"`];

    ExeService.ExecuteExe('TextFSMCLI.exe', params, outputLine => {
      this.state.output = this.state.output + '\n' + outputLine;
      this.setState(this.state);
    });

    return false;
  }


  render() {

    return <div className="col-md-12">
      <div className="row"><h1>TextFSMCLI</h1></div>
      <br />
      <div class="form-group">
        <label for="">Text FSM Template</label>
        <input type="file" className="form-control-file" onChange={(event) => this.setState({ templatePath: event.target.files[0].path })} />
      </div>
      <div class="form-group">
        <label for="">Input folder</label>
        <input type="file" className="form-control-file" directory="" webkitdirectory="" onChange={(event) => this.setState({ inputFolder: event.target.files[0].path })} />
      </div>
      <div class="form-group">
        <label for="">Output folder</label>
        <input type="file" className="form-control-file" directory="" webkitdirectory="" onChange={(event) => this.setState({ outputFolder: event.target.files[0].path })} />
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
