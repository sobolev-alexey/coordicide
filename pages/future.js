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
                <Text className="title extra-large">Chapter 5</Text>
                <Text className="subtitle">IOTA´S FUTURE</Text>
            </div>
            <div className="content future">
                <div class="_markdown_">
                    <p>So far, we have discussed the direct implications of Coordicide for the IOTA network and its underlying technology. However, the Coordicide project enables much more than just a “better” network.</p>
                    <p>There are indirect implications that are equally fascinating, but which might not be immediately obvious. While this website does not have the scope to cover these implications in depth, we still want to offer some initial discussions around a few of the most important features.</p>
                    
                    <div className="future-icon-wrapper">
                        <img src="../static/future/future1.png"/>
                    </div>
                    <h3>Reliable Timestamps</h3>
                    <p>Instead of directly voting on the fate of transactions, we may instead vote on the credibility of timestamps. Here ‘credible’ means that the difference between the issuing timestamp of a transaction and its arrival time to the nodes is not above a certain threshold.</p>
                    <p>Whether a transaction is liked can then be locally derived i.e. by preferring the earliest transaction with a credible timestamp in the presence of conflicts. This has multiple benefits:</p>
                    <ul>
                        <li>Even devices that do not have full knowledge about the ledger state can take part in the voting process. This is extremely beneficial for syncing nodes and the IoT environment where devices have unreliable connections.</li>
                        <li>Since the network can reach consensus on which transactions carry credible timestamps, we can start trusting timestamp values and establish a totally ordered tangle. When two transactions carry the “same” timestamp we simply sort them by their transaction hash.</li>
                    </ul>
                    <p>An inability to establish an overall order has been one of the biggest drawbacks of DAG-based DLTs in relation to “smart contracts”.</p>
                    
                    <div className="future-icon-wrapper">
                        <img src="../static/future/future2.png"/>
                    </div>
                    <h3>Multiple Tangles (domains)</h3>
                    <p>Without the Coordinator, it is possible to have multiple Tangles coexisting as separate domains. Each domain can implement a different logic for the transactions it processes (through different <a data-tip="true" data-for="ixi" currentitem="false">IXI modules</a>) and associate a different meaning to the tokens it contains. Even though these domains do not necessarily share the same rules, it is still possible that transactions from one domain refer to data from another domain.</p>
                    <p>This will enable us to model extremely complex use cases with very simple building blocks. For example, resource tokens in one domain can represent the right to access certain resources, whereas asset tokens in another domain can represent the ownership of a share of a certain asset.</p>
                    <p>In addition to adding a lot of flexibility to IOTA, the modular approach enables a way of sharding network activity into separate domains, and thereby further increase IOTA’s scalability. For example, a “data-only” Tangle that contains only data transactions could be separated from a Tangle that contains only value transactions. Since data transactions can never be conflicting, transactions in this Tangle could “confirm” instantly without the involvement of any consensus mechanism. This would enable a wide array of IoT use cases that depend on immutable data.</p>
                    
                    <div className="future-icon-wrapper">
                        <img src="../static/future/future3.png"/>
                    </div>
                    <h3>Different data structures for every domain</h3>
                    <p>Since the Tangle is the most generic form of DAG — with bundles being able to reference 1 to n other transactions — it will now be possible to build completely different data structures tailored to the specific needs of a use case. By implementing a different tip selection algorithm, one could build a blockchain-like structure where the trunk and branch of a transaction always reference the previous transaction. Similarly structures like “block lattices” could easily be emulated using a different tip selection algorithm. There is really no limit to the possibilities. The modular approach guarantees the ultimate freedom of the protocol.</p>
                    
                    <div className="future-icon-wrapper">
                        <img src="../static/future/future4.png"/>
                    </div>
                    <h3>Additional rules encoded in the signature message fragment</h3>
                    <p>Since every transaction carries a “signature message fragment” that can contain arbitrary data, it is possible to encode more complex behaviors (such as certain conditions for the application of a transaction, or side-effects that are triggered automatically). These can then be parsed and applied by the nodes of that specific domain.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="module5.1.2" title="Module 5.1.2" />
                <NextPage page="conclusion" title="Chapter 6" />
            </div>

            <Tooltip tooltipId='ixi' />
        </Layout>
    )
}