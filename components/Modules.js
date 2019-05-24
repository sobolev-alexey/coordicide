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
                <Text className="subtitle">of IOTA</Text>
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
                <Text>Connect to the network automatically, reducing the effort involved in running a node.</Text>
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
                <Text>Enable low-powered IoT devices to access the network through our adaptive rate control mechanism.</Text>
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
                <Text>Ensure your transaction gets picked up by the network and improve transaction times through an optimized tip selection algorithm.</Text>
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
                <Text>Reach a consensus in seconds through a revolutionary voting module which leverages proactive communication in the network. This allows for irreversible transactions to be made within seconds.</Text>
                <Link prefetch href="/module5">
                    <a className="btn mini">Details</a>
                </Link>
            </div>
        </div>
    )
}

