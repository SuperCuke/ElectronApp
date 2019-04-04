// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ModuleService from '../services/ModuleService';
import * as ConfigurationService from '../services/ConfigurationService';

type Props = {};

export default class ConfigurationPage extends Component<Props> {
  props: Props;

  constructor() {
    super();
    
    var componentList = ModuleService.GetAllModules();
    var configuration = ConfigurationService.GetConfiguration();

    this.state = {};
    this.state.Configurations = [];

    for (var componentName in componentList) {
      var component = componentList[componentName];
      var instance = new component();
      this.state.Configurations.push({
        name: instance.name,
        isFavorite: configuration.favoriteModules.indexOf(componentName) != -1,
        id: componentName
      });
    }

    this.state.username = configuration.username;
    this.state.password = configuration.password;
    this.state.parallelSessions = configuration.parallelSessions;
  }

  submitForm = () => {
    debugger;

    var configuration = ConfigurationService.GetConfiguration();
    configuration.favoriteModules = this.state.Configurations.filter(c => c.isFavorite).map(c => c.id);

    configuration.username = this.state.username;
    configuration.password = this.state.password;
    configuration.parallelSessions = this.state.parallelSessions;

    ConfigurationService.SaveConfiguration(configuration);
    return false;
  }


  render() {

    return <div className="container">

      <div className="row">
        <h2>Default configuration</h2>
      </div>
      <br/>
        <div className="form-group">
          <label htmlFor="firstName">Username</label>
          <input type="text" className="form-control" id="" placeholder="Enter Username" value={this.state.username} onChange={(event) => this.setState({ username: event.target.value })} />
        </div>

        <div className="form-group">
          <label htmlFor="firstName">Password</label>
          <input type="password" className="form-control" id="" placeholder="Enter Password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
        </div>

        <div className="form-group">
          <label htmlFor="firstName">Parallel sessions</label>
          <input type="number" className="form-control" id="" placeholder="Enter Session number" value={this.state.parallelSessions} onChange={(event) => this.setState({ parallelSessions: event.target.value })} />
        </div>

      <div className="row">
        <button type="button" onClick={this.submitForm} className="btn btn-primary">Save configuration</button>
      </div>
    </div>
  }
}

//<div className="row">
//  <h2>Favorite components</h2>
//</div>
//  <div className="row">
//    <table className="table">
//      <thead>
//        <tr>
//          <th scope="col">Name</th>
//          <th scope="col">Favorite</th>
//        </tr>
//      </thead>
//      <tbody>
//        {this.state.Configurations.map((item, i) => {
//          return (
//            <tr key={i}>
//              <td>{item.name}</td>
//              <td> <input
//                type="checkbox"
//                checked={item.isFavorite}
//                onChange={(event) => { item.isFavorite = event.target.checked; this.setState({ Configurations: this.state.Configurations }); }} />
//              </td>
//            </tr>
//          );
//        })}
//      </tbody>
//    </table>
//  </div>
