import React from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import fetchCharacters from '../services/fetchCharacters';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      search: ''
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
      search: data.value
    })
  }


  // filter

  filterBySearch() {

    const characters = this.state.characters;
    const search = this.state.search;
    debugger;
    return this.filter(characters, 'name', search);
  }

  filter = (array, atribute, search) => {
    return array.filter(item => {
      return item[atribute].toLocaleLowerCase().includes(search.toLocaleLowerCase())
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
    return (
      <div className="page">
        <Header />
        <Filters handleSearch={this.handleSearch} />
        <Switch>
          <Route exact path='/'>
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
