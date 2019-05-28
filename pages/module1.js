import Lottie from 'react-lottie'
import Layout from '../components/Layout'
import PreviousPage from '../components/PreviousPage'
import NextPage from '../components/NextPage'
import Text from '../components/Text'
import Tooltip from '../components/Tooltip'
import { Content } from '../components/Content'
import * as graphic1 from '../static/modules/module1.json'

import '../styles/content-page.scss'

export default () => {
    const options = {
        loop: true,
        autoplay: true,
    };

    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">Module 1</Text>
                <Text className="subtitle">NODE IDENTITIES AND MANA</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>In a network without the Coordinator we must be able to reliably associate transactions or other messages with the node that issued them. For example, to allow nodes to vote we need to be able to identify them (and their votes). Every node therefore generates a unique identifier that it will use to sign messages or cast votes, and thus ensure authenticity.</p>
                    <p>However, a reliance on node identities makes distributed systems vulnerable to <a data-tip="true" data-for="sybil_attack" currentitem="false">Sybil attacks</a>. A way of protecting against such attacks is to link the amount of votes a node may cast to a scarce resource like hashing power in PoW, or staked value in Proof-of-Stake (PoS).</p>
                    <p>Unlike PoW-based DLTs, PoS does not suffer from scalability problems. However, in a “longest-chain wins” environment, PoS is vulnerable to certain attacks, such as the “nothing-at-stake problem” (where parties can vote for two conflicting chains at the same time without risking or investing any resource) and “long range attacks” (where large stakeholders can mine a longer chain in secret and then broadcast it later). These two attack vectors make PoS undesirable in “longest-chain wins” networks.</p>
                    
                    <Lottie 
                        options={{ ...options, animationData: graphic1.default }}
                    />
                    <p>Since our Coordicide solution does not rely on a longest chain wins rule, our Sybil protection mechanism is not affected by these problems.</p>
                    <p>We propose a reputation system that we call <em>mana</em>:</p>
                    <ol>
                        <li>By moving IOTA in a value transaction users are proving ownership of the amount of IOTA transferred.</li>
                        <li>Users can “link” value transactions to a node of their choice by adding a node ID to the transaction signature. In practice, this will most probably be the same node used to issue the transaction.</li>
                        <li>The transaction results in the movement of <em>mana</em> from the node to which it was previously assigned to the node specified in this transaction. This will increase the total mana of the chosen node.</li>
                    </ol>
                    <p>The <em>mana</em> system combines the advantages of a fund-based Sybil protection mechanism with those of a reputation system. <em>Mana</em> is not only credited to a node by transferring IOTA tokens to the node owner. It can also be obtained simply by providing a good service to the community and propagating valid transactions to the network. The amount of total credited <em>mana</em> — acting as a measure of trust or reputation — can be used to further reward “good” actors in other ways (e.g. in the rate control or voting modules).</p>
                    <p><em>Mana</em> relies on the notion that reputation is difficult to gain, but easy to lose. A key aspect of any reputation system is the ability to punish bad actors by revoking previously granted reputation. In IOTA, this is as simple as reassigning your granted <em>mana</em> to another node, if your currently preferred node is found to be “misbehaving” (such as propagating invalid transactions).</p>
                    <p>Finally, a key advantage of <em>mana</em> is that, in contrast to other Sybil protection mechanisms where the node ID is linked to the private key of the owner forcing users to participate in complex and potentially risky staking procedures, the <em>mana</em> system ensures that a large proportion of funds are utilized to assign reputation.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="modules" title="Chapter 4" />
                <NextPage page="module2" title="Module 2" />
            </div>

            <Tooltip tooltipId='sybil_attack' />
        </Layout>
    )
}