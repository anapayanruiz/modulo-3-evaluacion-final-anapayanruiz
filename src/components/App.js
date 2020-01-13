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
      characters: []
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }


  // api

  componentDidMount() {

    fetchCharacters().then(characters => this.setState({
      characters: characters
    }));
  }

  // render

  renderCharacterDetail(props) {
    console.log(props.match.params.id, this.state.characters);
    const routeId = parseInt(props.match.params.id);
    const character = this.state.characters.find(character => character.id === routeId);
    console.log(character);
    if (character === undefined) {
      return <p>Detalles personaje no encontrado</p>
    } else {
      return <CharacterDetail character={character} />
    }
  }


  render() {
    return (
      <div className="page">
        <Header />
        <Filters />
        <Switch>
          <Route exact path='/'>
            <CharacterList characters={this.state.characters} />
          </Route>
          <Route path='/characters/:id' render={this.renderCharacterDetail}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
