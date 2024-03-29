import React from 'react'

import '../styles/external-menu.scss'

const ExternalMenu = ({ pages }) => (
    <div className="external-menu">
        <div />
        <div className="external-menu-links">
            {pages.map(page => (
                <a href={page.url} key={page.title} className="external-menu-link" target="_blank">
                    {page.title}
                </a>
            ))}
        </div>
    </div>
)

export default ExternalMenu
