import React from 'react';
import './css/cardSections.css';
import Cards from './Cards.js';

const SingleSection = props => (
  <div className='card-section'>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <p>{props.longDescription}</p>
    <Cards items={props.plans} type='card'/>
  </div>
);

const CardSections = props => (
  <div className='card-sections-container'>
    {props.items.map(e => <SingleSection key={e.name} {...e}/>)}
  </div>
);

export default CardSections;