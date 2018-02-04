import React from 'react';
import { Link } from 'react-router-dom';
import './css/cards.css';

const SingleCard = props => (
  <div className={`${props.classType}`}>
    <div className={`${props.classType}-img`} style={{backgroundImage: `url(${props.img})`}}>
    </div>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    { props.link
      ? <Link to={props.link}>Learn more</Link>
      : null
    }
  </div>
);

const Cards = props => (
  <div className='cards-container'>
    {props.items.map(e => <SingleCard key={e.name} {...e} />)}
  </div>
);

export default Cards;