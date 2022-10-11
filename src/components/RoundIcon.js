import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey } from '@fortawesome/pro-light-svg-icons'

import '../styles/icon.scss'

export default ({ icon }) => (
    <div className='icon-wrapper'>
        {
            icon && icon === 'key' ? <FontAwesomeIcon icon={faKey} /> : null
        }
    </div>
)