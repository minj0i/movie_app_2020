import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
    <h4>{rating}/5.0</h4>
  </div>
}

Food.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  rating: PropTypes.number,
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 3
  },
  {
    id: 2,
    name: "김치1",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 5.0
  },
  {
    id: 3,
    name: "김김치치",
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg",
    rating: 4.8
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
