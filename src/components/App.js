import React from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import fetchCharacters from '../services/fetchCharacters';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import '../stylesheets/App.scss';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchInput: '',
      searchRadio: 'all',
      searchCheck: true,
    };

    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }


  // api

  componentDidMount() {

    fetchCharacters().then(characters => this.setState({
      characters: characters
    }));
  }



  // events

  handleSearch(data) {
    this.setState({
      searchInput: data.valueInput
    })
  }

  handleClick(data) {
    this.setState({
      searchRadio: data.valueRadio
    })
  }

  handleCheck(data) {
    this.setState({
      searchCheck: data.valueCheck
    })
  }
  // filter

  filterBySearch() {
    let characters = this.state.characters;
    const searchInput = this.state.searchInput;
    const searchRadio = this.state.searchRadio;
    const searchCheck = this.state.searchCheck;

    if (searchRadio !== 'all') {
      characters = this.filter(characters, 'gender', searchRadio, true);
    }
    characters = this.filter(characters, 'name', searchInput, false);


    return characters.filter(character => {

      if (searchCheck === false) {
        return true;
      }
      // return (if (characters.location.name === characters.origin.name))
      if (character.location.name === character.origin.name) {
        return true;
      } else {
        return false;
      }
    });


  }

  filter = (array, atribute, search, equal) => {
    return array.filter(item => {
      return equal
        ? item[atribute] === search
        : item[atribute].trim().toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
    });
  }


  // render

  renderCharacterDetail(props) {
    const routeId = parseInt(props.match.params.id);
    const character = this.state.characters.find(character => character.id === routeId);
    if (character === undefined) {
      return <p>Personaje no encontrado</p>
    } else {
      return <CharacterDetail character={character} />
    }
  }


  render() {
    console.log(this.state.searchCheck);

    return (
      <div className="page" >
        <Header alt="Ricky y Morty logo" />
        <Switch>
          <Route exact path='/'>
            <Filters
              searchRadio={this.state.searchRadio}
              searchInput={this.state.searchInput}
              searchCheck={this.state.searchCheck}
              handleClick={this.handleClick}
              handleSearch={this.handleSearch}
              handleCheck={this.handleCheck} />
            <CharacterList characters={this.filterBySearch()} />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
