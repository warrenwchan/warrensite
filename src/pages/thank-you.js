import React, {Component} from 'react';
import Link from 'gatsby-link';

class ThankYou extends Component {
  state = {  }
  render() {
    return (
      <div>
        <h1>Thank you</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default ThankYou;
