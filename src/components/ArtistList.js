import React from "react";
import { Link } from "react-router-dom";

const ArtistList = ({ artists }) => {
  return (
    <div>
      <h1>Artists</h1>
      <ul>
        {artists.map((artist, index) => (
          <li key={index}>
            <Link to={`/artist/${index}`}>{artist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtistList;
