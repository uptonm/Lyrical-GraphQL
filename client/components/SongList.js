import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    if (this.props.data.loading) {
      return (
        <tr>
          <td>Loading...</td>
        </tr>
      );
    }
    return this.props.data.songs.map(song => {
      return (
        <tr key={song.id}>
          <td>{song.id}</td>
          <td>{song.title}</td>
          <td>Artist</td>
          <td>
            <span className="badge badge-primary badge-pill">
              {song.lyrics.length}
            </span>
          </td>
          <td>
            <button className="btn btn-sm btn-primary">Add</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th itemScope="col">Song Id</th>
              <th itemScope="col">Song Title</th>
              <th itemScope="col">Artist</th>
              <th itemScope="col">Lyrics</th>
              <th itemScope="col" />
            </tr>
          </thead>
          <tbody>{this.renderSongs()}</tbody>
        </table>
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
