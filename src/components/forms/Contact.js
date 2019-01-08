import React from 'react';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      submitted: false,
    };
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

  validForm = () => {
    const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailReg.test(this.state.email) && this.state.message.length > 10;
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
                <input type="email" name="email" onChange={this.handleChange} placeholder="Email"/>
              </label>
            </p>
            <p>
              <label>
                <textarea name="message" onChange={this.handleChange} placeholder="Message (including any relevant links)" rows="5"/>
              </label>
            </p>
            <p>
              <button disabled={!this.validForm()} type="submit">
                Send
              </button>
            </p>
          </form>
        )}
      </div>
    );
  }
}
