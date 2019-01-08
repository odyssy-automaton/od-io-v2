import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import OdBackground from '../../components/shared/od-background/OdBackground';
import Fade from 'react-reveal/Fade';
import Contact from '../../components/forms/Contact';

import '../../styles/Network.scss';

import OdMesh from '../../img/Graphic__Od--Mesh.png';
import DekePic from '../../img/deke.png';
import SamPic from '../../img/sam.png';
import VenPic from '../../img/ven.png';

export default class NetworkPage extends Component {
  render() {
    return (
      <Layout>
        <section className="PageHeader">
          <Fade>
            <div className="PageHeader__Contents">
              <h4>The Digital Agency, Evolved.</h4>
              <h1>
                Odyssy is more like a super organism, a network of autonomous
                cells incentivized to distribute value across its network and projects.
              </h1>
            </div>
          </Fade>
          <OdBackground />
        </section>
          <div className="Block">
            <div className="Block__Contents Columns">
              <div className="Columns__Column--50">
                <p>
                  For the cost of an internal hire, a project gets a distributed team called a cell, fully autonomous and optimized to each project’s needs. Cells are loosely coupled, but tightly aligned to maintain agility and continuous iteration. Cells learn from each other and share what works with the network.
                </p>
                <p>
                  An example cell could be comprised of Product, Design, Engineering, and Blockchain skillsets.
                  <img className="Page__Graphic" src={OdMesh} alt="mesh network graphic"/>
                </p>
              </div>
              <div className="Columns__Column--50">
                <h2>Start a Project</h2>
                <Contact formName="contact" />
              </div>
            </div>
          </div>
          <div className="Block Manifesto">
            <h2>Manifesto</h2>
            <div className="Block__Contents">
              <div className="Columns">
                <div className="Columns__Column--50">
                  <h4>Decentralized</h4>
                  <p>Local autonomy for optimal efficiency</p>
                  <h4>Transparent</h4>
                  <p>Information open to all stakeholders</p>
                  <h4>Collaborative</h4>
                  <p>Anti-rivalrous network structure</p>
                </div>
                <div className="Columns__Column--50">
                  <h4>Trustless</h4>
                  <p>Value Creation over Perception</p>
                  <h4>Balance</h4>
                  <p>Balance between centralized and decentralized</p>
                  <h4>Iterative</h4>
                  <p>Understand, Diverge, Converge, Test, Prototype, Deploy, Iterate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Block Bios">

            <div className="Block__Contents Columns">
              <div className="Columns__Column--100">
                <h2>Core Team</h2>
              </div>
              <div className="Columns__Column--33">
                <img className="Bios__Pic" src={DekePic} alt="bio pic"/>
                <div>
                  <h3>Dekan Brown</h3>
                  <h4>Full Stack Developer</h4>
                  <p>Dekan Brown is a Colorado native, adventurer and technophile. A full stack developer and co
                    founder of Odyssy.io, a crypto centric development shop focusing on the future of work with
                    developer coops and business automation using smart contracts. Other ventures include
                    Landapart.com, a Land sharing platform. Dekan has been working as a developer for over 15
                    years with five years in the crypto space, developing products, dapp front ends and solidity
                    smart contracts.
                  </p>
                </div>
              </div>
              <div className="Columns__Column--33">
                <img className="Bios__Pic" src={VenPic} alt="bio pic"/>
                <div>
                  <h3>Ven Gist</h3>
                  <h4>Product + Design</h4>
                  <p>Ven Gist started as a visual designer for global brands such as Adobe, Nike, and Uniqlo. As the
                    human experience became increasingly digitized, Ven learned code and migrated to Product
                    Design to facilitate the best possible user experience across all interactions. Following an
                    introduction to cryptocurrency in 2014, he now creates within a broad spectrum of design and
                    technology focused on accelerating the utility and adoption of blockchain technologies and
                    decentralized systems.
                  </p>
                </div>
              </div>
              <div className="Columns__Column--33">
                <img className="Bios__Pic" src={SamPic} alt="bio pic"/>
                <div>
                  <h3>Sam Kuhlmann</h3>
                  <h4>Full Stack Developer</h4>
                  <p>Sam Kuhlmann has taken a circuitous route to co-founding Odyssy.io. An art degree in film,
                    a stint in cartoon production, a detour as a magazine publisher/editor and years in software
                    management roles for global brands including Audi of America and The North Face have lead
                    the way to full stack web and blockchain development. He blends a passion for technology
                    with a diverse and extensive history in the business of software on the web. Excitement about
                    blockchain’s potential to advance social good and serve the underserved attracted him to the
                    crypto space.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Block">
            <div className="Block__Contents">
              <h2>Network</h2>
              <h3>Reach out if you're interested in joining our network of designers, developers, and thinkers.</h3>
              <Contact formName="network" />
            </div>
          </div>
      </Layout>
    );
  }
}
