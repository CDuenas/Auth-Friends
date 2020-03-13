import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default class AddFriend extends Component {
  state = {
    friend: {
      id: 7,
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/friends", this.state.friend)
      .then(res => {
        console.log(res.data);
        this.setState({ friend: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.friend.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="age"
            placeholder="age"
            value={this.state.friend.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.friend.email}
            onChange={this.handleChange}
          />
          <button>Add New Friend</button>
        </form>
      </React.Fragment>
    );
  }
}
