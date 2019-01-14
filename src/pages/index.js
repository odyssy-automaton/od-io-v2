import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import LottieControl from '../components/shared/lottie/LottieControl';
import OdyssyLogoTypeStandard from '../img/odyssy__logo--type--standard.svg';
import heroAnimation from '../img/Intro__Animation--1.json';
import heroAnimation2 from '../img/Intro__Animation--2.json';
import Fade from 'react-reveal/Fade';
import OdBackground from '../components/shared/od-background/OdBackground';
import Contact from '../components/forms/Contact';
import '../styles/Home.scss';
// Icons
import Icon from '../components/shared/icons/Icon';
import IconDecentralized from '../img/icons/icon__decentralized--multicolor.png';
import IconCollaboration from '../img/icons/icon__collaboration--multicolor.png';
import IconIterative from '../img/icons/icon__iterative--multicolor.png';
import IconBalance from '../img/icons/icon__balance--multicolor.png';
import IconDesign from '../img/icons/icon__design--multicolor.png';
import IconCode from '../img/icons/icon__code--multicolor.png';
import IconBlockchain from '../img/icons/icon__blockchain--multicolor.png';
import IconCryptoInvert from '../img/icons/icon__crypto--multicolor--invert.png';
import IconCrypto from '../img/icons/icon__crypto--multicolor.png';

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
        <section className="Block Intro">
          <div className="CryptoAccepted">
            <Fade>
              <img src={IconCryptoInvert} />
            </Fade>
          </div>
          <div className="Block__Contents">
            <Fade up>
              <h4>The agency has evolved.</h4>
              <p className="Huge">
                We design & build at the forefront of human experience
                innovation.
              </p>
            </Fade>
          </div>
          <OdBackground />
        </section>
        <Link to="/work" className="POWLink">
        <section className="Block ProofOfWork">
          <div className="Block__Contents">
            <p className="Huge">Proof of Work</p>
            <a className="button" href="/work">View</a>
          </div>
        </section>
        </Link>
        <section className="Block Capabilities">
          <div className="Block__Contents">
          <h4>Research, Strategy, Design, Develop, Test, Deploy, Improve.</h4>
            <p className="Huge">
              <span className="Weight--500">Odyssy</span> is a decentralized
              collective delivering full stack Design & Development to the
              blockchain and beyond.
            </p>
            <div className="IconsBar">
              <img className="Icon--Medium" src={IconDesign} />
              <img className="Icon--Medium" src={IconCode} />
              <img className="Icon--Medium" src={IconBlockchain} />
            </div>
            <Link to="/services">View our capabilities <span className="Hover--Forward"><Icon name="arrow-forward" /></span></Link>
          </div>
          <OdBackground />
        </section>
        <section className="Block Network">
          <div className="Block__Contents">
            <h4>The Agency has Evolved.</h4>
            <p className="Huge">
              We are iterating on the future of work right now.
            </p>
            <div className="IconsBar">
              <img className="Icon--Medium" src={IconDecentralized} />
              <img className="Icon--Medium" src={IconBlockchain} />
              <img className="Icon--Medium" src={IconCollaboration} />
              <img className="Icon--Medium" src={IconCrypto} />
              <img className="Icon--Medium" src={IconIterative} />
              <img className="Icon--Medium" src={IconBalance} />
            </div>
            <Link to="/network">Learn more about our network <span className="Hover--Forward"><Icon name="arrow-forward" /></span></Link>
          </div>
          <OdBackground />
        </section>
        <section className="Block CTA">
          <div className="Block__Contents">
            <h3>Make <span className="Weight--500">Contact</span></h3>
            <p>Shoot us a quick message to let us know about your project or idea for collaboration.</p>
            <Contact formName="contact" />
          </div>
          <OdBackground />
        </section>
      </Layout>
    );
  }
}
