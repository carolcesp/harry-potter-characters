import React, {Component} from "react";

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
  }
}

export default CharacterCard;