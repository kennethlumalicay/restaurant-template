import React from 'react';
import { Link } from 'react-router-dom';
import './css/cards.css';

const SingleCard = props => (
  <article className={`${props.type}`}>
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
      ? <Link to={props.link}>{ props.linkText }</Link>
      : null
    }
  </article>
);

const Cards = props => (
  <div className='cards-container'>
    {props.items.map(e => <SingleCard key={e.name} {...e} type={props.type} linkText={props.linkText}/>)}
  </div>
);

export default Cards;