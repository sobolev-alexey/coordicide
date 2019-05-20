import React from 'react'
import Link from 'next/link'
import Text from './Text'
import Shape from './Shape';

import '../styles/content.scss'

export default () => (
    <div className="modules-wrapper">
        <div className="modules-heading-wrapper">
            <Shape className="modules-shape" color="rgba(232, 242, 248, 0.4)" width="193px" height="226px" />
            <Text className="title extra-large">BUILDING BLOCKS</Text>
            <Text className="subtitle">of IOTA</Text>
        </div>
        <div className="module">
            <img src="/static/modules/NodeIdentities.png" />
            <Text className="subtitle">Module 1</Text>
            <Text className="title">Node identities</Text>
            <Text>Build a reputation and help secure the network by being a good actor.</Text>
            <Link prefetch href="/node-identities">
                <a className="btn mini">Details</a>
            </Link>
        </div>
        <div className="module">
            <img src="/static/modules/AutoPeering.png" />
            <Text className="subtitle">Module 2</Text>
            <Text className="title">Auto-Peering</Text>
            <Text>Connect to the network automatically, reducing the effort involved in running a node.</Text>
            <Link prefetch href="/auto-peering">
                <a className="btn mini">Details</a>
            </Link>
        </div>
        <div className="module">
            <img src="/static/modules/SpamProtection.png" />
            <Text className="subtitle">Module 3</Text>
            <Text className="title">Spam Protection</Text>
            <Text>Enable low-powered IoT devices to access the network through our adaptive rate control mechanism.</Text>
            <Link prefetch href="/spam-protection">
                <a className="btn mini">Details</a>
            </Link>
        </div>
        <div className="module">
            <img src="/static/modules/CompletelyDecentralized.png" />
            <Text className="subtitle">Module 4</Text>
            <Text className="title">Tip Selection</Text>
            <Text>Ensure your transaction gets picked up by the network and improve transaction times through an optimized tip selection algorithm.</Text>
            <Link prefetch href="/tip-selection">
                <a className="btn mini">Details</a>
            </Link>
        </div>
        <div className="module">
            <img src="/static/modules/CompletelyDecentralized2.png" />
            <Text className="subtitle">Module 5</Text>
            <Text className="title">Shimmer</Text>
            <Text>Reach a consensus in seconds through a revolutionary voting module which leverages proactive communication in the network. This allows for irreversible transactions to be made within seconds.</Text>
            <Link prefetch href="/shimmer">
                <a className="btn mini">Details</a>
            </Link>
        </div>
    </div>
)

