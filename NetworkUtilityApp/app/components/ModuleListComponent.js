// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import * as ModuleService from '../services/ModuleService';
import * as ConfigurationService from '../services/ConfigurationService';

type Props = {};

export default class ModuleListComponent extends Component<Props> {
  props: Props;
  constructor(props) {
    super();
    debugger;
    var supportedModules = [];
    var componentList = ModuleService.GetAllModules();
    var configuration = ConfigurationService.GetConfiguration();

    for (var componentName in componentList) {
      var component = componentList[componentName];
      var instance = new component();

      if (props.category && props.category != instance.category) continue;
      if (props.onlyFavorite && configuration.favoriteModules.indexOf(componentName) == -1) continue;

      supportedModules.push({
        name: instance.name,
        description: instance.description,
        link: '/modules/' + componentName
      });

    }

    this.state = { supportedModules: supportedModules };
  }

  render() {

    return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.supportedModules.map((item, i) => {
              return (
                <tr key={i}>
                  <td><Link to={item.link}>{item.name}</Link></td>
                  <td>{item.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
