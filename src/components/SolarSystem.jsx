import React, { Component } from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        { Planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetName={ name } planetImage={ image } />
        )) }
      </>
    );
  }
}
