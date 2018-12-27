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
            <h1>The recipe for success calls for equal parts Design, Engineering, and Strategy. Add some Blockchain for spice.</h1>
          </div>
          </Fade>
          <OdBackground />
        </section>
        <section className="Page Services">
          <div className="Page__Contents">
            <div className="Block">
              <div>
                <h3>Introduction</h3>
                <h2>Odyssy is a decentralized collective
                  delivering full stack design and
                  development to the blockchain and
                  beyond.
                </h2>
              </div>
            </div>
            <div className="Block">
              <ul>
                <li><h4>Decentralized</h4><p>Local autonomy for optimal efficiency</p></li>
                <li><h4>Transparent</h4><p>Information open to all stakeholders</p></li>
                <li><h4>Collaborative</h4><p>Anti-rivalrous network structure</p></li>
              </ul>
              <ul>
                <li><h4>Trustless</h4><p>Value Creation over Perception</p></li>
                <li><h4>Balance</h4><p>Balance between centralized and
                  decentralized</p></li>
                <li><h4>Iterative</h4><p>Understand, Diverge, Converge, Test,
                  Prototype, Deploy, Iterate</p></li>
              </ul>
            </div>

            <div className="Block">
              <div>
                <h3>We don’t care about the technology.</h3>
                <h2>We care about its applications and impact
                  on the human experience.
                </h2>
              </div>
            </div>
            <div className="Block">
              <ul>
                <li><h4>Product Design</h4></li>
                <li><h4>Strategy</h4></li>
                <li><h4>Design Thinking</h4></li>
                <li><h4>Branding</h4></li>
                <li><h4>UX-UI</h4></li>
                <li><h4>Iconography</h4></li>
                <li><h4>Typography</h4></li>
              </ul>
              <ul>
                <li><h4>Front End Development</h4></li>
                <li><h4>Back End Development</h4></li>
                <li><h4>Dev Ops</h4></li>
                <li><h4>R&D</h4></li>
                <li><h4>Product Management</h4></li>
                <li><h4>QA & User Testing</h4></li>
                <li><h4>Web Apps</h4></li>
              </ul>
              <ul>
                <li><h4>Smart Contract Development and Consulting</h4></li>
                <li><h4>Decentralized Apps (DApps)</h4></li>
                <li><h4>Blockchain APIs</h4></li>
                <li><h4>Web3 Interfaces and Toolsets</h4></li>
                <li><h4>Tokenomics</h4></li>
              </ul>
            </div>

            <div className="Block">
              <div>
                <h3>We’re technology-agnostic and cross-protocol but like to work with</h3>
                <p>Python, Ruby, Javascript/Node, Django, Rails, React, Angular, Vue, AWS,
Heroku, IPFS, Ethereum, Solidity.
                </p>
              </div>
            </div>

          </div>
        </section>
      </Layout>
    );
  }
}
