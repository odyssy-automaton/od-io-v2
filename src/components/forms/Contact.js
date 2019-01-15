import React from 'react';
import HubspotApi from '../../utils/hubspot-api';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      submitted: false,
      loading: false,
      error: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    const res = await new HubspotApi().addContact({
      contactType: this.props.formName,
      email: this.state.email,
      message: this.state.message,
    });

    if (res.status === 'error') {
      this.setState({
        error: res.errors[0].message,
        loading: false,
      });
    } else {
      this.setState({ submitted: true });
    }
  };

  validForm = () => {
    const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return emailReg.test(this.state.email) && this.state.message.length > 5;
  };

  render() {
    const { submitted, loading, error } = this.state;
    const { formName } = this.props;

    return (
      <div className="Form">
        {submitted ? (
          <div>
            <h5>Your message was sent.</h5>
            <p className="Large Color--White">Odyssy will get back to you shortly.</p>
          </div>
        ) : (
          <form name={formName} onSubmit={this.handleSubmit}>
            {error ? <p>{error}</p> : null}
            <p>
              <label>
                <input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Email"
                />
              </label>
            </p>
            <p>
              <label>
                <textarea
                  name="message"
                  onChange={this.handleChange}
                  placeholder="Message (including any relevant links)"
                  rows="3"
                />
              </label>
            </p>
            <p>
              <button disabled={!this.validForm() || loading} type="submit">
                Send
              </button>
            </p>
          </form>
        )}
      </div>
    );
  }
}
