import { Link } from 'react-router-dom';
import React from 'react'
import Button from './Button'

import '../styles/menu.scss'

const Menu = ({ onClick }) => {
    return (
        <div className="menu">
            <div className="menu-logo">
                <Link to="/">
                    <img src="/static/iota_logo.svg" />
                </Link>
            </div>

            <div className="menu-links">
                {
                    window.location.pathname !== '/' ? (
                        <Link to="/" className="menu-link intro">
                            Introduction
                        </Link>
                    ) : null
                }
                <Link to="/" className="menu-link-mobile intro">
                    Intro
                </Link>
                <a 
                    className="btn mini menu-link"
                    download
                    href="https://files.iota.org/papers/Coordicide_WP.pdf"
                >
                    Whitepaper
                </a>
                <Button
                    icon="menu"
                    className="menu-link contents"
                    onClick={onClick}
                >
                    <span>Contents</span>
                </Button>
            </div>
        </div>
    )
}

export default Menu