'use strict';

import React, { Component, PropTypes } from 'react';

class DialogDetails extends Component {

  static propTypes = {
    isOpen: PropTypes.bool,
    isEditingReview: PropTypes.func
  };

  componentWillReceiveProps(newProps) {
    if (!this.props.isOpen && newProps.isOpen) {
      this.open();
    } else if (this.props.isOpen && !newProps.isOpen) {
      this.close();
    }
  }

  onOverlayClick() {
    this.close();
  }

  open() {
    this.props.isEditingReview(true);
  }

  close() {
    this.props.isEditingReview(false);
  }

  render() {
    if (this.props.isOpen) {
      return(
        <div className="Dialog_overlay"
          onClick={this.onOverlayClick.bind(this)}>
          <div className="Dialog_content" onClick={(e) =>
            e.stopPropagation()}>
            {this.props.children}
          </div>
        </div>
      );

    } else {
      return(
        <div></div>
      );
    }
  }
 };

export default DialogDetails;
