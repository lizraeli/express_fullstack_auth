import React from "react";
import axios from "axios";

class UserHobbies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      hobbies: ""
    };
  }

  componentDidMount() {
    console.log("user hobbies mounted");
    console.log(`http://localhost:3100/users/${this.props.id}/hobbies`);
    axios
      .get(`/users/hobbies`)
      .then(res => {
        console.log("got hobbies:", res);
        this.setState({
          hobbies: res.data.hobbies
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  switchMode = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  submitForm = e => {
    e.preventDefault();
    axios
      .patch(`/users/hobbies`, {
        id: this.props.id,
        hobbies: this.state.hobbies
      })
      .then(() => {
        this.switchMode();
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { editing, hobbies } = this.state;
    console.log("user hobbies, ", this.state);

    if (!editing) {
      return (
        <div>
          <h3> {hobbies} </h3>
          <button onClick={this.switchMode}> Edit </button>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.submitForm}>
            <label>
              New Hobbies:
              <input
                value={hobbies}
                type="text"
                name="hobbies"
                onChange={this.handleChange}
              />
            </label>

            <input type="submit" value="Submit" />
          </form>

          <button onClick={this.switchMode}> Cancel </button>
        </div>
      );
    }
  }
}

export default UserHobbies;
