// @flow
import React, { Component } from 'react';

type Props = {};

export default class BasePythonModule extends Component<Props> {
  props: Props;

  constructor(name, description) {
    super();
    this.name = name;
    this.description = description;
  }
}
