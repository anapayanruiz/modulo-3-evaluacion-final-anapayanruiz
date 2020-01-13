import React from 'react';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import fetchCharacter from '../services/FetchCharacters';


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  // api

  componentDidMount() {
    fetchCharacter().then(characters => this.setState({
      characters: characters
    }));
  }


  render() {
    return (
      <div className="page">
        <Header />
        <Filters />
        <CharacterList />
      </div>
    );
  }
}

export default App;
