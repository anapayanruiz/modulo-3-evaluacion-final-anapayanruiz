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

  }


  // api

  componentDidMount() {

    fetchCharacters().then(characters => this.setState({
      characters: characters
    }));
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
          <Route>
            <CharacterDetail path='/characters/:id' />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
