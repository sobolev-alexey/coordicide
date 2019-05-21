import React from 'react'
import RoundIcon from './RoundIcon'
import Text from './Text'
import Shape from './Shape';

import '../styles/content.scss'

export default () => (
    <div className="benefits-wrapper">
        <div className="benefits-heading-wrapper">
            <Shape className="benefits-shape" color="#ffffff" width="193px" height="226px" />
            <Text className="title extra-large">Benefits</Text>
            <Text className="subtitle">of IOTA</Text>
        </div>
        <div className="key-topic-wrapper">
            <div className="key-topic">
                <img src="../static/benefits/decentralized.png" />
                <Text className="title">Decentralized & Permissionless</Text>
                <Text>IOTA eliminates the need for miners and other centralized entities to reach consensus. It allows anybody to take part in the network in a completely trustless and permissionless way.</Text>
            </div>
            <div className="key-topic">
                <img src="../static/benefits/finality.png" />
                <Text className="title">Finality within Seconds</Text>
                <Text>Transactions reach finality in seconds without having to wait for confirmations by external entities. A massively reduced need for reattachments increases the reliability of transactions.</Text>
            </div>
            <div className="key-topic">
                <img src="../static/benefits/scalability.png" />
                <Text className="title">Scalable & Lightweight</Text>
                <Text>The absence of protocol related bottlenecks in combination with the ability of low-power devices to directly take part in the network enables the next industrial revolution - the Internet of Things.</Text>
            </div>
            <div className="key-topic">
                <img src="../static/benefits/modular.png" />
                <Text className="title">Modular & Future Proof</Text>
                <Text>A completely modular design of the protocol enables layer-based extensions of the protocol and guarantees the ability to seamlessly adopt new findings from research in the field of DLT.</Text>
            </div>
            <div className="key-topic">
                <img src="../static/benefits/feeless.png" />
                <Text className="title">Feeless & Data Transaction</Text>
                <Text>Feeless transactions enable the secure transfer of data and values between humans and machines, opening up new business models based on micro-payments.</Text>
            </div>
            <div className="key-topic">
                <img src="../static/benefits/reliable.png" />
                <Text className="title">Reliable Governance & Open Source</Text>
                <Text>The nonprofit organization behind IOTA drives the adoption and evolution of its free and open source technology without any collusion of interests with 3rd parties like miners.</Text>
            </div>
        </div>
    </div>
)

