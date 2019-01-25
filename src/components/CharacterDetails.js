import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

import Gryffindor from './../images/gryffindor';


class CharacterDetails extends Component {



render() {
  const {results} = this.props;
  const characterId = this.props.match.params.id;

  if (results.length > 0 && characterId < results.length)  {
    const details = results[characterId];
    const {image,name,house,yearOfBirth,patronus} = details;
    const deadOrAlive = (details.alive === true) ? 'VIV@ ' : 'MUERTO ☠️';
    

    return (
      <React.Fragment>
        <div className="link_return">
          <Link to="/" >Volver</Link>
        </div>
        <div className="content_detail-card">
          <div className="detail_card-image">
            <img src={image} alt={name} className="card-image"/>
          </div>
          <div className="character_card">
            <h2 className="character_detail-name">{name}</h2>
            <ul className="detail_card-list">
              <li className="character_detail-house">Casa: {house} 
              </li>
              <li className="character_detail-date">Nacimiento: {yearOfBirth}</li>
              <li className="character_detail-patronus">Patronus: {patronus}</li>
              <li className="character_detail-alive">Estado: {deadOrAlive}</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p>No hay datos, intentalo de nuevo</p>
          <Link to="/">Volver</Link>
        </React.Fragment>
      );
    }
  }
}
  CharacterDetails.propTypes = {
    results: PropTypes.array.isRequired
    };

export default CharacterDetails;