import React from "react";
import profilePhoto from "../assets/tejas.jpg";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      count2: 1,
      profile: {
        name: "Dummy",
        location: "Dummy",
        bio: "Dummy",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/tejassonar");
    const profile = await data.json();
    this.setState({ profile });
  }

  render() {
    // const { name, location, contact } = this.props;
    const { name, location, bio } = this.state.profile;
    const { count1, count2 } = this.state;

    return (
      <div className="contact">
        <img
          src={profilePhoto}
          style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            marginRight: 30,
          }}
          alt="profile_pic.jpg"
        />
        <div>
          <h3>Name: {name}</h3>
          <h5>Location: {location}</h5>
          <h5>contact: {bio}</h5>
          <h5>Count: {count1}</h5>
          <button
            onClick={() => {
              this.setState({
                count1: this.state.count1 + 1,
              });
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              this.setState({
                count1: this.state.count1 - 1,
              });
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default AboutClass;
