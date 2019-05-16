import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/pro-light-svg-icons'


export default ({ page }) => (
    <Link prefetch href={`/${page}`}>
        <div className="content-previous-link">
            <FontAwesomeIcon icon={faChevronCircleLeft} />
        </div>
    </Link>
)