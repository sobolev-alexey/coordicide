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
                <Text className="title extra-large">Module 5</Text>
                <Text className="subtitle">PROACTIVE CONFLICT RESOLUTION</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>We have described numerous novel concepts so far. But a consensus mechanism based on cumulative weight, and secured by the tip selection algorithm alone, still exposes IOTA to mining races.</p>
                    <p>To overcome this issue, we propose an <strong>additional layer of security</strong> where nodes exchange opinions by voting. There has been a significant body of research over the years on voter models. In probabilistic models a node requests the opinion of a <em>small number</em> of other nodes over multiple rounds, and possibly changes its own opinion. In the 70s voter models were introduced independently by Holley/Liggett and Clifford/Sudbury (<a href="https://projecteuclid.org/euclid.aop/1176996306">https://projecteuclid.org/euclid.aop/1176996306</a> and <a href="https://academic.oup.com/biomet/article-abstract/60/3/581/217208">https://academic.oup.com/biomet/article-abstract/60/3/581/217208</a>), and there has been an enormous amount of <a href="https://scholar.google.com/scholar?client=ubuntu&amp;channel=fs&amp;oe=utf-8&amp;um=1&amp;ie=UTF-8&amp;lr&amp;cites=196403151939999542">related work</a> since then.</p>
                    <p>The introduction of a <strong>voting mechanism</strong> brings multiple benefits:</p>
                    <ul>
                        <li>Instead of waiting until the situation resolves itself with more and more issued transactions, we let the nodes talk to each other and resolve the situation proactively.</li>
                        <li>A node’s vote is weighted according to the amount of <em>mana</em> it holds. Therefore good actors are able to have a larger influence on the network.</li>
                        <li>Honest nodes secure the network by voting even if they are currently not issuing any transactions. Combined with the proposed Sybil protection mechanism (mana), this replaces the constant honest hashing power in blockchain, without any reliance on PoW.</li>
                        <li>The consensus process is decoupled from other aspects like tip selection or the structure of the Tangle.This makes for a modular DLT that can easily be adapted to fit future requirements. It also prevents all forms of attack that manipulate the Tangle’s structure to break the consensus mechanism, including the most dangerous attacks described in the white paper, like <a data-tip="true" data-for="parasite_chain_attacks" currentitem="false">parasite chain attacks</a>.</li>
                    </ul>
                    <p>The main drawback of traditional voting schemes is that they do not scale very well; they require precise knowledge of all network participants and have a high message overhead.</p>
                    <p>We introduce Shimmer: a voting scheme that overcomes the issues faced by traditional voting schemes.</p>
                    
                    <img src="../static/modules/shimmer.gif" />
                    <p>In the following sections, we describe the current state of voting research, by presenting two candidates for vote exchange within Shimmer, and how consensus can be achieved:</p>
                    <ul>
                        <li>“Cellular Consensus”, which mimics the behavior in a cellular automaton, and</li>
                        <li>“Fast Probabilistic Consensus”, which gives strong security guarantees using probability theory.</li>
                    </ul>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="module4" title="Module 4" />
                <NextPage page="module5.1" title="Module 5.1" />
            </div>

            <Tooltip tooltipId='parasite_chain_attacks' />
        </Layout>
    )
}