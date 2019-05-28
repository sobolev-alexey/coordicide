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
                <Text className="title extra-large">CHAPTER 3</Text>
                <Text className="subtitle">MODULARITY</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>The potential of a truly modular DLT is often overlooked. Many assume that because DLTs are software they are inherently upgradeable. In practice, however, software that was not designed with modular foundations will begin to stagnate. Flexibility to upgrade in the future is critical to the long-term success of such rapidly advancing technology.</p><img className="asset modularity" src="/static/modularity/hexagon-modularity.png" />
                    <p>To give the IOTA protocol this flexibility, and enable it to serve a diverse set of use cases in the future, the Coordicide solution renews IOTA as a modular DLT. We have developed several <strong>modules</strong> that <strong>remove the need for the Coordinator</strong> in IOTA’s consensus layer.</p>
                    <p>These modules introduce several additional benefits, including:</p>
                    <ul>
                        <li>Decreased <a data-tip="true" data-for="finality" currentitem="false">finality</a> times (within seconds)</li>
                        <li>Reduced need for <a data-tip="true" data-for="promotion_and_reattachment" currentitem="false">promotion and reattachment</a></li>
                        <li>Introduction of an auto-<a data-tip="true" data-for="peering" currentitem="false">peering</a> mechanism</li>
                        <li><a data-tip="true" data-for="message_overhead" currentitem="false">Message overhead</a> reduction</li>
                    </ul>
                    <p>The core Coordicide module is an improved consensus mechanism: a voting scheme that complements the tip selection algorithm to maximize decentralization and security. We have also devised a system of associating an identity with each node. Through auto-peering, this identity is used to build a small-world network and control the transaction rate. Nodes then vote to resolve conflicts by asking other nodes about their ledger status.</p>
                    <p>In the following sections, we discuss the two proposed (non-mutually exclusive) consensus implementations: <strong>Cellular Consensus</strong> and <a href="https://arxiv.org/pdf/1905.10895.pdf">Fast Probabilistic Consensus</a>.</p>
                    <p>We also refer interested readers to our <a href="https://files.iota.org/papers/Coordicide_WP.pdf">Coordicide white paper</a>, where we further develop the ideas presented here.</p>
                    <p>What follows is a map of the basic building blocks for a post-Coordinator IOTA network. We are currently in the process of developing a prototype of the system, and plan to release testnets for individual building blocks, before merging the components into a single Coordinator-free testnet. We will share new simulation results as they become available, and we look forward to working with the community on these testnets.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="post-coordinator" title="Chapter 2" />
                <NextPage page="modules" title="Chapter 4" />
            </div>

            <Tooltip tooltipId='finality' />
            <Tooltip tooltipId='promotion_and_reattachment' />
            <Tooltip tooltipId='peering' />
            <Tooltip tooltipId='message_overhead' />
        </Layout>
    )
}
