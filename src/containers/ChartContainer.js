import React, { Component } from 'react';
import ChartList from '../components/ChartList.js';
import ChartSong from '../components/ChartSong.js';

class ChartContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      topTwenty: []
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({topTwenty: songs.feed.entry}))
    .catch(err => console.error);
  }

  render() {
    return (
      <div>
      <h1>The UK Charts Top 20</h1>
      <ChartList songs={this.state.topTwenty} />
      </div>
    );
  }

}

export default ChartContainer;
