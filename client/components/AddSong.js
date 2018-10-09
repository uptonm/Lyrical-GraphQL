import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class AddSong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        title: this.state.title
      }
    });
  }
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center">Add Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label for="songTitle">Song Title</label>
            <input
              type="text"
              className="form-control"
              id="songTitle"
              placeholder="Song Title"
              onChange={event => this.setState({ title: event.target.value })}
              value={this.state.title}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(AddSong);
