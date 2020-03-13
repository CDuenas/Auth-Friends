import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Friend from "./Friend";
import AddFriend from "./AddFriend";

export default class FriendsList extends Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        // console.log(res.data);
        this.setState({ friendsList: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    // console.log(this.state.friendsList);
    return (
      <div>
        {this.state.friendsList.map(friend => {
          return (
            <Friend
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
            />
          );
        })}
        <AddFriend />;
      </div>
    );
  }
}
