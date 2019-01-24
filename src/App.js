import React, { Component } from 'react';
import {getCharacters} from './services/CharactersService';
import { Route, Switch } from 'react-router-dom';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       results: [],
       field:''
    }
    this.getCharactersHarry = this.getCharactersHarry.bind(this);
    this.getFieldInput = this.getFieldInput.bind(this);
  }
  componentDidMount(){
    this.getSavedLocalStorage()
  };

  getCharactersHarry() {
    getCharacters()
      .then(data => {
        const newData = data.map((item, index) => { return {...item,id:index}});
        this.saveLocalStorage(newData,'myCharacters');
        this.setState({
          results: newData
        });
      });
  };

  saveLocalStorage(data,myCharacters) {
    localStorage.setItem(myCharacters,JSON.stringify(data));
  };

  getSavedLocalStorage() {
    if (localStorage.getItem('characters') !== null) {
      const harryCharacters = JSON.parse(localStorage.getItem('characters'));
      this.setState({
        results: harryCharacters
      });
    } else {
      this.getCharactersHarry();
    };
  };

  getFieldInput(e){
    const fieldCharacter = e.currentTarget.value;
     this.setState({
       field: fieldCharacter
     });
  };

  filterCharacters(){
    const filterName = this.state.results.filter(item => {
      const name = item.name;
      return (name.toUpperCase().includes(this.state.field.toUpperCase())) ? true : false;
     });
    return filterName;
  };

  render() {
    const filterResult = this.filterCharacters();
    const {results} = this.state;
      return (
        <div className="App">
          <header>
            <h1 className="title">Harry Potter Characters</h1>
          </header>
          <main>
            <Switch>
              <Route exact path="/" render={()=>(
                <React.Fragment>
                  <Filters action={this.getFieldInput}/>
                  <CharacterList filterResult={filterResult}/>
                </React.Fragment>
               )}/>
              <Route path="/details/:id" render={props =>
                <CharacterDetails match={props.match} results={results} />}
              />
            </Switch>
          </main>
        </div>
      );
    };
  };

export default App;
