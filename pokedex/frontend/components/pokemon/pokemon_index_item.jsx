import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  render() {
    const pokemon = this.props.pokemon;

    return (
      <Link to={`/pokemon/${pokemon.id}`}>
        <li> {pokemon.name} <img src={pokemon.image_url}></img></li>
      </Link>
    );
  }
}

export default PokemonIndexItem;
