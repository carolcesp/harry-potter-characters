import React, {Component} from "react";
import PropTypes from "prop-types";

class Filters extends Component {
  render() {
    const {name,ancestry,house} = this.props;
      return (
        <section className="section__filters">
          <div className="filter__name">
            <label>Busca a tu personaje favorito: 
              <input className="style_input" type="text" id="name" size="30" placeholder="Ej: Harry potter" onKeyUp={name}></input>
            </label>
          </div>
          <div className="filter__ancestry">
            <label>Busca tu ancestro: </label>
            <input type="text" size="30" placeholder="ej: muggleborn" onKeyUp={ancestry}></input>
          </div>
          <div className="filter__house">
          <label htmlFor="size">Filtra por casa:</label>
            <select id="size" name="size" onChange={house}>
              <option>Elije una opción</option>
              <option>Gryffindor</option>
              <option>Slytherin</option>
              <option>Ravenclaw</option>
            </select>
          </div>
          
        </section>
        
      );
    };
  };
Filters.propTypes = {
  name: PropTypes.func.isRequired,
  ancestry: PropTypes.func.isRequired,
  house: PropTypes.func.isRequired
};

export default Filters;