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
        link: '/modules/' + componentName,
        isFavorite: configuration.favoriteModules.indexOf(componentName) != -1,
        componentName: componentName
      });

    }

    this.state = { supportedModules: supportedModules };
    this.state.favoriteVisible = !props.onlyFavorite;
  }


  componentDidUpdate(prevProps, prevState) {
    var configuration = ConfigurationService.GetConfiguration();
    var currentCategoryModules = this.state.supportedModules.map(x => x.componentName);

    configuration.favoriteModules = configuration.favoriteModules.
      filter((x) => currentCategoryModules.indexOf(x) == -1)
      .concat(this.state.supportedModules.filter(x => x.isFavorite).map(x => x.componentName));
    ConfigurationService.SaveConfiguration(configuration);
  }


  render() {

    return (
      <div className="row">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col" className={this.state.favoriteVisible ? "" : "hidden"}>Is favorite</th>
            </tr>
          </thead>
          <tbody>
            {this.state.supportedModules.map((item, i) => {
              return (
                <tr key={i}>
                  <td><Link to={item.link}>{item.name}</Link></td>
                  <td>{item.description}</td>
                  <td className={this.state.favoriteVisible ? "" : "hidden"}> <input
                    type="checkbox"
                    checked={item.isFavorite}
                    onChange={(event) => { item.isFavorite = event.target.checked; this.setState({ supportedModules: this.state.supportedModules }); }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
