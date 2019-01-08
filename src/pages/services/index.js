import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import OdBackground from '../../components/shared/od-background/OdBackground';
import Fade from 'react-reveal/Fade';

import '../../styles/Services.scss';

export default class ServicesPage extends Component {
  render() {
    return (
      <Layout>
        <section className="PageHeader">
          <Fade>
          <div className="PageHeader__Contents">
            <h4>Research, Design, Develop, Test, Deploy, Maintain, Improve.</h4>
            <h1>Research, Design, Develop, Test, Deploy, Maintain, Improve.</h1>
          </div>
          </Fade>
          <OdBackground />
        </section>
        <div className="Block">
          <div className="Block__Contents">
            <h4>Introduction</h4>
            <p className="Huge">Odyssy is a decentralized collective
              delivering full stack design and
              development to the blockchain and
              beyond.
            </p>
          </div>
        </div>
        <div className="Block ServicesList">
          <div className="Block__Contents Columns">
            <div className="Columns__Column--100">
              <h2>Capabilities</h2>
            </div>
            <div className="Columns__Column--33">
              <h4>Design</h4>
              <ul>
                <li>Product Design</li>
                <li>Strategy</li>
                <li>Design Thinking</li>
                <li>Branding</li>
                <li>UX-UI</li>
                <li>Iconography</li>
                <li>Typography</li>
              </ul>
            </div>
            <div className="Columns__Column--33">
              <h4>Engineering</h4>
              <ul>
                <li>Front End Development</li>
                <li>Back End Development</li>
                <li>Dev Ops</li>
                <li>R&D</li>
                <li>Product Management</li>
                <li>QA & User Testing</li>
                <li>Web Apps</li>
              </ul>
            </div>
            <div className="Columns__Column--33">
              <h4>Blockchain</h4>
              <ul>
                <li>Smart Contract Development and Consulting</li>
                <li>Decentralized Apps (DApps)</li>
                <li>Blockchain APIs</li>
                <li>Web3 Interfaces and Toolsets</li>
                <li>Tokenomics</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Block">
          <div className="Block__Contents">
            <h4>We don’t care about the technology.</h4>
            <h2>We care about its applications and impact
              on the human experience.
            </h2>
            <p className="Weight--500">We’re technology-agnostic and cross-protocol but like to work with</p>
            <p>Python, Ruby, Javascript/Node, Django, Rails, React, Angular, Vue, AWS,
Heroku, IPFS, Ethereum, Solidity.
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}
