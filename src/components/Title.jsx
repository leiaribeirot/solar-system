import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { classe, headline } = this.props;
    return <h2 className={ classe }>{headline}</h2>;
  }
}

Title.propTypes = {
  classe: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};
