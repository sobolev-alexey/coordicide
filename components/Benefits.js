import React from 'react'
import RoundIcon from './RoundIcon'
import Text from './Text'

import '../styles/content.scss'

export default () => (
    <div className="benefits-wrapper">
        <Text className="subtitle">IOTA's benefits</Text>
        <div className="key-topic-wrapper">
            <div className="key-topic">
                {/* <img src="../static/benefits/Feeless.svg" /> */}
                <RoundIcon icon="key" />
                <Text className="title">Decentralized & Permissionless</Text>
                <Text>IOTA eliminates the need for miners and other centralized entities to reach consensus. It allows anybody to take part in the network in a completely trustless and permissionless way.</Text>
            </div>
            <div className="key-topic">
                <RoundIcon icon="key" />
                <Text className="title">Finality within Seconds</Text>
                <Text>Transactions reach finality in seconds without having to wait for confirmations by external entities. A massively reduced need for reattachments increases the reliability of transactions.</Text>
            </div>
            <div className="key-topic">
                <RoundIcon icon="key" />
                <Text className="title">Scalable & Lightweight</Text>
                <Text>The absence of protocol related bottlenecks in combination with the ability of low-power devices to directly take part in the network enables the next industrial revolution - the Internet of Things.</Text>
            </div>
            <div className="key-topic">
                <RoundIcon icon="key" />
                <Text className="title">Modular & Future Proof</Text>
                <Text>A completely modular design of the protocol enables layer-based extensions of the protocol and guarantees the ability to seamlessly adopt new findings from research in the field of DLT.</Text>
            </div>
            <div className="key-topic">
                <RoundIcon icon="key" />
                <Text className="title">Feeless & Data Transaction</Text>
                <Text>Feeless transactions enable the secure transfer of data and values between humans and machines, opening up new business models based on micro-payments.</Text>
            </div>
            <div className="key-topic">
                <RoundIcon icon="key" />
                <Text className="title">Reliable Governance & Open Source</Text>
                <Text>The nonprofit organization behind IOTA drives the adoption and evolution of its free and open source technology without any collusion of interests with 3rd parties like miners.</Text>
            </div>
        </div>
    </div>
)

