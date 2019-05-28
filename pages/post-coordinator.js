import Layout from '../components/Layout'
import PreviousPage from '../components/PreviousPage'
import NextPage from '../components/NextPage'
import Text from '../components/Text'
import Tooltip from '../components/Tooltip'

import '../styles/content-page.scss'

export default () => {
    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">CHAPTER 2</Text>
                <Text className="subtitle">IOTA POST-COORDINATOR</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>The goal of Coordicide is for the network to reach consensus without the Coordinator, while also ensuring it has the following attributes:</p>
                    <ul>
                        <li><em>Scalable:</em> The rate of transactions in the network is not limited by the protocol.</li>
                        <li><em>Secure:</em> An attacker cannot influence the consensus.</li>
                        <li><em>Decentralized:</em> All honest nodes can be part of the consensus process.</li>
                    </ul>
                    <p>Current DLT solutions can guarantee at most two of these three characteristics at the same time. This problem is known as the “<a href="https://github.com/ethereum/wiki/wiki/Sharding-FAQ">scalability trilemma</a>.”</p>
                    <img src="/static/post-coordinator/trilemma.gif" />
                    <p>An example of the trilemma can be found in PoW-based blockchains like Bitcoin. These networks offer security and decentralization, but lack scalability:</p>
                    <ul>
                        <li>Security: Miners complete PoW to chain blocks of transactions together. The combined computing (hash) power of the miners secures the network.</li>
                        <li>Decentralization: Miners are distributed across the network. No single miner controls the majority of the hashing power.</li>
                    </ul>
                    <p>But Bitcoin faces a fundamental problem of scalability. To preserve decentralization and security, blocks in the Bitcoin blockchain must have a limited size. This block size limit caps the rate of transactions and restricts the network’s scalability. As an increasing number of transactions are sent on the network, miners choose to validate the transactions offering the highest fees, leading to spiralling transaction costs and lengthy waiting times. The revolutionary nature of this PoW-based solution should not be understated — but at the same time, we cannot overstate its inherent constraints on network throughput.</p>
                    <p>IOTA <em>with the Coordinator</em> is scalable and secure, but it is not fully decentralized:</p>
                    <ul>
                        <li><em>Scalable:</em> Each transaction references and approves two previous ones. Transactions can be attached to the Tangle anywhere and at any time. No miners are involved.</li>
                        <li><em>Secure:</em> The Coordinator secures the network by issuing milestone transactions. Nodes only consider transactions as trustworthy when they are referenced and approved by a valid milestone.</li>
                    </ul>
                    <p>The Tangle allows users to attach new transactions to any part of the Tangle. Thanks to its DAG structure, the only requirement is that each new transaction approves two other transactions. By providing the option for multiple attachment sites and eliminating the need for blocks, the Tangle is inherently scalable.</p>
                    <p>However, while the Coordinator ensures network security, it also represents a single point of failure, and therefore restricts IOTA from being a fully decentralized network.</p>
                    <h2>An improved Tangle: decentralized and secure</h2>
                    <p>The removal of the Coordinator alone is not sufficient for achieving decentralization. In fact, the consensus mechanism originally proposed in the IOTA white paper required that the majority of transactions <em>always</em> come from honest network participants. In other words, honest actors would need to own a majority of the network’s hashing power. However, without miners, IOTA has no concept of constant, honest hashing power. The implication is that honest nodes would need to send a continuous stream of transactions, regardless of whether they are actually using the network.</p>
                    <p>The goal of Coordicide is to solve the scalability trilemma by providing a decentralized, secure network while preserving a high transaction rate. At the core of the solution is a <strong>voting mechanism</strong> through which nodes request the opinions of other nodes in order to decide which transactions should be included in the Tangle, and which should be <a data-tip="true" data-for="orphan" currentitem="false">orphaned</a>.</p>
                    <div className="animation-wrapper post-coordinator">
                        <img src="/static/post-coordinator/module_5.gif" />
                    </div>
                    <p>To remove the Coordinator, a number of challenges must be solved. Due to the complexity of the solution, Coordicide is broken down into different components. This approach makes our Coordicide proposal <strong>modular</strong>, meaning that each module can be independently replaced should new research reveal further improvements.</p>
                    <p>Our aim is to make IOTA the gold standard: enterprise-ready DLT, working together with <a href="https://blog.iota.org/iota-becomes-a-founding-member-of-new-international-association-of-trusted-blockchain-applications-b0c6417aaded">key organisations</a> and <a href="https://www.omg.org/cgi-bin/doc?omg/2019-03-03">standards bodies</a>, using <a href="https://projects.eclipse.org/proposals/eclipse-iota-trinity">open source governance</a>.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="scalability" title="Chapter 1" />
                <NextPage page="modularity" title="Chapter 3" />
            </div>

            <Tooltip tooltipId='orphan' />
        </Layout>
    )
}