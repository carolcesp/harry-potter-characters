import React, {Component} from "react";
import PropTypes from "prop-types";

class Filters extends Component {
  render() {
    const {action} = this.props;
      return (
        <div >
          <input className="style_input" type="text" size="30" placeholder="Busca a tu personaje favorito" onKeyUp={action}></input>
        </div>
      );
    }
  }
Filters.propTypes = {
  action: PropTypes.func.isRequired
};

export default Filters;