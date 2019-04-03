// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModuleListComponent from '../components/ModuleListComponent';

type Props = {};

export default class ChangePage extends Component<Props> {
  props: Props;

  render() {
    return <div className="container">
      <div className="row">
        <h1>Change Modules</h1>
      </div>
      <br />
      <ModuleListComponent category="change" onlyFavorite={false} />
    </div>
  }
}
