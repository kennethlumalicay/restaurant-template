import React, { Fragment } from 'react';
import './css/cardSections.css';
import Cards from './Cards.js';

const SingleSection = props => (
  <section className='card-section'>
    <h1>{props.name}</h1>
    <p>{props.description}</p>
    <Cards items={props.plans} type='card' linkText='Get Plan'/>
  </section>
);

const CardSections = props => (
  <div className='card-sections-container'>
    {props.items.map((e,i) => (
      <Fragment key={e.name}>
        { i > 0 ? <hr /> : null }
        <SingleSection {...e}/>
      </Fragment>
    ))}
  </div>
);

export default CardSections;