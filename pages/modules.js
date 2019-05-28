import Layout from '../components/Layout'
import PreviousPage from '../components/PreviousPage'
import NextPage from '../components/NextPage'
import Text from '../components/Text'

import '../styles/content-page.scss'

export default () => {
    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">CHAPTER 4</Text>
                <Text className="subtitle">THE MODULES</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <h2>What are we trying to solve?</h2>
                    <p>Let’s start by asking two fundamental questions:</p>
                    <ul>
                        <li>
                            <em>What are we trying to achieve when we talk about “the network reaching a consensus”?</em>
                            <br />The answer is actually very simple. We want all honest nodes to maintain the same opinion about the state of the ledger. Or more simply, we want all honest nodes to agree which transactions are valid.
                        </li>
                        <li><em>Since IOTA does not have to choose a “leader” to mine blocks, what are we actually voting on?</em>
                            <br />The answer is again relatively simple. If two transactions are conflicting, they lead to a split in the Tangle. To resolve the conflict, nodes vote on a preferred transaction (the non-preferred transaction becomes an orphan).
                        </li>
                    </ul>
                    <img src="/static/modules/the_modules.png" />
                    <p>Traditional PoW-based DLT provides one set of answers to these questions, but these have significant drawbacks. PoW-based consensus in IOTA would introduce mining races and lead to increased power consumption and cost, thus limiting the network’s use in IoT.</p>
                    <p>A more suitable solution is described in the following sections.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="modularity" title="Chapter 3" />
                <NextPage page="module1" title="Module 1" />
            </div>
        </Layout>
    )
}
