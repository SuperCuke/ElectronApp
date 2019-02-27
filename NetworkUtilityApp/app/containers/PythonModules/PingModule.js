// @flow
import React, { Component } from 'react';
import BasePythonModule from './BasePythonModule';

export class PingModule extends BasePythonModule {
  constructor() {
    super('Ping', 'Allows to ping remote servers')
  }
}
