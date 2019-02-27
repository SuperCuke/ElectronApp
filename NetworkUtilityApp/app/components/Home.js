// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';


type Props = {};

export default class Home extends Component<Props> {
  props: Props;
  constructor() {
    super();
    var supportedModuleIds = ['PingModule'];

    var supportedModules = supportedModuleIds.map(m => {
      var module = require('../containers/PythonModules/' + m);
      var instance = new module[m]();

      return {
        name: instance.name,
        description: instance.description
      }
    });

    this.state = { supportedModules: supportedModules };
  }

  render() {

    return (
      <div>
        <h1>Modules dashboard</h1>
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
                  <td>{item.name}</td>
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
