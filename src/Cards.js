import React from 'react';
import { Link } from 'react-router-dom';
import './css/cards.css';

const SingleCard = props => (
  <div className={`${props.type}`}>
    { props.img
      ? <div className={`${props.type}-img`} style={{backgroundImage: `url(${props.img})`}}></div>
      : null
    }
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    { props.price
      ? <p className='price'>Price starts at ${props.price.toLocaleString()}.</p>
      : null }
    { props.link
      ? <Link to={props.link}>{ props.price ? 'Get plan' : 'Learn more'}</Link>
      : null
    }
  </div>
);

const Cards = props => (
  <div className='cards-container'>
    {props.items.map(e => <SingleCard key={e.name} {...e} type={props.type} />)}
  </div>
);

export default Cards;