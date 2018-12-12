import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import '../styles/Home.scss';
import LottieControl from '../components/shared/lottie/LottieControl';
import OdyssyLogoTypeStandard from '../img/odyssy__logo--type--standard.svg';
import heroAnimation from '../img/Intro__Animation--1.json';
import heroAnimation2 from '../img/Intro__Animation--2.json';
import Fade from 'react-reveal/Fade'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="Hero">
          <div className="Hero__Contents">
            <Fade cascade wait={10000}>
            <img alt="Odyssy Logo Type" src={OdyssyLogoTypeStandard} />
            <p>Decentralized</p>
            <p>Autonomous</p>
            <p>Organism</p>
            </Fade>
          </div>
          <LottieControl
            animationData={heroAnimation}
            loop={false}
            swapAnimationData={heroAnimation2}
            swapLoop={true}
          />
        </section>
        <section className="Block">
          <div className="Block__Contents">
            <Fade up>
            <p className="Huge">We design & build at the forefront of human experience innovation.</p>
            </Fade>
          </div>
        </section>
        <section className="Block">
          <div className="Block__Contents">
            <p className="Huge">Proof of Work</p>
            <Link to="/work">View</Link>
          </div>
        </section>
        <section className="Block">
          <div className="Block__Contents">
            <p className="Huge"><span className="Weight--500">Odyssy</span> is a decentralized collective delivering full stack Design & Development to the blockchain and beyond.</p>
            <Link to="/services">View our capabilities</Link>
          </div>
        </section>
        <section className="Block">
          <div className="Block__Contents">
            <p className="Huge">We are iterating on the future of work right now</p>
            <Link to="/network">Learn more about our network</Link>
          </div>
        </section>
      </Layout>
    );
  }
}
