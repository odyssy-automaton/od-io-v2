import React from 'react';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitted = false;
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => this.setState({ submitted: true }))
      .catch((error) => alert(error));
  };

  render() {
    const { submitted } = this.state;
    const { formName } = this.props;

    return (
      <div>
        {submitted ? (
          <div>
            <h3>Thanks for making contact</h3>
          </div>
        ) : (
          <form
            name={formName}
            method="post"
            action="#"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value={formName} />
            <p hidden>
              <label>
                Don’t fill this out:{' '}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your name:
                <br />
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your email:
                <br />
                <input type="email" name="email" onChange={this.handleChange} />
              </label>
            </p>
            {formName === 'network' ? (
              <p>
                <label>
                  Your specialty:
                  <br />
                  <input
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                  />
                </label>
              </p>
            ) : null}
            <p>
              <label>
                Message:
                <br />
                <textarea name="message" onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        )}
      </div>
    );
  }
}
