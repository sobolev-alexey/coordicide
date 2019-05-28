import React from 'react'
import Link from 'next/link'
import Lottie from 'react-lottie'
import Text from './Text'
import Shape from './Shape'
import * as module1 from '../static/modules/module_1.json'
import * as module2 from '../static/modules/module_2.json'
import * as module3 from '../static/modules/module_3.json'
import * as module4 from '../static/modules/module_4.json'
import * as module5 from '../static/modules/module_5.json'

import '../styles/content.scss'

export default () => {

    const options = {
        loop: true,
        autoplay: true,
    };

    return (
        <div className="modules-wrapper">
            <div className="modules-heading-wrapper">
                <Shape className="modules-shape" color="rgba(232, 242, 248, 0.4)" width="193px" height="226px" />
                <Text className="title extra-large">BUILDING BLOCKS</Text>
            </div>
            <div className="module">
                <Lottie 
                    options={{ ...options, animationData: module1.default }}
                    height={170}
                    width={300}
                />
                <Text className="subtitle">Module 1</Text>
                <Text className="title">Node identities</Text>
                <Text>Build a reputation and help secure the network by being a good actor.</Text>
                <Link prefetch href="/module1">
                    <a className="btn mini">Details</a>
                </Link>
            </div>
            <div className="module">
                <Lottie 
                    options={{ ...options, animationData: module2.default }}
                    height={160}
                    width={250}
                />
                <Text className="subtitle">Module 2</Text>
                <Text className="title">Auto-Peering</Text>
                <Text>Connect to the network automatically, simplifying node setup and maintenance.</Text>
                <Link prefetch href="/module2">
                    <a className="btn mini">Details</a>
                </Link>
            </div>
            <div className="module">
                <Lottie 
                    options={{ ...options, animationData: module3.default }}
                    height={160}
                    width={278}
                />
                <Text className="subtitle">Module 3</Text>
                <Text className="title">Spam Protection</Text>
                <Text>Enables low-powered IoT devices to access the network through an adaptive rate control mechanism.</Text>
                <Link prefetch href="/module3">
                    <a className="btn mini">Details</a>
                </Link>
            </div>
            <div className="module">
                <Lottie 
                    options={{ ...options, animationData: module4.default }}
                    height={160}
                    width={278}
                />
                <Text className="subtitle">Module 4</Text>
                <Text className="title">Tip Selection</Text>
                <Text>An optimized tip selection algorithm improves confirmation times and ensures transaction confirmation.</Text>
                <Link prefetch href="/module4">
                    <a className="btn mini">Details</a>
                </Link>
            </div>
            <div className="module">
                <Lottie 
                    options={{ ...options, animationData: module5.default }}
                    height={165}
                    width={300}
                />
                <Text className="subtitle">Module 5</Text>
                <Text className="title">Shimmer</Text>
                <Text>The revolutionary voting module reaches a consensus in seconds. By leveraging proactive communication in the network it enables near-instant irreversible transactions.</Text>
                <Link prefetch href="/module5">
                    <a className="btn mini">Details</a>
                </Link>
            </div>
        </div>
    )
}

