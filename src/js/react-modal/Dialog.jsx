"use strict";

import React, { Component, PropTypes } from 'react';
import withStyles from '../../decorators/withStyles';
import styles from './Dialog.css';
import DialogDetails from './DialogDetails';

@withStyles(styles)
class Dialog extends Component {

  static propTypes = {
    isOpen: PropTypes.bool,
    isEditingReview: PropTypes.func
  };

  componentDidMount() {
    this.wrapper = document.createElement('div');
    this.wrapper.className = 'DialogWrapper';
    document.body.appendChild(this.wrapper);
    this.renderDialogDetails(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.renderDialogDetails(newProps);
  }

  componentWillUnmount() {
    React.unmountComponentAtNode(this.wrapper);
    document.body.removeChild(this.wrapper);
  }

  renderDialogDetails(props) {
    this.details = React.render((<DialogDetails {...props} />), this.wrapper);
  }


  render() {
    return null;
  }

};

export default Dialog;
