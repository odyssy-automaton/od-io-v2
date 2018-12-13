import React from 'react';
import Lottie from 'react-lottie';
import './LottieControl.scss';

class LottieControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultOptions: {
        loop: this.props.loop,
        autoplay: true,
        animationData: this.props.animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      },
      eventListeners: [
        {
          eventName: 'complete',
          callback: () => this.swapAnimation(),
        },
      ],
    };
  }

  swapAnimation = () => {
    if (this.props.swapAnimationData) {
      this.setState({
        defaultOptions: {
          loop: this.props.swapLoop,
          autoplay: true,
          animationData: this.props.swapAnimationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        },
      });
    }
  };

  render() {
    return (
      <div className="LottieControl">
        <Lottie
          options={this.state.defaultOptions}
          eventListeners={this.state.eventListeners}
        />
      </div>
    );
  }
}

export default LottieControl;
