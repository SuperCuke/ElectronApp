// @flow
import React, { Component } from 'react';
import ModuleListComponent from '../components/ModuleListComponent';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return <div className="container">
      <div className="row">
        <h1>Modules dashboard</h1>
      </div>
      <br />
      <ModuleListComponent category="" onlyFavorite={true} />;
    </div>
  }
}
