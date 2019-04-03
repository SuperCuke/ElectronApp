// @flow
import React, { Component } from 'react';
import BasePythonModule from './BasePythonModule';

export default class TraceModule extends BasePythonModule {
  constructor() {
    super('Trace', 'Allows to trace servers', 'create')
  }

  render() {
    return <div>
      <h1>I am Trace module</h1>
    </div>;
  }
}
