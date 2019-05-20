import React from 'react'
import Link from 'next/link'
import Text from './Text'
import Shape from './Shape';
import Button from './Button';

import '../styles/content.scss'

export default () => (
    <div className="intro-wrapper">
        <div className="intro">
            <Shape className="intro-shape-outer" color="#ffffff" width="383px" height="434px" />
            <Shape className="intro-shape-inner" color="rgba(232, 242, 248, 0.6)" width="193px" height="218px" />
            <Text className="title">Coordicide</Text>
            <Text className="subtitle">Removing the coordinator</Text>
        </div>
        <Text className="subtitle">Our goal</Text>
        <Text>At the IOTA Foundation, we are preparing to take the most significant step to date in the maturity of the protocol. This step in effect realizes the dream of a permissionless and scalable distributed ledger technology (DLT). We refer to this event as Coordicide -- <strong>the death of the Coordinator.</strong></Text>
        <div className="intro-buttons-wrapper">
            <Link prefetch href="/intro">
                <Button
                    className="large primary"
                    icon="hexagon"
                >
                    Get started
                </Button>
            </Link>
            <Link prefetch href="/contents">
                <Button
                    className="large secondary"
                    icon="search"
                >
                    View contents
                </Button>
            </Link>
        </div>
    </div>
)

