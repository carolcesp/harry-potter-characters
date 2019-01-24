import React, { Component } from 'react';
import {getCharacters} from './services/CharactersService';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       results: []
    }
    this.getCharactersHarry();
    this.getCharactersHarry = this.getCharactersHarry.bind(this);
  }
  getCharactersHarry() {
    getCharacters()
      .then(data => {
        console.log(data)
        this.setState({
          results: data
        });
      });
  }
  


  render() {
    return (
      <div className="App">
        <h1 className="title">Harry Potter Characters</h1>
        <input  type="text" size="30" placeholder="Busca a tu personaje favorito" onChange={this.getField}></input>
        <div className="content_list">
          <ul className="characters_list">
              {this.state.results.map((item) => {
                return (
                  <li className="characters_list-card">
                    <div className="characters_card">
                      <img src={item.image} alt={item.name} className="character_image"/>
                      <h2 className="character_name">{item.name}</h2>
                      <p className="character_house">{item.house}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
