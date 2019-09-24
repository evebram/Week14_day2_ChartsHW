import React from 'react';

import ChartSong from './ChartSong.js';

 const ChartList = (props) => {
   const songNodes = props.songs.map((song, index) => {
     return (
       <ChartSong key={index} song={song['im:name']} artist={song['im:artist']}></ChartSong>

     );
   })
   return(
      <>
      {songNodes}
      </>
    );
 }

export default ChartList;
