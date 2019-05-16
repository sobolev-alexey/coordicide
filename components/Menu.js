import Link from 'next/link'
import React from 'react'

import '../styles/menu.scss'

const MenuLinks = ({ pages }) => (
    <div className="menu-links">
        {pages.map(page => (
            <Link prefetch href={page.url} key={page.title}>
                <a className="menu-link">
                    {page.title}
                </a>
            </Link>
        ))}
    </div>
)

const Menu = ({ pages }) => (
    <div className="menu">
        <div className="menu-logo">
            <Link href={pages[0].url} key={pages[0].title}>
                <a><img src="/static/iota_logo.svg" /></a>
            </Link>
        </div>

        <MenuLinks pages={pages} />
    </div>
)

export default Menu
export { MenuLinks }
