import React, { useEffect, useState } from 'react'
import { withCookies } from 'react-cookie';
import Button from './Button'

import '../styles/disclaimer.scss'

const Disclaimer = ({ cookies }) => {
  const [ack, setAck] = useState(true);

  useEffect(() => {
    const ack = cookies.get('coordicide-cookie');
    if (!ack) {
      document.getElementById('footer').classList.add('cookie-bar-bottom-bar');
      setAck(false);
    }
  }, [])

  const dismiss = () => {
    cookies.set('coordicide-cookie', true, { path: '/' });
    document.getElementById('footer').classList.remove('cookie-bar-bottom-bar');
    setAck(true);
  }

  if (ack) return null;

  return (
    <div className="disclaimer">
      <span className="disclaimer-text">
        This website uses cookies to ensure you get the best experience on our
        website.&nbsp;
        <a
          className="disclaimer-link"
          href="https://www.iota.org/research/privacy-policy"
        >
          Learn more
        </a>
      </span>
      <Button className="medium primary centered" onClick={dismiss}>Dismiss</Button>
    </div>
  )
}

export default withCookies(Disclaimer)