import React from 'react';
import { festivals } from '../../data/festivals';
import { Link } from 'react-router-dom';
import './FestivalsList.css';

const FestivalsList: React.FC = () => {

  const listOfFestivals = festivals.map((festival) => (
    <li key={festival.id} className='festival'>
      <Link to={`/festival/${festival.id}`}>{festival.name}
        <span>[ {festival.datestart} - {festival.datefinish} ]</span>
        <span>{festival.location}</span>
      </Link>
    </li>
  ));

  return (
    <div className='festivals-list'>
      <h1 className='header-1'>List of Festivals</h1>
      <ul className='list'>
        {listOfFestivals}
      </ul>
    </div>
  );
};

export default FestivalsList;