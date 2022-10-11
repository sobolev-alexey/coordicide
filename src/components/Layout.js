import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../context/globalState';
import ExternalMenu from './ExternalMenu'
import Shape from './Shape';
import Menu from './Menu'
import Chapters from './Chapters'
import Disclaimer from './Disclaimer'
import '../styles/layout.scss'

const defaultTitle = 'Coordicide - Powered by IOTA'

const externalPages = [
    { url: 'https://iota.org', title: 'iota' },
    { url: 'https://blog.iota.org', title: 'blog' },
    { url: 'https://docs.iota.org', title: 'docs' },
    { url: 'https://ecosystem.iota.org', title: 'ecosystem' }
]

export default ({ children, title = defaultTitle }) => {
    const { showOverlay, showNav, closeNav } = useContext(MenuContext);

    return (
        <React.Fragment>
            {
                showOverlay ? <Chapters closeNav={closeNav} /> : (
                    <div className="page">
                        <Link to="/">
                            <img className="mobile-logo" src="/static/iota_logo.svg" />
                        </Link>

                        <div className="show-nav" onClick={showNav} />
                        <div className="nav" id="nav">
                            <div className="close-nav" onClick={closeNav} />

                            <ExternalMenu
                                className="nav-external"
                                pages={externalPages}
                            />

                            <Menu onClick={showNav} />
                        </div>

                        { children }

                        <footer className="footer" id="footer">
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
            }
            <Disclaimer />
        </React.Fragment>
    )
}
