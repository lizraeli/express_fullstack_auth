import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";

import NewUser from "./NewUser";
import LoginUser from "./LoginUser";
import UserHobbies from "./UserHobbies";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    // try to get user
  }
  setUser = user => {
    this.setState({ user: user });
  };

  renderLogin = () => {
    return <LoginUser setUser={this.setUser} />;
  };

  renderUserHobbies = props => {
    const { user } = this.state;
    if (!user) {
      return <div> must log in first </div>;
    }
    return <UserHobbies id={user.id} />;
  };

  render() {
    console.log("users: ", this.state);
    const { user } = this.state;
    return (
      <div className="App">
        {user ? `welcome, ${user.username}` : ""}
        <Route path="/users/new" component={NewUser} />
        <Route path="/users/login" render={this.renderLogin} />
        <Route path="/users/hobbies" render={this.renderUserHobbies} />
      </div>
    );
  }
}

export default Users;
