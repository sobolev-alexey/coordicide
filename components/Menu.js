import Link from 'next/link'
import React from 'react'
import Button from './Button'

import '../styles/menu.scss'

export default ({ onClick }) => (
    <div className="menu">
        <div className="menu-logo">
            <Link prefetch href="/">
                <img src="/static/iota_logo.svg" />
            </Link>
        </div>

        <div className="menu-links">
            <Link prefetch href="/">
                <a className="menu-link">
                    Introduction
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
                Contents
            </Button>
        </div>
    </div>
)
