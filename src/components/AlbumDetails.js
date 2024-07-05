import React from "react";
import { useParams } from "react-router-dom";

const AlbumDetails = ({ artists }) => {
  const { artistId, albumId } = useParams();
  const album = artists[artistId].albums[albumId];

  return (
    <div>
      <h1>{album.title}</h1>
      <p>{album.description}</p>
      <h2>Songs</h2>
      <ul>
        {album.songs.map((song, index) => (
          <li key={index}>
            {song.title} - {song.length}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumDetails;
