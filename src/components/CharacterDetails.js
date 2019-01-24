import React, {Component} from "react";
import {Link} from 'react-router-dom';


class CharacterDetails extends Component {

  render() {
    const {results} = this.props;
    const characterId = this.props.match.params.id;

    if (results.length > 0 && characterId < results.length)  {
      const details = results[characterId];

      const {image, name, house,dateOfBirth,patronus,alive} = details;


      return (
        <React.Fragment>
          <div className="detail_card">
            <img src={image} alt={name} className="charater_detail-image"/>
            <h2 className="charater_detail-name">{name}</h2>
            <p className="charater_detail-house">{house}</p>
            <p className="charater_detail-date">{dateOfBirth}</p>
            <p className="charater_detail-patronus">{patronus}</p>
            <p className="charater_detail-alive">{alive}</p>
          </div>
          <div>
            <Link to="/">Volver</Link>
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

export default CharacterDetails;