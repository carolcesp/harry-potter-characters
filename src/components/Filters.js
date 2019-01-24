import React, {Component} from "react";
import PropTypes from "prop-types";

class Filters extends Component {
  render() {
    return (
      <div>
        <input  type="text" size="30" placeholder="Busca a tu personaje favorito" onChange={this.props.action}></input>
      </div>
    );
  }
}
Filters.propTypes = {
  action: PropTypes.func.isRequired
};

export default Filters;