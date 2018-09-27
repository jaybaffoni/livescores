import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {games: []};

    this.getScores = this.getScores.bind(this);
    this.getGames = this.getGames.bind(this);
    this.getScores();
  }

  getScores(){
    axios.get('http://www.nfl.com/liveupdate/scores/scores.json')
      .then((response) => {
        this.setState({games: response.data});
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  getGames(){
    return  Object.keys(this.state.games).map((key, i) => {
        var game = this.state.games[key]
        return(
            <div key={i} className="app-card col-md-6">
              <p className="team-text">{game.away.abbr}</p>
              <p className="score-text">{game.away.score.T ? game.away.score.T : '0'}</p>
              <br />
              <p className="team-text">{game.home.abbr}</p>
              <p className="score-text">{game.home.score.T ? game.home.score.T : '0'}</p>
              <p>{game.qtr ? game.qtr : 'Pre-Game'}</p>
            </div>
            )
        
    })
  }

  render() {
    return (
      <div className="App">
        <div className="row center">
          {this.getGames()}
        </div>
      </div>
    );
  }
}

export default App;
