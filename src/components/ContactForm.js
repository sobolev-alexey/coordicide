import React from 'react';
import Button from './Button'
import '../styles/contact-form.scss'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acceptedDisclaimer: false,
      newsletter: false,
      name: '',
      email: '',
      message: '',
      captcha: null,
      loading: false,
      success: false,
      error: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  selectItem(type, title) {
    this.setState({ [type]: title });
  }

  async submit(e) {
    e.preventDefault();
    const {
        captcha, name, email, acceptedDisclaimer, newsletter, message, loading,
    } = this.state;

    if (loading) return;

    if (!acceptedDisclaimer || !name || !email || !message) {
      return this.setState({ error: 'Please fill out all required fields marked with *' });
    }

    this.setState({ success: true });
    // if (!captcha) {
    //   return this.setState({ error: 'Please complete the captcha' });
    // }

    // this.setState({ loading: true }, async () => {
    //   const packet = { captcha, name, email, acceptedDisclaimer, newsletter, message };

    //   axios
    //     .post(emailConfig.url, packet)
    //     .then(() => {
    //       this.setState({ success: true });
    //     })
    //     .catch(error => {
    //       console.log('sent email', error);
    //       this.setState({ success: false, error });
    //     });
    // });
  }

  render() {
    const {
      acceptedDisclaimer, name, email, message, success, error, captcha, loading, newsletter,
    } = this.state;

    return (
      <section className="contact-form">
        {!success ? (
          <form className="form" onSubmit={this.submit}>
            <h2 className="form-heading">
                Get in Touch with our Research Team
            </h2>
            {error && <p className="error">{error}</p>}
            <section className="input-form-wrapper">
              <div className="column-form-wrapper">
                <input
                  className="input"
                  type="text"
                  placeholder="Name *"
                  value={name}
                  name="name"
                  onChange={this.handleInputChange}
                />
                <input
                  className="input"
                  type="email"
                  placeholder="Email *"
                  value={email}
                  name="email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="column-form-wrapper">
                <textarea
                  className="textarea"
                  value={message}
                  placeholder="Message *"
                  name="message"
                  onChange={this.handleInputChange}
                />
              </div>
            </section>
            <section className="checkbox-wrapper">
              <label className="label">
                <input
                  className="checkbox"
                  name="acceptedDisclaimer"
                  type="checkbox"
                  checked={acceptedDisclaimer}
                  onChange={this.handleInputChange}
                />
                * <strong>Acknowledgement</strong> of{' '}
                <a target="_blank" href='#'>Disclaimer clause</a>
              </label>
              {/* <label className="label">
                <input
                  className="checkbox"
                  name="newsletter"
                  type="checkbox"
                  checked={newsletter}
                  onChange={this.handleInputChange}
                />
                Please add me to the newsletter
              </label> */}
            </section>
            <section className="control-wrapper">
              {/* <div className="recaptcha-container">
                <Recaptcha sitekey={emailConfig.recaptchaSiteKey} verifyCallback={this.verify} />
              </div> */}
              {
                  !loading && (
                    <Button
                      type="submit" 
                      className="medium secondary centered" 
                      onClick={this.submit}
                    >
                      Submit
                    </Button>
                  )
              }
              {loading && <p className="error">Sending</p>}
            </section>
          </form>
        ) : (
          <div className="success-wrapper">
            <p className="success">Your message has been sent!</p>
          </div>
        )}

        <div className="bottom" />
      </section>
    );
  }
}

export default ContactForm;
