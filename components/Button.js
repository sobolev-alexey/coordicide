import React from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faSearch, faHexagon, faPaperPlane } from '@fortawesome/pro-light-svg-icons'

import '../styles/button.scss'

export default ({ className, onClick, children, icon, type }) => (
    <button
        onClick={onClick}
        className={classNames('btn', className)}
        type={type || 'button'}
    >
        {
            icon && icon === 'book' ? <FontAwesomeIcon icon={faBook} /> : null
        }
        {
            icon && icon === 'search' ? <FontAwesomeIcon icon={faSearch} /> : null
        }
        {
            icon && icon === 'hexagon' ? <FontAwesomeIcon icon={faHexagon} /> : null
        }
        {
            icon && icon === 'send' ? <FontAwesomeIcon icon={faPaperPlane} /> : null
        }
        {children}
    </button>
)
