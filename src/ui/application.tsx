import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import withStateHelpers from 'react-state-helpers';

@withStateHelpers
export default class Application extends Component {
  didClickButton = () => {
    const { mut, values: { clickCount } } = this.props;


    if (clickCount % 2 === 0) {
      toast.warn(`It's over Anakin!`);
    } else {
      toast.info('I have the high ground!');
    }

    mut('clickCount')(clickCount + 1);

  }

  render() {
    const { values: { clickCount } } = this.props;

    return (
      <div>
        <ToastContainer />


        I have the high ground!

        <button onClick={this.didClickButton}>Click Me</button>
        <br />
        Clicked {clickCount} times!
      </div>
    );
  }
}
