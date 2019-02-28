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
        isHidden: configuration.hideModules.indexOf(componentName) != -1,
        id: componentName
      });
    }
  }
  submitForm = () => {
    debugger;

    var configuration = ConfigurationService.GetConfiguration();
    configuration.hideModules = this.state.Configurations.filter(c => c.isHidden).map(c => c.id);
    ConfigurationService.SaveConfiguration(configuration);
    return false;
  }


  render() {

    return <div>
      <br />
      <Link to="/home">Home</Link>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Hide component</th>
          </tr>
        </thead>
        <tbody>
          {this.state.Configurations.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td>
                <td> <input
                  type="checkbox"
                  checked={item.isHidden}
                  onChange={(event) => { item.isHidden = event.target.checked; this.setState({ Configurations: this.state.Configurations }); }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button type="button" onClick={this.submitForm} className="btn btn-primary">Save configuration</button>
    </div>;
  }
}

//class ConfigurationElement {
//  constructor(name, isHidden) {
//    this.name = name;
//    this.isHidden = isHidden;
//  }
//}
