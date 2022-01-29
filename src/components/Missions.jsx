import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './missions.css';

export default class Missions extends Component {
  render() {
    return (
      <>
        <Title classe="titleMission" headline="" />
        <div className="missions-section" data-testid="missions">
          { missions.map(({ classe, name, year, country, destination }) => (
            <MissionCard
              classe={ `${classe} mission-card` }
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          )) }
        </div>
      </>
    );
  }
}
