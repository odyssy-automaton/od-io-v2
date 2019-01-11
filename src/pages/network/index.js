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
import IconDevfund from '../../img/icons/icon__devfund.png';
import IconEthereum from '../../img/icons/icon__ethereum.png';
import IconDecentralized from '../../img/icons/icon__decentralized--multicolor.png';
import IconCollaboration from '../../img/icons/icon__collaboration--multicolor.png';
import IconBlockchain from '../../img/icons/icon__blockchain--multicolor.png';
import IconIterative from '../../img/icons/icon__iterative--multicolor.png';
import IconBalance from '../../img/icons/icon__balance--multicolor.png';
import IconCrypto from '../../img/icons/icon__crypto--multicolor.png';

export default class NetworkPage extends Component {
  render() {
    return (
      <Layout>
        <section className="PageHeader">
          <Fade>
            <div className="PageHeader__Contents">
              <h4>The agency has evolved.</h4>
              <h1>
                Odyssy is more like a super organism, a network of autonomous
                cells incentivized to distribute value across its network and
                projects.
              </h1>
            </div>
          </Fade>
          <OdBackground />
        </section>
        <section className="Block CTA">
          <div className="Block__Contents">
            <h3>Contact <span className="Weight--500">Odyssy</span></h3>
            <p>Shoot us a quick message to let us know about your project or idea for collaboration.</p>
            <Contact formName="contact" />
          </div>
        </section>
        <div className="Block">
          <div className="Block__Contents Columns">
            <div className="Columns__Column--100">
              <h4>Decentralized Autonomous Organism</h4>
              <p className="Huge">
                The traditional agency has too much overhead. Odyssy rapidly distributes skills and knowledge as needed.
              </p>
            </div>
            <div className="Columns__Column--50 Padding--Right">
              <p>
                For the cost of an internal hire, a project gets a distributed
                team called a cell, fully autonomous and optimized to each
                project’s needs. Cells are loosely coupled, but tightly aligned
                to maintain agility and continuous iteration. Cells learn from
                each other and share what works with the network.
              </p>
              <p>
                An example cell could be comprised of Product, Design,
                Engineering, and Blockchain skillsets. Cells are highly adaptable to their environment, and remain consistently aligned with each project's current goals.
              </p>
            </div>
            <div className="Columns__Column--50">
              <img
                className="Page__Graphic"
                src={OdMesh}
                alt="mesh network graphic"
              />
            </div>
          </div>
        </div>
        <div className="Block Manifesto">
          <div className="Block__Contents">
            <div className="Columns">
              <div className="Columns__Column--100">
                <h4>Manifesto</h4>
                <p className="Huge">
                  Our core belief structure is built on autonomy, production,
                  and humanity – always with an eye to the future.
                </p>
              </div>
              <div className="Columns__Column--33">
                <img src={IconDecentralized} />
                <h4>Decentralized</h4>
                <p>Local autonomy for optimal efficiency and value distribution</p>
                <img src={IconCollaboration}/>
                <h4>Collaborative</h4>
                <p>Anti-rivalrous network structure and incentive mechanisms</p>
              </div>
              <div className="Columns__Column--33">
                <img src={IconCrypto}/>
                <h4>Crypto-Powered</h4>
                <p>Cryptocurrencies power our value capture and distribution</p>
                <img src={IconBlockchain}/>
                <h4>Transparent</h4>
                <p>Information open to all stakeholders and members</p>
              </div>
              <div className="Columns__Column--33">
                <img src={IconBalance}/>
                <h4>Balance</h4>
                <p>Balance between centralized and decentralized systems</p>
                <img src={IconIterative}/>
                <h4>Iterative</h4>
                <p>
                  Understand, Diverge, Converge, Test, Prototype, Deploy,
                  Iterate
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Block Network">
          <div className="Block__Contents">
            <h4>The Network is Incentivized</h4>
            <p className="Huge">
              We’re iterating on the future of work and value creation right
              now.
            </p>
            <div className="Columns">
              <div className="Columns__Column--50 Padding--Right">
                <h4>The Network is Tokenized</h4>
                <p>
                  The Odyssy token (ODY) captures value added to the Odyssy
                  network as a whole. All token functions (i.e. minting,
                  burning, updates) are controlled by an array of members
                  attached to a multi-sig proxy wallet.
                </p>
                <h4>Projects are Smart Contracts</h4>
                <p>
                  Every project, and subsequent milestone, is written as a smart
                  contract. Value created by a Project is instantly distributed
                  across the network in trustless fashion.
                </p>
              </div>
              <div className="Columns__Column--50">
                <h4>Shared Value Incentives</h4>
                <p>
                  If a project has its own token, a portion gets distributed to
                  the Dev Fund as well as the workers on the project. The future
                  value of these tokens incentivizes good work to fuel success
                  of the project and its token.
                </p>
                <h4>Portable Benefits</h4>
                <p>
                  We’re deploying benefit packages to our members as distributed
                  services that they own, decentralized from their employment.
                </p>
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
              <div className="Row">
                <img className="Bios__Pic" src={DekePic} alt="bio pic" />
                <div className="Title">
                  <h3>Dekan Brown</h3>
                  <h4>Full Stack Developer</h4>
                </div>
              </div>
              <div>
                <p>
                  Dekan Brown is a Colorado native, adventurer and technophile.
                  Dekan has been working as a developer for over 15 years with
                  five years in the crypto space, developing products, dapp
                  front ends and smart contracts.
                </p>
              </div>
            </div>
            <div className="Columns__Column--33">
              <div className="Row">
                <img className="Bios__Pic" src={VenPic} alt="bio pic" />
                <div className="Title">
                  <h3>Ven Gist</h3>
                  <h4>Product + Design</h4>
                </div>
              </div>
              <div>
                <p>
                  Ven Gist started as a visual designer for global brands such
                  as Adobe, Nike, and Uniqlo. He now creates within a broad spectrum
                  of design and technology focused on accelerating the utility
                  and adoption of decentralized systems and blockchain technologies.
                </p>
              </div>
            </div>
            <div className="Columns__Column--33">
              <div className="Row">
                <img className="Bios__Pic" src={SamPic} alt="bio pic" />
                <div className="Title">
                  <h3>Sam Kuhlmann</h3>
                  <h4>Product Developer</h4>
                </div>
              </div>
              <div>
                <p>
                  Sam Kuhlmann has taken a circuitous route to co-founding
                  Odyssy.io. An art degree in film, a stint in cartoon
                  production, a detour as a magazine publisher/editor and years
                  in software management roles for global brands including Audi
                  of America and The North Face have lead the way to full stack
                  web and blockchain development.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="Block CTA">
          <div className="Block__Contents">
            <h3>Join the Network</h3>
            <p>Reach out if you're interested in joining our network of
            designers, developers, and thinkers.</p>
            <Contact formName="network" />
          </div>
          <OdBackground />
        </section>
      </Layout>
    );
  }
}
