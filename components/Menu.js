import Link from 'next/link'
import { withRouter } from 'next/router'
import React from 'react'
import Button from './Button'

import '../styles/menu.scss'

const Menu = ({ onClick, router }) => (
    <div className="menu">
        <div className="menu-logo">
            <Link prefetch href="/">
                <img src="/static/iota_logo.svg" />
            </Link>
        </div>

        <div className="menu-links">
            {
                router.pathname !== '/' ? (
                    <Link prefetch href="/">
                        <a className="menu-link intro">
                            Introduction
                        </a>
                    </Link>
                ) : null
            }
            <Link prefetch href="/">
                <a className="menu-link-mobile intro">
                    Intro
                </a>
            </Link>
            <a 
                className="btn mini menu-link"
                download
                href="https://github.com/iotaledger/data-marketplace/raw/develop/Blueprint%20-%20Data%20Marketplace.pdf"
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

export default withRouter(Menu)