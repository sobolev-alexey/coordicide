import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'

import * as gtag from '../lib/gtag'
import ExternalMenu from './ExternalMenu'
import Shape from './Shape';
import { default as Menu, MenuLinks } from './Menu'
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

const pages = [
    { url: '/', title: 'intro' },
    { url: '/chapters', title: 'chapters' },
    { url: '/whitepaper', title: 'whitepaper' }
]

const showNav = () => {
    const navEl = document.getElementById('nav')
    navEl.style.display = 'flex'
    navEl.className = 'nav-open'
}

const closeNav = () => {
    const navEl = document.getElementById('nav')
    navEl.classList.add('nav-closing')
    setTimeout(() => {
        navEl.style.display = 'none'
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

        <img className="mobile-logo" src="/static/iota_logo.svg" />

        <div className="show-nav" onClick={showNav} />
        <div className="nav" id="nav">
            <div className="close-nav" onClick={closeNav} />

            <ExternalMenu
                className="nav-external"
                pages={externalPages}
                Link={Link}
            />

            <Menu pages={pages} />
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
        <Shape className="right-shape" color="rgba(232, 242, 248, 0.3)" width="1000px" height="1020px" />

    </div>
)
