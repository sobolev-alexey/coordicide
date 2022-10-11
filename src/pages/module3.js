import Lottie from 'react-lottie'
import React from 'react';
import Layout from '../components/Layout'
import PreviousPage from '../components/PreviousPage'
import NextPage from '../components/NextPage'
import Text from '../components/Text'
import Tooltip from '../components/Tooltip'
import * as graphic1 from '../static/modules/module3.json'

import '../styles/content-page.scss'

export default () => {
    const options = {
        loop: true,
        autoplay: true,
    };

    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">Module 3</Text>
                <Text className="subtitle">SPAM PROTECTION</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>DLTs require a mechanism to control the rate of transactions entering the network, as the limited resources of nodes (e.g., bandwidth, CPU) may become overwhelmed, leading to low throughput. This is similar to a highway, where a large number of vehicles entering the flow of traffic can lead to congestion.</p>
                    <p>Currently, the Tangle implements a simple spam protection mechanism based on PoW. However, controlling the rate of transaction issuance by PoW alone is impractical, as it introduces <a data-tip="true" data-for="mining_races" currentitem="false">mining races</a>. We propose an <strong>adaptive rate control</strong> mechanism which intelligently varies the difficulty of the PoW per node based on different factors, such as number of recently-issued transactions and <a data-tip="true" data-for="mana" currentitem="false">mana</a>.</p>
                    <p>It is important to note that the use of PoW as a rate control mechanism is unrelated to PoW-based consensus, which our Coordicide approach explicitly eliminates. Our rate control mechanism is designed in such a way that it does not lead to mining races, nor does it require a large amount of energy.</p>
                    
                    <Lottie 
                        options={{ ...options, animationData: graphic1.default }}
                    />
                    <p>In our model, nodes with higher amounts of <em>mana</em> have the ability to issue more transactions, without the same PoW requirements as low-reputation nodes. Regardless of a node’s <em>mana</em>, PoW difficulty increases with transaction rate. i.e. in order to issue more transactions in a short time interval, a node must increase the difficulty of the cryptographic puzzle, while for lower transaction rates a much lower difficulty would be sufficient.</p>
                    <p>We enforce a maximum transaction rate per node to further prevent spam. This system brings a double benefit:</p>
                    <ul>
                        <li>It protects the network against malicious fast actors, e.g., nodes using ASICs to spam the network and/or influence the consensus.</li>
                        <li>IOTA’s main use case is IoT, which consists of nodes with limited resources that are likely to issue transactions at a slow rate. This mechanism allows slower nodes to successfully propagate their transactions through the network.</li>
                    </ul>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="module2" title="Module 2" />
                <NextPage page="module4" title="Module 4" />
            </div>

            <Tooltip tooltipId='mana' />
            <Tooltip tooltipId='mining_races' />
        </Layout>
    )
}