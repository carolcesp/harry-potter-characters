import React, {Component} from "react";
import PropTypes from "prop-types";

class CharacterList extends Component {
  render() {
      return (
        <div className="content_list">
          <ul className="characters_list">
              {this.props.filterResult.map((item) => {
                return (
                  <li className="characters_list-card">
                    <div className="characters_list-card-item">
                      <img src={item.image} alt={item.name} className="character_image"/>
                      <h2 className="character_name">{item.name}</h2>
                        <p className="character_house">{item.house}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
        </div>
      );
    }
  }
  CharacterList.propTypes = {
  filterResul: PropTypes.array.isRequired
};

export default CharacterList;