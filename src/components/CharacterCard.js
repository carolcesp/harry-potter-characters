import React, {Component} from "react";

class CharacterCard extends Component {
  render() {
    return (
        <div className="characters_list-card-item">
          <img src={this.props.image} alt={this.props.name} className="character_image"/>
          <h2 className="character_name">{this.props.name}</h2>
          <p className="character_house">{this.props.house}</p>
        </div>
  
    );
  }
}

export default CharacterCard;