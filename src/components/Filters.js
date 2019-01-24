import React, {Component} from "react";

class Filters extends Component {
  render() {
    return (
      <div>
        <input  type="text" size="30" placeholder="Busca a tu personaje favorito" onChange={this.props.action}></input>
      </div>
    );
  }
}

export default Filters;