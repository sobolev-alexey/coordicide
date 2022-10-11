import React from 'react'
import ReactTooltip from 'react-tooltip'
import Text from './Text'
import Shape from './Shape'

import '../styles/tooltip.scss'

export default ({ tooltipId }) => {
    const tooltip = tooltips[tooltipId]
    return (
        <ReactTooltip id={tooltipId} >
            <div className="tooltip-wrapper">
                <Shape className="shape tooltip-top-shape" color="#F1F7FB" width="180px" height="216px" />
                <Text className="subtitle">{tooltip.header}</Text>
                <Text className="tooltip-text">{tooltip.text}</Text>
                <Shape className="shape tooltip-bottom-shape" color="#F1F7FB" width="180px" height="216px" />
            </div>
        </ReactTooltip>
    )
}

const tooltips = {
    blockchain_bottleneck: {
        header: 'Blockchain bottleneck',
        text: 'As more transactions are issued, the block rate and size become a bottleneck in the system. It can no longer include all incoming transactions promptly. Attempts to speed up block rates will introduce more orphan blocks (blocks being left behind) and reduce the security of the blockchain.'
    },
    consensus: {
        header: 'Consensus',
        text: 'Agreement on a specific datum or value in distributed multi-agent systems, in the presence of faulty processes.'
    },
    coordinator: {
        header: 'Coordinator',
        text: 'A trusted entity that issues milestones to guarantee finality and protect the Tangle against attacks.'
    },
    cumulative_weight: {
        header: 'Cumulative weight',
        text: 'A transaction rating system. Each additional transaction that references a transaction increases its cumulative weight. Tip selection favors a path through transactions that has a higher cumulative weight.'
    },
    eclipse_attack: {
        header: 'Eclipse attack',
        text: 'A cyber-attack that aims to isolate and attack a specific user, rather than the whole network.'
    },
    finality: {
        header: 'Finality',
        text: 'The property that once a transaction is completed there is no way to revert or alter it. This is the moment when the parties involved in a transfer can consider the deal done. Finality can be deterministic or probabilistic.'
    },
    history: {
        header: 'History',
        text: 'The list of transactions directly or indirectly approved by a given transaction.'
    },
    ixi: {
        header: 'IXI',
        text: 'IOTA eXtending Interface, a framework to extend the functionality of an IOTA node by reacting to incoming transactions and/or providing additional API calls.'
    },
    local_modifiers: {
        header: 'Local modifiers',
        text: 'Custom conditions that nodes can take into account during tip selection. In IOTA, nodes do not necessarily have the same view of the Tangle; various kinds of information only locally available to them can be used to strengthen security. Read more about local modifiers <a href="https://assets.ctfassets.net/r1dr6vzfxhev/4p2Jh4jQzYwmQSqScgKW2G/6bd776742d48e6a44fca66845e956e8e/Local_Modifiers_in_the_Tangle.pdf">here</a>.'
    },
    mana: {
        header: 'Mana',
        text: 'The reputation of a node is based on a virtual token called mana. This reputation, working as a Sybil protection mechanism, is important for issuing more transactions (see Module 3) and having a higher influence during the voting process (see Module 5).'
    },
    message_overhead: {
        header: 'Message overhead',
        text: 'The additional information (metadata) that needs to be sent along with the actual information (data). This can contain signatures, voting, heartbeat signals, and anything that is transmitted over the network but is not the transaction itself.'
    },
    milestones: {
        header: 'Milestones',
        text: 'Milestones are transactions signed and issued by the Coordinator. Their main goal is to help the Tangle to grow healthily and to guarantee finality. When milestones directly or indirectly approve a transaction in the Tangle, nodes mark the state of that transaction and its entire history as confirmed.'
    },
    mining_races: {
        header: 'Mining races',
        text: 'In PoW-based DLTs, competition between nodes to obtain mining rewards and transaction fees are known as mining races. These are undesirable as they favor more powerful nodes, especially those with highly optimized hardware like ASICs. As such, they block participation by regular or IoT hardware and are harmful for the environment.'
    },
    nakamoto_consensus: {
        header: 'Nakamoto consensus',
        text: 'Named after the originator of Bitcoin, Satoshi Nakamoto, Nakamoto consensus describes the replacement of voting/communication between known agents with a cryptographic puzzle (Proof-of-Work). Completing the puzzle determines which agent is the next to act.'
    },
    neighbors: {
        header: 'Neighbors',
        text: 'Network nodes that are directly connected and can exchange messages without intermediate nodes.'
    },
    node: {
        header: 'Node',
        text: 'A machine which is part of the IOTA network. Its role is to issue new transactions and to validate existing ones.'
    },
    orphan: {
        header: 'Orphan',
        text: 'A transaction (or block) that is not referenced by any succeeding transaction (or block). An orphan is not considered confirmed and will not be part of the consensus.'
    },
    parasite_chain_attacks: {
        header: 'Parasite-chain attacks',
        text: 'A double spend attack on the Tangle. Here an attacker attempts to undo a transaction by building an alternative Tangle in which the funds were not spent. They then try to get the majority of the network to accept the alternative Tangle as the legitimate one.'
    },
    peering: {
        header: 'Peering',
        text: 'The procedure of discovering and connecting to other network nodes.'
    },
    promotion_and_reattachment: {
        header: 'Promotion and reattachment',
        text: 'Strategies used in IOTA to reintroduce orphaned transactions. '
    },
    promotion: {
        header: 'Promotion',
        text: 'Attaching empty transactions that reference both the original transaction and newer parts of the Tangle in an attempt to get “picked up” by random walks.'
    },
    reattachment: {
        header: 'Reattachment',
        text: 'Resending a transaction by redoing tip selection and referencing newer tips by redoing PoW.'
    },
    proof_of_work: {
        header: 'Proof-of-Work',
        text: 'Data which is difficult (costly, time-consuming) to produce but easy for others to verify.'
    },
    random_walk: {
        header: 'Random walk',
        text: 'A mathematical object that describes a path, which consists of a succession of random steps in some mathematical space.'
    },
    small_world_network: {
        header: 'Small-world network',
        text: 'A network in which most nodes can be reached from every other node by a small number of intermediate steps.'
    },
    solidification_time: {
        header: 'Solidification time',
        text: 'The solidification time is the point at which the entire history of a transaction has been received by a node.'
    },
    splitting_attacks: {
        header: 'Splitting attacks',
        text: 'An attack in which a malicious node attempts to split the Tangle into two branches. As one of the branches grows the attacker publishes transactions on the other branch to keep both alive.Splitting attacks attempt to slow down the consensus process or conduct a double spend.'
    },
    subtangle: {
        header: 'Subtangle',
        text: 'A consistent section of the Tangle (i.e. a subset of transactions), such that each included transaction also includes its referenced transactions.'
    },
    sybil_attack: {
        header: 'Sybil attack',
        text: 'An attempt to gain control over a peer-to-peer network by forging multiple fake identities.'
    },
    tip: {
        header: 'Tip',
        text: 'A transaction that has not yet been approved.'
    },
    tip_selection: {
        header: 'Tip selection',
        text: 'The process of selecting previous transactions to be referenced by a new transaction. These references are where a transaction attaches to the existing data structure. IOTA only enforces that a transaction approves two other transactions, but the tip selection strategy is left up to the user (with a good default provided by IOTA).'
    },
    transaction: {
        header: 'Transaction',
        text: 'A message that transfers funds or information between two nodes. A transaction is referred to as “solid” if its entire history is known.'
    },
}
