import React, { Component } from 'react';
import Layout from '../../components/layout/Layout';
import OdBackground from '../../components/shared/od-background/OdBackground';
import Fade from 'react-reveal/Fade';

export default class NetworkPage extends Component {
  render() {
    return (
      <Layout>
      <section className="PageHeader">
        <Fade>
        <div className="PageHeader__Contents">
          <h1>Odyssy is more like a super organism, a network of autonomous cells distributing value across its network and projects.</h1>
        </div>
        </Fade>
        <OdBackground />
      </section>
      <section className="Page">
        <div className="Block">
          <div className="Block__Contents">
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          </div>
        </div>
        <div className="Page__Contents">
          <p>Aliquam id diam maecenas ultricies mi. Sed adipiscing diam donec adipiscing tristique risus. Interdum consectetur libero id faucibus nisl. Elementum facilisis leo vel fringilla. Amet mattis vulputate enim nulla aliquet porttitor lacus. Quis auctor elit sed vulputate mi sit amet mauris. In tellus integer feugiat scelerisque varius. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Placerat orci nulla pellentesque dignissim enim sit amet. In mollis nunc sed id semper risus in hendrerit. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.</p>
        </div>
      </section>
      </Layout>
    );
  }
}
