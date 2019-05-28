import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileInvoice } from '@fortawesome/pro-light-svg-icons'
import Text from './Text'

import '../styles/content.scss'

export default () => (
    <div className="papers-wrapper">
        <div className="paper">
            <Text className="title">Whitepaper</Text>
            <Text className="mini">Formal Presentation of Our Coordicide Solution</Text>
            <a 
                className="btn medium primary"
                download
                href="https://files.iota.org/papers/Coordicide_WP.pdf"
            >
                <FontAwesomeIcon icon={faFileInvoice} />
                Download
            </a>
            <Text className="micro with-dot">Updated 28 May 2019</Text>
        </div>
        <span className="separator" />
        <div className="paper">
            <Text className="title">FPC PAPER 1.0</Text>
            <Text className="mini">Fast Probabilistic Consensus Paper</Text>
            <a 
                className="btn medium secondary"
                download
                href="https://arxiv.org/pdf/1905.10895.pdf"
            >
                <FontAwesomeIcon icon={faFileInvoice} />
                Download
            </a>
            <Text className="micro with-dot">Updated 28 May 2019</Text>
        </div>
    </div>
)

