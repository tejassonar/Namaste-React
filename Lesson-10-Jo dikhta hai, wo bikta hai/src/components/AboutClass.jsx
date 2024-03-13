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
      <div className="p-4 px-12 shadow-lg">
        <img
          src={profilePhoto}
          className="w-[200] h-[200] rounded-xl"
          alt="profile_pic.jpg"
        />
        <div className="pt-4">
          <h3 className="text-lg font-medium">Name: {name}</h3>
          <h5 className="text-md font-normal my-1">Role: {bio}</h5>
          <h5 className="text-md font-normal my-1">Location: {location}</h5>
          <h5 className="text-md font-normal my-1">Count: {count1}</h5>
          <button
            onClick={() => {
              this.setState({
                count1: this.state.count1 + 1,
              });
            }}
            className="border-[1px] px-1 w-8 h-8 border-black rounded-sm mr-2 "
          >
            +
          </button>
          <button
            className="border-[1px] px-1 w-8 h-8 border-black rounded-sm ml-2"
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
