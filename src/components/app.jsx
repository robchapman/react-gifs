import React, { Component } from 'react';
import giphy from 'giphy-api';

import GifList from './gifList';
import Gif from './gif';
import SearchBar from './searchBar';

const GIPHY_API_KEY = "kpLvUulrejFZNpjSOlziSkbCAWvJCDEK";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: false,
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <Gif id={this.state.selectedGifId} />
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
