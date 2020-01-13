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
    this.handleChange = this.handleChange.bind(this);
  }


  // api

  componentDidMount() {

    fetchCharacters().then(characters => this.setState({
      characters: characters
    }));
  }



  // events

  handleChange(data) {
    this.setState({
      search: data
    })
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
        <Header handleChange={this.handleChange} />
        <Filters />
        <Switch>
          <Route exact path='/'>
            <CharacterList characters={this.state.characters} />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail}>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
