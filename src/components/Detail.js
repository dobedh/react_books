import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { location, history } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    }
  }
}

export default Detail;
