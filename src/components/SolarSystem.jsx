import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './solarSystem.css';

export default class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title classe="titlePlanet" headline="" />
        <div className="solarSystem">
          <div data-testid="solar-system" />
          { Planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
          )) }
        </div>
      </>
    );
  }
}
