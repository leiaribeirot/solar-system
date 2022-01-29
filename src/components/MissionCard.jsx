import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './missionCard.css';
import './missionHover.css';

export default class MissionCard extends Component {
  render() {
    const { classe, name, year, country, destination } = this.props;
    return (
      <div className={ classe } data-testid="mission-card">
        <div className="card-name">
          <p data-testid="mission-name">{name}</p>
        </div>
        <div className="card-content">
          <span data-testid="mission-year">{year}</span>
          <span data-testid="mission-country">{country}</span>
          <span data-testid="mission-destination">{destination}</span>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  classe: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
