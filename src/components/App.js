import React from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import fetchCharacters from '../services/fetchCharacters';


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
        <CharacterList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
