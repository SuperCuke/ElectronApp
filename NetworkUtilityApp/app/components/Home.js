// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import * as ModuleService from '../services/ModuleService';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;
  constructor() {
    super();

    var supportedModules = [];
    var componentList = ModuleService.GetSupportedModules();
    for (var componentName in componentList) {
      var component = componentList[componentName];
      var instance = new component();
      supportedModules.push({ 
        name: instance.name,
        description: instance.description,
        link: '/modules/' + componentName
      });
    }

    debugger;

    this.state = { supportedModules: supportedModules };
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <h1>Modules dashboard</h1>
        </div>
        <br />
        <div className="row">
        <h3>Favorite Modules</h3>
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
      </div>
    );
  }
}
