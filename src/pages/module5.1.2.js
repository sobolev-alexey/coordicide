import React from 'react';
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
                <Text className="title extra-large">Module 5.1.2</Text>
                <Text className="subtitle">Fast Probabilistic Consensus</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>To address the drawbacks of Cellular Consensus, we are simultaneously analyzing another voting process, for which we have already demonstrated mathematical models and proofs: the Fast Probabilistic Consensus.</p>
                    <p>A formal description of Fast Probabilistic Consensus can be found in this <a href="https://arxiv.org/pdf/1905.10895.pdf">article</a>. The basic principle is quite similar to Cellular Consensus, but rather than asynchronously casting votes between neighbors in parallel, the voting process is split into separate rounds. In each round every node selects a new random subset of other nodes, and queries their current opinions. A node’s opinion is then formed according to the majority of returned opinions. However, the notion of “majority” here fluctuates. Instead of using a fixed threshold of 50%, we use a decision threshold derived from a <a href="https://eprint.iacr.org/2016/228.pdf">decentralized random number</a> sequence. Selecting a global but unpredictable threshold allows us to defend against an attacker that wants to delay consensus.</p>
                    <p>This voting process has the crucial property of converging very quickly, even in scenarios where malicious nodes are voting according to the worst possible strategy. This has been formally proven in the paper, but the general principle can be explained as follows:</p>
                    <ul>
                        <li>If an adversary knows the decision rules used by honest nodes, it can then predict their behaviour and adjust its strategy to stall the process indefinitely.</li>
                        <li>Consider a situation in which the threshold at which honest nodes change their opinion is fixed. Now a malicious actor controlling a sufficient number of nodes can adjust the proportion of its nodes that state they liked / disliked a particular transaction to keep the network in a split (undecided) state. By using global random numbers to keep changing this threshold, we eliminate this possibility by making the rules consistent but unpredictable for the adversary.</li>
                        <li>It will therefore be practically impossible to keep the network in a split state for an extended time. It is important to note that these random numbers only have a relevant influence when the network is in an initial split state, and do not impact a network that is close to consensus.</li>
                    </ul>
                    <p>After a certain number of voting rounds in which a node does not change its opinion, the opinion can be considered finalized and does not require any further voting. This number can be chosen in such a way that the probability that the entire network has achieved consensus is arbitrarily high.</p>
                    <p>Therefore Fast Probabilistic Consensus gives us an approach that is guaranteed to achieve consensus after a small number of rounds and with a small set of sampled nodes, thereby fulfilling the required conditions for any voting process using Shimmer.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="module5.1.1" title="Module 5.1.1" />
                <NextPage page="future" title="Chapter 5" />
            </div>

            <Tooltip tooltipId='parasite_chain_attacks' />
        </Layout>
    )
}