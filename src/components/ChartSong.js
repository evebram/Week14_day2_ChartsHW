import React from 'react';

const ChartSong = (props) => {
  return (
    <div>
    <h3>{props.song.label}</h3>
    <p>by {props.artist.label}</p>
    </div>
  )
}

export default ChartSong;
