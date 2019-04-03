// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ModuleListComponent from '../components/ModuleListComponent';

type Props = {};

export default class AnalysisPage extends Component<Props> {
  props: Props;

  render() {
    return <div className="container">
      <div className="row">
        <h1>Analysis Modules</h1>
      </div>
      <br />
      <ModuleListComponent category="analysis" onlyFavorite={false} />
    </div>
  }
}
