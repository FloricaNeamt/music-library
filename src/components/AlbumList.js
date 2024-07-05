import React from "react";
import { Link, useParams } from "react-router-dom";

const AlbumList = ({ artists }) => {
  const { artistId } = useParams();
  const artist = artists[artistId];

  return (
    <div>
      <h1>{artist.name}'s Albums</h1>
      <ul>
        {artist.albums.map((album, index) => (
          <li key={index}>
            <Link to={`/artist/${artistId}/album/${index}`}>{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
