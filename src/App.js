import React, { Component } from 'react';
import {getCharacters} from './services/CharactersService';
import { Route, Switch } from 'react-router-dom';
import Filters from './components/Filters';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import avatar from './images/fondo-hogwarts.png';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
       results: [],
       fieldName:'',
       fieldAncestry:'',
       fieldHouse:''
    }
    this.getCharactersHarry = this.getCharactersHarry.bind(this);
    this.getFieldName = this.getFieldName.bind(this);
    this.getFieldAncestry = this.getFieldAncestry.bind(this);
    this.getFieldHouse = this.getFieldHouse.bind(this);
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
  getFieldAncestry(e){
    const selectAncestry = e.currentTarget.value;
    this.setState({
      fieldAncestry:selectAncestry
    })
  }

  getFieldName(e){
    const fieldCharacter = e.currentTarget.value;
     this.setState({
       fieldName: fieldCharacter
     });
  };
  getFieldHouse(e){
    const fieldCharacter = e.currentTarget.value;
     this.setState({
       fieldHouse: fieldCharacter
     });
  };

  filterCharacters(){
    const filterName = this.state.results
      .filter(item => {
      const name = item.name;
      return (name.toUpperCase().includes(this.state.fieldName.toUpperCase())) ? true : false;
     })
     .filter(item=>{
      return (item.ancestry.includes(this.state.fieldAncestry))
    })
    .filter(item=>{
      return (item.house.includes(this.state.fieldHouse))
    });
    return filterName;
  };

  render() {
    const filterResult = this.filterCharacters();
    const {results} = this.state;
      return (
        <div className="App">
          <header className="app_header">
            <div className="content_header">
              <h1 className="title_header">Harry Potter <img className="avatar_header" src={avatar} alt="LogoHarryPotter"/> Characters</h1>
            </div>
          </header>
          <main>
            <Switch>
              <Route exact path="/" render={()=>(
                <React.Fragment>
                  <Filters name={this.getFieldName} ancestry={this.getFieldAncestry} house={this.getFieldHouse}/>
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
