import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import withStateHelpers from 'react-state-helpers';

export interface Props {
  mut: (property: string) => (nextValue: any) => void,
  values: { clickCount: number }
}

@withStateHelpers
export default class Application extends React.Component<Props> {
  didClickButton = () => {
    const { mut, values: { clickCount } } = this.props;


    if (clickCount % 2 !== 1) {
      toast.warn(`It's over Anakin!`);
    } else {
      toast.info('I have the high ground!');
    }

    mut('clickCount')((clickCount || 0) + 1);

  }

  render() {
    const { values: { clickCount } } = this.props;

    return (
      <div>
        <ToastContainer />


        I have the high ground!

        <button onClick={this.didClickButton}>Click Me</button>
        <br />
        Clicked {clickCount || 0} times!
      </div>
    );
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }
}
