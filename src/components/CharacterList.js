import React, {Component} from "react";
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";


class CharacterList extends Component {
  render() {
      return (
        <div className="content_list">
          <ul className="characters_list">
              {this.props.filterResult.map((item,index) => {
                return (
                  <li className="characters_list-card" key={index}>
                    <Link className="character_link" to={`/details/${item.id}`}>
                      <CharacterCard 
                        image={item.image}
                        name={item.name}
                        house={item.house}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>
        </div>
      );
    }
  }
  CharacterList.propTypes = {
  filterResult: PropTypes.array.isRequired
  };


export default CharacterList;