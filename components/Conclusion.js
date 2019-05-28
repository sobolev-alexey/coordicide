import React from 'react'
import Text from './Text'

import '../styles/content.scss'

export default () => {

    return (
        <div className="conclusion-wrapper">
            <div className="conclusion-topic-group-wrapper">
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/decentralizaton.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Complete decentralization</Text>
                        <Text>Without the Coordinator, no entity will have a special role in the network. For absolute clarity: once the Coordinator is deprecated, it will not be possible for the IOTA Foundation to restart it.</Text>
                    </div>
                </div>
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/permissionless.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Permissionless network</Text>
                        <Text>Anyone can join the network at any time. Where other DLTs have to limit their node numbers, or even introduce a permissioned approach for scalability, our approach embraces additional nodes. A greater number of honest nodes improves the security of the network by increasing the share of honest votes.</Text>
                    </div>
                </div>
            </div>
            <div className="conclusion-topic-group-wrapper">
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/finality.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Finality within seconds</Text>
                        <Text>The voting process allows the network to make and finalize decisions on transactions very quickly, without having to wait for multiple additional approving transactions to increase certainty. In addition, the network can reach “true finality” (deterministic rather than probabilistic) in that an attacker with unlimited hashing power could not “reverse” the ledger state.</Text>
                    </div>
                </div>
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/reliable.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Reliable timestamping/fully ordered Tangle</Text>
                        <Text>The transaction’s issuer (node/user) sets a timestamp at the point of issuance. Reaching a consensus about the credibility of timestamps allows us to establish a fully ordered Tangle - a big step towards smart contracts (see IOTA’s Future section).</Text>
                    </div>
                </div>
            </div>
            <div className="conclusion-topic-group-wrapper">
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/scalability.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Scalability in node numbers and transaction throughput</Text>
                        <Text>There are no protocol-related bottlenecks. Scalability is limited only by hardware and the laws of physics. The removal of the Coordinator as a single entity that processes and verifies all transactions lays the foundation for a dynamic sharding process, known as economic clustering, that enables ‘real’ unlimited scalability.</Text>
                    </div>
                </div>
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/adaptive_rate.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Adaptive rate control algorithm</Text>
                        <Text>An adaptive rate control algorithm that works on a per-node basis will make it impossible for attackers to overwhelm the network with unhealthy spam, while still allowing honest nodes to operate normally. </Text>
                    </div>
                </div>
            </div>
            <div className="conclusion-topic-group-wrapper">
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/reliable.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Increased reliability (a reduced need for reattachments and promotions)</Text>
                        <Text>Determining the preferred part of the Tangle by voting enables the implementation of differing tip selection strategies through which most (if not all) honest transactions will be picked up. This reduces the need for <a data-tip data-for='reattachment'>reattachments</a> and <a data-tip data-for='promotion'>promotions</a>.</Text>
                    </div>
                </div>
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/security.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Security</Text>
                        <Text>The novel sybil protection mechanism leads to extremely high amounts of mana, and, together with the additional security layers of the voting mechanism, secures the network even in the presence of a large number of adversaries.</Text>
                    </div>
                </div>
            </div>
            <div className="conclusion-topic-group-wrapper">
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/auto-peering.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Smart and robust auto-peering</Text>
                        <Text>Removing the need for manual peering reduces the maintenance burden for node operators and makes the network more robust.</Text>
                    </div>
                </div>
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/feeless.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Feeless transactions</Text>
                        <Text>The absence of miners makes IOTA transactions completely feeless, enabling micropayments for both humans and the machine-to-machine economy.</Text>
                    </div>
                </div>
            </div>
            <div className="conclusion-topic-group-wrapper">
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/quantum.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Quantum robustness</Text>
                        <Text>The Winternitz one-time signature scheme makes IOTA robust against quantum computers when they become widely available.</Text>
                    </div>
                </div>
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/transactions.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Data transactions</Text>
                        <Text>Data transactions enable use cases of the technology that go beyond finance.</Text>
                    </div>
                </div>
            </div>
            <div className="conclusion-topic-group-wrapper">
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/local.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Local Snapshots</Text>
                        <Text>Local snapshots allow nodes to keep only a subset of the ledger’s history, allowing nodes with limited hardware resources to take part in the network.</Text>
                    </div>
                </div>
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/fairness.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Fairness</Text>
                        <Text>All transactions are treated equally. There is no way to pay a premium (e.g. through increased fees) to get increased priority when being processed by the network.</Text>
                    </div>
                </div>
            </div> 
            <div className="conclusion-topic-group-wrapper">
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/lightweight.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Lightweight</Text>
                        <Text>Low-power devices are able to issue transactions and take part in the consensus.</Text>
                    </div>
                </div>
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/modularity.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Modularity</Text>
                        <Text>A modular design makes it possible for the protocol’s constituent parts to be developed independently. The layered approach allows for base protocol extension in a similar way to the internet protocol itself.</Text>
                    </div>
                </div>
            </div> 
            <div className="conclusion-topic-group-wrapper">
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/governance.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Reliable governance</Text>
                        <Text>The non-profit organization behind IOTA streamlines the network’s adoption and future development. The absence of miners allows new features to be implemented without a collusion of interests.</Text>
                    </div>
                </div>
                <div className="conclusion-topic-wrapper">
                    <img src="../static/conclusion/open_source.png" />
                    <div className="conclusion-content-wrapper">
                        <Text className="title">Open Source</Text>
                        <Text>The technology is free, open source, and anyone can build solutions on top of it.</Text>
                    </div>
                </div>
            </div> 
            <div className="conclusion-footer">
                <i>
                <Text>We hope that after reading this website and the technical papers, you now have a much greater understanding of the nature of the challenges ahead, but that you also share our enthusiasm about our path forward.</Text>
                <br /><br />
                <Text>Coordicide Team — May, 2019</Text>
                </i>
            </div>
         </div>
    )
}

