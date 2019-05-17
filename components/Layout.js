import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'

import * as gtag from '../lib/gtag'
import ExternalMenu from './ExternalMenu'
import Shape from './Shape';
import Menu from './Menu'
import '../styles/layout.scss'

Router.onRouteChangeComplete = url => {
    gtag.pageview(url)
}

const defaultTitle = 'Coordicide - Powered by IOTA'

const externalPages = [
    { url: 'https://iota.org', title: 'iota' },
    { url: 'https://blog.iota.org', title: 'blog' },
    { url: 'https://docs.iota.org', title: 'docs' },
    { url: 'https://ecosystem.iota.org', title: 'ecosystem' }
]

const showNav = () => {
    console.log('showNav')
    const navEl = document.getElementById('nav')
    navEl.className = 'nav-open'
}

const closeNav = () => {
    const navEl = document.getElementById('nav')
    navEl.classList.add('nav-closing')
    setTimeout(() => {
        navEl.className = 'nav'
    }, 1000)
}

export default ({ children, title = defaultTitle }) => (
    <div className="page">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>

        <Link prefetch href="/">
            <img className="mobile-logo" src="/static/iota_logo.svg" />
        </Link>

        <div className="show-nav" onClick={showNav} />
        <div className="nav" id="nav">
            <div className="close-nav" onClick={closeNav} />

            <ExternalMenu
                className="nav-external"
                pages={externalPages}
                Link={Link}
            />

            <Menu onClick={showNav} />
        </div>

        {children}

         <footer>
            <img className="footer-iota-logo" src="/static/iota_logo.svg" />

            <p>Coordicide</p>
            <p>
                Powered by{' '}
                <a href="https://iota.org" target="_blank">
                    IOTA
                </a>
            </p>
            <Shape className="footer-shape" color="rgba(108, 228, 222, 0.2)" width="393px" height="416px" />
        </footer>
    </div>
)
