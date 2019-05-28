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
                <Text className="title extra-large">Chapter 6</Text>
                <Text className="subtitle">Conclusion</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>
                        The goal of this website has been to introduce 
                        the concepts behind Coordicide and its various modules. 
                        The following list summarizes the implications of these modules, 
                        explaining the properties a Coordinatorless network 
                        will bring to the table:
                    </p>
                </div>
                <div className="conclusion-wrapper">
                    <div className="conclusion-topic-group-wrapper">
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/decentralizaton.png" />
                            <div className="conclusion-content-wrapper"><span className="text title">Complete decentralization</span><span className="text">Without the Coordinator, no entity will have a special role in the network. For absolute clarity: once the Coordinator is deprecated, it will not be possible for the IOTA Foundation to restart it.</span></div>
                        </div>
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/permissionless.png" />
                            <div className="conclusion-content-wrapper"><span className="text title">Permissionless network</span><span className="text">Anyone can join the network at any time. Where other DLTs have to limit their node numbers, or even introduce a permissioned approach for scalability, our approach embraces additional nodes. A greater number of honest nodes improves the security of the network by increasing the share of honest votes.</span></div>
                        </div>
                    </div>
                    <div className="conclusion-topic-group-wrapper">
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/finality.png" />
                            <div className="conclusion-content-wrapper"><span className="text title">Finality within seconds</span><span className="text">The voting process allows the network to make and finalize decisions on transactions very quickly, without having to wait for multiple additional approving transactions to increase certainty. In addition, the network can reach “true finality” (deterministic rather than probabilistic) in that an attacker with unlimited hashing power could not “reverse” the ledger state.</span></div>
                        </div>
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/reliable.png" />
                            <div className="conclusion-content-wrapper"><span className="text title">Reliable timestamping/fully ordered Tangle</span><span className="text">The transaction’s issuer (node/user) sets a timestamp at the point of issuance. Reaching a consensus about the credibility of timestamps allows us to establish a fully ordered Tangle - a big step towards smart contracts (see IOTA’s Future section).</span></div>
                        </div>
                    </div>
                    <div className="conclusion-topic-group-wrapper">
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/scalability.png" />
                            <div className="conclusion-content-wrapper"><span className="text title">Scalability in node numbers and transaction throughput</span><span className="text">There are no protocol-related bottlenecks. Scalability is limited only by hardware and the laws of physics. The removal of the Coordinator as a single entity that processes and verifies all transactions lays the foundation for a dynamic sharding process, known as economic clustering, that enables ‘real’ unlimited scalability.</span></div>
                        </div>
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/adaptive_rate.png" />
                            <div className="conclusion-content-wrapper"><span className="text title">Adaptive rate control algorithm</span><span className="text">An adaptive rate control algorithm that works on a per-node basis will make it impossible for attackers to overwhelm the network with unhealthy spam, while still allowing honest nodes to operate normally. </span></div>
                        </div>
                    </div>
                    <div className="conclusion-topic-group-wrapper">
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/reliable.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Increased reliability (a reduced need for reattachments and promotions)</span><span className="text">Determining the preferred part of the Tangle by voting enables the implementation of differing tip selection strategies through which most (if not all) honest transactions will be picked up. This reduces the need for <a data-tip="true" data-for="reattachment" currentitem="false">reattachments</a> and <a data-tip="true" data-for="promotion" currentitem="false">promotions</a>.</span></div>
                        </div>
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/security.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Security</span><span className="text">The novel sybil protection mechanism leads to extremely high amounts of mana, and, together with the additional security layers of the voting mechanism, secures the network even in the presence of a large number of adversaries.</span></div>
                        </div>
                    </div>
                    <div className="conclusion-topic-group-wrapper">
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/auto-peering.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Smart and robust auto-peering</span><span className="text">Removing the need for manual peering reduces the maintenance burden for node operators and makes the network more robust.</span></div>
                        </div>
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/feeless.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Feeless transactions</span><span className="text">The absence of miners makes IOTA transactions completely feeless, enabling micropayments for both humans and the machine-to-machine economy.</span></div>
                        </div>
                    </div>
                    <div className="conclusion-topic-group-wrapper">
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/quantum.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Quantum robustness</span><span className="text">The Winternitz one-time signature scheme makes IOTA robust against quantum computers when they become widely available.</span></div>
                        </div>
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/transactions.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Data transactions</span><span className="text">Data transactions enable use cases of the technology that go beyond finance.</span></div>
                        </div>
                    </div>
                    <div className="conclusion-topic-group-wrapper">
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/local.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Local Snapshots</span><span className="text">Local snapshots allow nodes to keep only a subset of the ledger’s history, allowing nodes with limited hardware resources to take part in the network.</span></div>
                        </div>
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/fairness.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Fairness</span><span className="text">All transactions are treated equally. There is no way to pay a premium (e.g. through increased fees) to get increased priority when being processed by the network.</span></div>
                        </div>
                    </div>
                    <div className="conclusion-topic-group-wrapper">
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/lightweight.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Lightweight</span><span className="text">Low-power devices are able to issue transactions and take part in the consensus.</span></div>
                        </div>
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/modularity.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Modularity</span><span className="text">A modular design makes it possible for the protocol’s constituent parts to be developed independently. The layered approach allows for base protocol extension in a similar way to the internet protocol itself.</span></div>
                        </div>
                    </div>
                    <div className="conclusion-topic-group-wrapper">
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/governance.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Reliable governance</span><span className="text">The non-profit organization behind IOTA streamlines the network’s adoption and future development. The absence of miners allows new features to be implemented without a collusion of interests.</span></div>
                        </div>
                        <div className="conclusion-topic-wrapper">
                            <img src="../static/conclusion/open_source.png"/>
                            <div className="conclusion-content-wrapper"><span className="text title">Open Source</span><span className="text">The technology is free, open source, and anyone can build solutions on top of it.</span></div>
                        </div>
                    </div>
                    <div className="conclusion-image-wrapper">
                        <img className="conclusion-team" src="../static/team.png"/>
                    </div>
                    <div className="conclusion-footer">
                        <i>
                        <span className="text">We hope that after reading this website and the technical papers, you now have a much greater understanding of the nature of the challenges ahead, but that you also share our enthusiasm about our path forward.</span>
                        <br /><br />
                        <span className="text">Coordicide Team — May, 2019</span></i>
                    </div>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="future" title="Chapter 5" />
                <a 
                    className="btn large primary"
                    download
                    href="https://files.iota.org/papers/Coordicide_WP.pdf"
                >
                    Download Paper
                </a>
            </div>

            <Tooltip tooltipId='promotion' />
            <Tooltip tooltipId='reattachment' />
        </Layout>
    )
}