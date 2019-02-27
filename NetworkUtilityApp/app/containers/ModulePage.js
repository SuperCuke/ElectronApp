// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PingModule from './PythonModules/PingModule';
import TraceModule from './PythonModules/TraceModule';

type Props = {};

export default class ModulePage extends Component<Props> {
  props: Props;

  render() {
    var componentList = {
      PingModule: PingModule,
      TraceModule: TraceModule
    };

    var ChildComponent = componentList[this.props.match.params.id];

    return <div>
      <br />
      <Link to="/home">Home</Link>
      <br />
      <ChildComponent />
    </div>;
  }
}
