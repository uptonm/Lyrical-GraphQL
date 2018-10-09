import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }
    return this.props.data.songs.map(song => {
      return (
        <li
          key={song.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {song.title}
          {/* <span className="badge badge-primary badge-pill">{song.lyrics.length}</span> */}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="container text-center">
        <h1 className="display-1">Lyrical</h1>
        <ul className="list-group">{this.renderSongs()}</ul>
      </div>
    );
  }
}

// Query to fetch all song titles from song collection
const query = gql`
  {
    songs {
      id
      title
      lyrics {
        id
      }
    }
  }
`;

export default graphql(query)(SongList);
