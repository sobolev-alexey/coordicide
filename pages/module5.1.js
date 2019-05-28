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
                <Text className="title extra-large">Module 5.1</Text>
                <Text className="subtitle">Shimmer</Text>
            </div>
            <div className="content module-5.1">
                <div className="_markdown_">
                    <p>The Shimmer voting scheme is named after an extraordinary behavior seen in nature. Bees <a href="http://digg.com/video/honeybee-nest-shimmering">“synchronize” their movement to defend themselves against predators.</a> They do this without any centralized entity, and only know when to “change their state” by observing the behavior of their <strong>peers.</strong></p>
                    <p>Individual autonomous agents that act according to some predefined rules can be found in many systems in nature, such as bees, ants, schools of fish and even in some areas of physics. Very simple rules can create incredibly complex features that, over time, manifest as <strong>emergent</strong> properties of a system. The Shimmer consensus mechanism works in the same way. Instead of trying to reconstruct the opinion of every other node, we care only about the opinions of a very small subset of nodes and let consensus be formed <strong>organically</strong> as an emergent property of the network.</p>
                    <p>When a conflict arises under Shimmer the nodes iteratively exchange opinions about which of the conflicting transactions they prefer, until eventually a consensus is reached. The nodes obtain a global view of the preferred part of the Tangle, which is of crucial importance in guaranteeing consensus. At some point a node may further decide to mark its decision as <em>finalized.</em> This means it stops its involvement in the voting process, and will never deviate from that opinion again, even in the case of an overwhelming opinion change (due to an attack).</p>
                    
                    <div className="animation-wrapper module51">
                        <img src="../static/modules/voting.gif" />
                    </div>
                    <p>As Shimmer will be used for consensus in the Tangle, ‘liking’ or ‘disliking’ a transaction has wider consequences. If a transaction is ‘liked’ by a node, then it must also ‘like’ all other transactions that are directly or indirectly referenced. Conversely, if a transaction is ‘disliked’, then no transaction that references this transaction can be ‘liked’.</p>
                    
                    <div className="animation-wrapper">
                        <img src="../static/modules/reliabale3.png" />
                    </div>
                    <p>It is important to note that it is not necessary to vote on every transaction. Transactions that have no conflicts with any other transaction can be considered ‘liked’ based on local modifiers alone (i.e., after a certain time has elapsed). Votes are only required to resolve conflicts and edge cases.</p>
                    <p>Nodes will reject votes that ‘prefer’ two conflicting <a data-tip="true" data-for="subtangle" currentitem="false">subtangles</a> at the same time. This forces nodes to decide on a sole survivor. Nodes that violate this rule may be ignored and permanently dropped as neighbors. Also note that there is no reason why honest nodes would want to vote for two conflicting subtangles, since there is no mining reward that would incentivize them to do so.</p>
                    <p>We are examining two different approaches to how voting is conducted and secured. These are:</p>
                    <ul>
                        <li>Cellular Consensus</li>
                        <li>Fast Probabilistic Consensus</li>
                    </ul>
                    <p>These have different properties, but both show equally promising early results, and will soon be scrutinized on a public testnet. Fortunately, the protocol’s modularity makes it very easy to test both in parallel.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="module5" title="Module 5" />
                <NextPage page="module5.1.1" title="Module 5.1.1" />
            </div>

            <Tooltip tooltipId='parasite_chain_attacks' />
        </Layout>
    )
}