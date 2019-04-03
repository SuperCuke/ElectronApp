// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ModuleService from '../services/ModuleService';

type Props = {};

export default class ModulePage extends Component<Props> {
  props: Props;

  render() {
    var componentList = ModuleService.GetAllModules();

    var ChildComponent = componentList[this.props.match.params.id];

    return <div className="container">
      <ChildComponent />
    </div>;
  }
}
