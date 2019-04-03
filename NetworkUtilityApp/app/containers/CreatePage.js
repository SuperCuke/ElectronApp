// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModuleListComponent from '../components/ModuleListComponent';

type Props = {};

export default class CreatePage extends Component<Props> {
  props: Props;

  render() {
    return <div className="container">
      <div className="row">
        <h1>Create Modules</h1>
      </div>
      <br />
      <ModuleListComponent category="create" onlyFavorite={false} />
    </div>
  }
}
