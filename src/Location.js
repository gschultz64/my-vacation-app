import React, {Component} from "react";

class Location extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.address}</p>
        <p><small>This place is a {this.props.type}</small></p>
      </div>
    )
  }
}

export default Location