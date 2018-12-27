import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import OdBackground from '../../components/shared/od-background/OdBackground';
import Fade from 'react-reveal/Fade';
import Contact from '../../components/forms/Contact';

import '../../styles/Network.scss';

import OdMesh from '../../img/mesh.png';
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
              <h1>
                Odyssy is more like a super organism, a network of autonomous
                cells distributing value across its network and projects.
              </h1>
            </div>
          </Fade>
          <OdBackground />
        </section>
        <section className="Page Network">
          <div className="Block">
            <div className="Block__Contents">
              <h1>Contact</h1>
              <Contact formName="contact" />
            </div>
          </div>
          <div className="Page__Contents">
            <div className="Block">
              <div>
                <p>
                  For the cost of one internal hire, a
                  project gets a distributed team called a
                  cell, fully autonomous and optimized to
                  each project’s needs. An example cell
                  could be comprised of Management,
                  Product, Design, Development, and QA
                  skillsets.
                  Cells are loosely coupled, but tightly
                  aligned to maintain agility and
                  continuous iteration. Cells learn from
                  each other and share what works with
                  the network.
                </p>
                <p>
                  Cells are loosely coupled, but tightly
                  aligned to maintain agility and
                  continuous iteration. Cells learn from
                  each other and share what works with
                  the network.
                </p>
              </div>
              <img className="Page__Graphic" src={OdMesh} alt="mesh network graphic"/>
            </div>
          </div>
          <div className="Page__Contents Page__Bios">
            <div className="Block">
              <img className="Page__Bio_Pic" src={DekePic} alt="bio pic"/>
              <div>
                <h2>Dekan Brown <small>Full Stack Developer</small></h2>
                <p>Dekan Brown is a Colorado native, adventurer and technophile. A full stack developer and co
                  founder of Odyssy.io, a crypto centric development shop focusing on the future of work with
                  developer coops and business automation using smart contracts. Other ventures include
                  Landapart.com, a Land sharing platform. Dekan has been working as a developer for over 15
                  years with five years in the crypto space, developing products, dapp front ends and solidity
                  smart contracts.
                </p>
              </div>
            </div>
            <div className="Block">
              <img className="Page__Bio_Pic" src={VenPic} alt="bio pic"/>
              <div>
                <h2>Ven Gist <small>Product + Design</small></h2>
                <p>Ven Gist started as a visual designer for global brands such as Adobe, Nike, and Uniqlo. As the
                  human experience became increasingly digitized, Ven learned code and migrated to Product
                  Design to facilitate the best possible user experience across all interactions. Following an
                  introduction to cryptocurrency in 2014, he now creates within a broad spectrum of design and
                  technology focused on accelerating the utility and adoption of blockchain technologies and
                  decentralized systems.
                </p>
              </div>
            </div>
            <div className="Block">
              <img className="Page__Bio_Pic" src={SamPic} alt="bio pic"/>
              <div>
                <h2>Sam Kuhlmann <small>Full Stack Developer</small></h2>
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
          <div className="Block">
            <div className="Block__Contents">
              <h1>Work with us</h1>
              <Contact formName="network" />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
