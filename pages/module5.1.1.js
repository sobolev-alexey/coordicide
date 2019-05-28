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
                <Text className="title extra-large">Module 5.1.1</Text>
                <Text className="subtitle">Cellular Consensus</Text>
            </div>
            <div className="content module-5.1.1">
                <div className="_markdown_">
                    <p>In Cellular Consensus the voting process is modelled as a <a href="https://en.wikipedia.org/wiki/Cellular_automaton">cellular automaton</a>, where nodes can be thought of as cells that monitor the states of their neighbors and adjust their opinion accordingly. The actual consensus algorithm is extremely simple and can be summarized in 5 lines of code:</p>
                    <code>
                        {'If NumberOfNeighborsPreferringTransaction(tx) > NumberOfNeighbors / 2 {'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'PreferTransaction(tx)'}<br />
                        {'} else {'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;{'DislikeTransaction(tx)'}<br />
                        {'}'}
                    </code>

                    <p>This describes a mechanism where nodes adopt the majority opinion of their neighbors, liking or disliking a transaction based on that majority.</p>
                    <p>It is extremely fast and robust. The following animation depicts a simulation of 10,000 nodes reaching a consensus in the presence of 128 conflicting transactions (different colors represent different transactions):</p>
                    
                    <div className="animation-wrapper module">
                        <img src="/static/module_5.1.1.gif" />
                    </div>
                    <p>In this example, the network reaches consensus in a matter of seconds.</p>
                    <p>Increasing the number of nodes affects the time taken for transactions to propagate in the network, but does not affect the time to reach a consensus. Decisions are made locally and in parallel no matter how many nodes participate in the network.</p>
                    <p>The fact that votes are always exchanged with the same neighbors can represent a route of attack. We add security by incorporating <em>mana</em>-based reputation in the peering process: nodes will prefer neighbors with a similar reputation. This makes it expensive for attackers to even be considered as neighbors, and adds another incentive for nodes to attain a high reputation. The network becomes increasingly secure as the amount of <em>mana</em> possessed by honest nodes grows naturally over time.</p>
                    
                    <h3>Gossip about Opinion: The organism’s immune system</h3>

                    <p>Treating nodes as cells of a living organism enables us to implement an ‘immune system’. This secures the network against attack by forcing participants to play by the rules, and provides a greater protection than traditional measures like Sybil protection. Since all neighbors are selected randomly the process by which Shimmer reaches a consensus is highly probabilistic. But at node level, the Cellular Consensus is deterministic. This allows us to verify a node’s behavior if we know the opinion of its neighbors. Bad actors that violate the rules can therefore be detected (as demonstrated below) and evicted immediately, by any of their neighbors.</p>
                    
                    <div className="animation-wrapper module">
                        <img src="../static/modules/gossip.gif"/>
                    </div>
                    <p>This idea can be formalized in the following protocol, which we call “Gossip about Opinion”:</p>
                    <ul>
                        <li>At regular intervals, every node issues a “heartbeat” message to its neighbors. This contains its current opinion and the reason why it came to that opinion, i.e. its neighbors’ opinions in the previous round.</li>
                        <li>To compress the amount of exchanged data only the difference between consecutive heartbeats is sent i.e. only those transaction hashes whose ‘liked’ status has changed.</li>
                        <li>A node signs its heartbeat messages and opinions to guarantee authenticity.</li>
                    </ul>
                    <p>This heartbeat serves multiple purposes:</p>
                    <ul>
                        <li>It forces nodes to make regular statements and remain active members of the network.</li>
                        <li>It is used to synchronize opinions between neighbors, allowing nodes to update their own opinion according to the previously described rules, without the need to proactively query other nodes.</li>
                        <li>It allows nodes to verify that their neighbors are honest - those that violate the protocol by changing their opinion can be evicted from the network immediately. Since the messages are signed, misbehaviour can be proven by tracing malicious messages back to the nodes that issued them.</li>
                    </ul>
                    <p>This approach has a number of compelling features that have not been seen in any other permissionless consensus mechanism: its asynchronous nature, the simplicity of its implementation, the efficiency of its message overhead, the speed at which it reaches consensus, and its attack resilience.</p>
                    <p>While emergent phenomena are very common in biological systems and have proven to work well in practice, it is extremely difficult to model them mathematically due to their inherently chaotic and complex nature. The approach’s biggest drawback is therefore the complexity of formalizing its scientific proofs. It would be necessary to thoroughly study Cellular Consensus in a testnet environment before it could be deployed on the mainnet.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="module5.1" title="Module 5.1" />
                <NextPage page="module5.1.2" title="Module 5.1.2" />
            </div>

            <Tooltip tooltipId='parasite_chain_attacks' />
        </Layout>
    )
}