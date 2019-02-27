// @flow
import React, { Component } from 'react';
import BasePythonModule from './BasePythonModule';

export default class PingModule extends BasePythonModule {
  constructor() {
    super('Ping', 'Allows to ping remote servers')
  }

  render() {
    return <div>
      <h1>I am Ping module</h1>
    </div>;
  }
}
