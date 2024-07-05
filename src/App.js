import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import data from "./data.json";
import "./App.css";

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <Container fluid className="p-3">
      <Row>
        <Col md={4}>
          <h2>Artists</h2>
          {data.map((artist) => (
            <Card key={artist.name} className="mb-3">
              <Card.Body>
                <Card.Title>{artist.name}</Card.Title>
                <ListGroup>
                  {artist.albums.map((album) => (
                    <ListGroup.Item
                      key={album.title}
                      action
                      onClick={() => handleAlbumClick(album)}
                    >
                      {album.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={8}>
          {selectedAlbum ? (
            <Card className="selected-album-card">
              <Card.Body>
                <Card.Title>{selectedAlbum.title}</Card.Title>
                <Card.Text>{selectedAlbum.description}</Card.Text>
                <ListGroup>
                  {selectedAlbum.songs.map((song) => (
                    <ListGroup.Item key={song.title}>
                      {song.title} - {song.length}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          ) : (
            <h2>Select an album to view details</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
