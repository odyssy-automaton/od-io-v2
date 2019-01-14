import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import OdBackground from '../../components/shared/od-background/OdBackground';
import Fade from 'react-reveal/Fade';
import Contact from '../../components/forms/Contact';

import IconDesign from '../../img/icons/icon__design--multicolor.png';
import IconCode from '../../img/icons/icon__code--multicolor.png';
import IconBlockchain from '../../img/icons/icon__blockchain--multicolor.png';
import GraphicProcess from '../../img/Graphic__Od--Process.png';
import GraphicProcessCircle from '../../img/Graphic__Od--Process--Circle.png';

import '../../styles/Services.scss';

export default class ServicesPage extends Component {
  render() {
    return (
      <Layout>
        <section className="PageHeader">
          <Fade>
          <div className="PageHeader__Contents">
            <h4>Research, Design, Develop, Test, Deploy, Maintain, Improve.</h4>
            <h1>Odyssy is a decentralized collective delivering full stack design and development to the blockchain and beyond. </h1>
          </div>
          </Fade>
          <OdBackground />
        </section>
        <div className="Block Process">
          <div className="Block__Contents">
            <h4>Better. Faster. Cheaper.</h4>
            <p className="Huge">
              Our process is fluid, efficient, and participatory. Odyssy delivers maximum output with minimum input.
            </p>
            <p className="Text--Center">
              <img src={GraphicProcessCircle} alt="Odyssy Process Graphic" width="420px"/>
            </p>
          </div>
        </div>
        <div className="Block ServicesList">
          <div className="Block__Contents Columns">
            <div className="Columns__Column--100">
              <h2>Capabilities</h2>
            </div>
            <div className="Columns__Column--33">
              <img src={IconDesign} alt="design icon" width="120px" />
              <h3>Design</h3>
              <ul>
                <li>Product Design</li>
                <li>Design Thinking</li>
                <li>Branding</li>
                <li>UX Researuch</li>
                <li>UI Design</li>
                <li>Motion Graphics</li>
                <li>Iconography</li>
                <li>Typography</li>
              </ul>
            </div>
            <div className="Columns__Column--33">
              <img src={IconCode} alt="engineering icon" width="120px" />
              <h3>Engineering</h3>
              <ul>
                <li>Product Management</li>
                <li>Front End Development</li>
                <li>Back End Development</li>
                <li>Web Apps</li>
                <li>Prototyping</li>
                <li>Research & Development</li>
                <li>QA & User Testing</li>
                <li>Dev Ops</li>
              </ul>
            </div>
            <div className="Columns__Column--33">
              <img src={IconBlockchain} alt="blockchain icon" width="120px" />
              <h3>Blockchain</h3>
              <ul>
                <li>Consulting</li>
                <li>Smart Contracts</li>
                <li>Decentralized Apps (DApps)</li>
                <li>Blockchain APIs</li>
                <li>Web3 Interfaces and Toolsets</li>
                <li>Cryptoeconomics</li>
                <li>Game Theory</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Block">
          <div className="Block__Contents">
            <h4>We don’t care about the technology.</h4>
            <h2>We care about its real-world applications and impact
              on the human experience.
            </h2>
            <p className="Weight--500">We’re technology-agnostic and across protocols but like to work with:</p>
            <p>Python, Ruby, Javascript/Node, Django, Rails, React, Angular, Vue, AWS,
Heroku, IPFS, Ethereum, Solidity.
            </p>
          </div>
        </div>
        <section className="Block CTA">
          <div className="Block__Contents">
            <h3>Make <span className="Weight--500">Contact</span></h3>
            <p>Let us know about your project or idea for collaboration.</p>
            <Contact formName="contact" />
          </div>
          <OdBackground />
        </section>
      </Layout>
    );
  }
}
