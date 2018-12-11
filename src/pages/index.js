import React from 'react';
import Layout from '../components/layout/Layout';
import LottieControl from '../components/shared/lottie/lottie-control';

import * as heroAnimation from '../img/Intro__Animation--1.json';
import * as heroAnimation2 from '../img/Intro__Animation--2.json';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="Hero">
           <LottieControl
               animationData={heroAnimation}
               loop={false}
               swapAnimationData={heroAnimation2}
               swapLoop={true} />
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Home</h1>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
