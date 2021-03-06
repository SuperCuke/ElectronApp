// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';
import { debug } from 'electron-log';

var PythonService = require('../services/PythonService')

type Props = {};

export default class ScriptSb extends Component<Props> {
  props: Props;

  render() {

    PythonService.ExecuteScript('test.py', (r) => {
      debugger;
    });

    return (
      <div className={styles.container} data-tid="container">
        <h2>New mega page</h2>
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
