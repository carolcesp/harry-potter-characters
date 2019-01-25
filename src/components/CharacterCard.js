import React, {Component} from "react";
import PropTypes from "prop-types";

class CharacterCard extends Component {
  render() {
    const {image,name,house} = this.props
    return (
        <div className="characters_list-card-item">
          <img src={image} alt={name} className="character_image"/>
          <h2 className="character_name">{name}</h2>
          <p className="character_house">{house}</p>
        </div>
    );
  };
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired
};

export default CharacterCard;