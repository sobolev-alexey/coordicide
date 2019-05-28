import markdown from 'markdown-in-js'

export const Content = [
    {
        link: '',
        title: 'Introduction',
    }, 
    {
        link: 'scalability',
        title: 'Chapter 1',
        subtitle: 'IOTA as scalable DLT',
        tooltips: ['blockchain_bottleneck', 'transaction', 'consensus', 'nakamoto_consensus', 'proof_of_work', 'milestones', 'finality']
    }, 
    {
        link: 'post-coordinator',
        title: 'Chapter 2',
        subtitle: 'IOTA POST-COORDINATOR',
        tooltips: ['orphan']
    }, 
    {
        link: 'modularity',
        title: 'Chapter 3',
        subtitle: ' Modularity',
        tooltips: ['finality', 'promotion_and_reattachment', 'peering', 'message_overhead']
    }, 
    {
        link: 'modules',
        title: 'Chapter 4',
        subtitle: 'THE MODULES',
    }, 
    {
        link: 'module1',
        title: 'Module 1',
        subtitle: 'Node identities and mana',
        tooltips: ['sybil_attack']
    }, 
    {
        link: 'module2',
        title: 'Module 2',
        subtitle: 'Secure auto-peering',
        tooltips: ['neighbors', 'eclipse_attack', 'small_world_network']
    }, 
    {
        link: 'module3',
        title: 'Module 3',
        subtitle: 'Spam Protection',
        tooltips: ['mana', 'mining_races']
    }, 
    {
        link: 'module4',
        title: 'Module 4',
        subtitle: 'Tip Selection Algorithm',
        tooltips: ['tip', 'history', 'promotion', 'reattachment']
    }, 
    {
        link: 'module5',
        title: 'Module 5',
        subtitle: 'Proactive conflict resolution',
        tooltips: ['parasite_chain_attacks', 'subtangle']
    }, 
    {
        link: 'future',
        title: 'Chapter 5',
        subtitle: 'IOTA´s FUTURE',
        tooltips: ['ixi']
    }, 
    {
        link: 'conclusion',
        title: 'Chapter 6',
        subtitle: 'Conclusion',
        tooltips: ['promotion', 'reattachment']
    }, 
]

export const Scalability = () => markdown``

export const PostCoordinator = () => markdown`

The goal of Coordicide is for the network to reach consensus without the Coordinator, while also ensuring it has the following attributes:

* _Scalable:_ The rate of transactions in the network is not limited by the protocol.
* _Secure:_ An attacker cannot influence the consensus.
* _Decentralized:_ All honest nodes can be part of the consensus process.

Current DLT solutions can guarantee at most two of these three characteristics at the same time. This problem is known as the “<a href="https://github.com/ethereum/wiki/wiki/Sharding-FAQ">scalability trilemma</a>.”

<img src="/static/post-coordinator/trilemma.png"/>

An example of the trilemma can be found in PoW-based blockchains like Bitcoin. These networks offer security and decentralization, but lack scalability:

* Security: Miners complete PoW to chain blocks of transactions together. The combined computing (hash) power of the miners secures the network.
* Decentralization: Miners are distributed across the network. No single miner controls the majority of the hashing power.

But Bitcoin faces a fundamental problem of scalability. To preserve decentralization and security, blocks in the Bitcoin blockchain must have a limited size. This block size limit caps the rate of transactions and restricts the network’s scalability. As an increasing number of transactions are sent on the network, miners choose to validate the transactions offering the highest fees, leading to spiralling transaction costs and lengthy waiting times. The revolutionary nature of this PoW-based solution should not be understated — but at the same time, we cannot overstate its inherent constraints on network throughput.

IOTA _with the Coordinator_ is scalable and secure, but it is not fully decentralized:

* _Scalable:_ Each transaction references and approves two previous ones. Transactions can be attached to the Tangle anywhere and at any time. No miners are involved.
* _Secure:_ The Coordinator secures the network by issuing milestone transactions. Nodes only consider transactions as trustworthy when they are referenced and approved by a valid milestone.

The Tangle allows users to attach new transactions to any part of the Tangle. Thanks to its DAG structure, the only requirement is that each new transaction approves two other transactions. By providing the option for multiple attachment sites and eliminating the need for blocks, the Tangle is inherently scalable.

However, while the Coordinator ensures network security, it also represents a single point of failure, and therefore restricts IOTA from being a fully decentralized network. 

## An improved Tangle: decentralized and secure

The removal of the Coordinator alone is not sufficient for achieving decentralization. In fact, the consensus mechanism originally proposed in the IOTA white paper required that the majority of transactions _always_ come from honest network participants. In other words, honest actors would need to own a majority of the network’s hashing power. However, without miners, IOTA has no concept of constant, honest hashing power. The implication is that honest nodes would need to send a continuous stream of transactions, regardless of whether they are actually using the network.

The goal of Coordicide is to solve the scalability trilemma by providing a decentralized, secure network while preserving a high transaction rate. At the core of the solution is a __voting mechanism__ through which nodes request the opinions of other nodes in order to decide which transactions should be included in the Tangle, and which should be <a data-tip data-for='orphan'>orphaned</a>.

<img src="/static/post-coordinator/module_5.gif"/>

To remove the Coordinator, a number of challenges must be solved. Due to the complexity of the solution, Coordicide is broken down into different components. This approach makes our Coordicide proposal __modular__, meaning that each module can be independently replaced should new research reveal further improvements.

Our aim is to make IOTA the gold standard: enterprise-ready DLT, working together with <a href="https://blog.iota.org/iota-becomes-a-founding-member-of-new-international-association-of-trusted-blockchain-applications-b0c6417aaded">key organisations</a> and <a href="https://www.omg.org/cgi-bin/doc?omg/2019-03-03">standards bodies</a>, using <a href="https://projects.eclipse.org/proposals/eclipse-iota-trinity">open source governance</a>.

`

export const Modularity = () => markdown`

The potential of a truly modular DLT is often overlooked. Many assume that because DLTs are software they are inherently upgradeable. In practice, however, software that was not designed with modular foundations will begin to stagnate. Flexibility to upgrade in the future is critical to the long-term success of such rapidly advancing technology. 

<img className="asset modularity" src="/static/modularity/hexagon-modularity.png"/>

To give the IOTA protocol this flexibility, and enable it to serve a diverse set of use cases in the future, the Coordicide solution renews IOTA as a modular DLT. We have developed several __modules__ that __remove the need for the Coordinator__ in IOTA’s consensus layer. 

These modules introduce several additional benefits, including:

* Decreased <a data-tip data-for='finality'>finality</a> times (within seconds)
* Reduced need for <a data-tip data-for='promotion_and_reattachment'>promotion and reattachment</a>
* Introduction of an auto-<a data-tip data-for='peering'>peering</a> mechanism
* <a data-tip data-for='message_overhead'>Message overhead</a> reduction

The core Coordicide module is an improved consensus mechanism: a voting scheme that complements the tip selection algorithm to maximize decentralization and security. We have also devised a system of associating an identity with each node. Through auto-peering, this identity is used to build a small-world network and control the transaction rate. Nodes then vote to resolve conflicts by asking other nodes about their ledger status. 

In the following sections, we discuss the two proposed (non-mutually exclusive) consensus implementations: __Cellular Consensus__ and <a href="https://arxiv.org/pdf/1905.10895.pdf">Fast Probabilistic Consensus</a>.

We also refer interested readers to our <a href="https://files.iota.org/papers/Coordicide_WP.pdf">Coordicide white paper</a>, where we further develop the ideas presented here.

What follows is a map of the basic building blocks for a post-Coordinator IOTA network. We are currently in the process of developing a prototype of the system, and plan to release testnets for individual building blocks, before merging the components into a single Coordinator-free testnet. We will share new simulation results as they become available, and we look forward to working with the community on these testnets. 

`


export const Modules = () => markdown`

## What are we trying to solve?

Let’s start by asking two fundamental questions:

* _What are we trying to achieve when we talk about “the network reaching a consensus”?_  
The answer is actually very simple. We want all honest nodes to maintain the same opinion about the state of the ledger. Or more simply, we want all honest nodes to agree which transactions are valid.
* _Since IOTA does not have to choose a “leader” to mine blocks, what are we actually voting on?_  
The answer is again relatively simple. If two transactions are conflicting, they lead to a split in the Tangle. To resolve the conflict, nodes vote on a preferred transaction (the non-preferred transaction becomes an orphan).

<img src="/static/modules/the_modules.png"/>

Traditional PoW-based DLT provides one set of answers to these questions, but these have significant drawbacks. PoW-based consensus in IOTA would introduce mining races and lead to increased power consumption and cost, thus limiting the network’s use in IoT. 

A more suitable solution is described in the following sections.

`


export const Module1 = () => markdown`

In a network without the Coordinator we must be able to reliably associate transactions or other messages with the node that issued them. For example, to allow nodes to vote we need to be able to identify them (and their votes). Every node therefore generates a unique identifier that it will use to sign messages or cast votes, and thus ensure authenticity.

However, a reliance on node identities makes distributed systems vulnerable to <a data-tip data-for='sybil_attack'>Sybil attacks</a>. A way of protecting against such attacks is to link the amount of votes a node may cast to a scarce resource like hashing power in PoW, or staked value in Proof-of-Stake (PoS). 

Unlike PoW-based DLTs, PoS does not suffer from scalability problems. However, in a “longest-chain wins” environment, PoS is vulnerable to certain attacks, such as the “nothing-at-stake problem” (where parties can vote for two conflicting chains at the same time without risking or investing any resource) and “long range attacks” (where large stakeholders can mine a longer chain in secret and then broadcast it later). These two attack vectors make PoS undesirable in “longest-chain wins” networks.

Since our Coordicide solution does not rely on a longest chain wins rule, our Sybil protection mechanism is not affected by these problems. 

We propose a reputation system that we call _mana_: 

1. By moving IOTA in a value transaction users are proving ownership of the amount of IOTA transferred.
2. Users can “link” value transactions to a node of their choice by adding a node ID to the transaction signature. In practice, this will most probably be the same node used to issue the transaction.
3. The transaction results in the movement of _mana_ from the node to which it was previously assigned to the node specified in this transaction. This will increase the total mana of the chosen node.

The _mana_ system combines the advantages of a fund-based Sybil protection mechanism with those of a reputation system. _Mana_ is not only credited to a node by transferring IOTA tokens to the node owner. It can also be obtained simply by providing a good service to the community and propagating valid transactions to the network. The amount of total credited _mana_ — acting as a measure of trust or reputation — can be used to further reward “good” actors in other ways (e.g. in the rate control or voting modules).

_Mana_ relies on the notion that reputation is difficult to gain, but easy to lose. A key aspect of any reputation system is the ability to punish bad actors by revoking previously granted reputation. In IOTA, this is as simple as reassigning your granted _mana_ to another node, if your currently preferred node is found to be “misbehaving” (such as propagating invalid transactions).

Finally, a key advantage of _mana_ is that, in contrast to other Sybil protection mechanisms where the node ID is linked to the private key of the owner forcing users to participate in complex and potentially risky staking procedures, the _mana_ system ensures that a large proportion of funds are utilized to assign reputation.

`


export const Module2 = () => markdown`

In peer-to-peer networks like IOTA, a node’s <a data-tip data-for='neighbors'>neighbors</a> are its only source of information. Any peering mechanism must therefore focus on connecting to a healthy number of honest neighbors, i.e. nodes not trying to harm the network. 

We introduce an auto-peering mechanism in which every node has its own criteria for selecting potential neighbors. An attacker cannot influence a node’s decisions in the peer selection process, and therefore a node’s particular “view” of the network is both local and unpredictable. This serves to protect against outside attacks (such as <a data-tip data-for='eclipse_attack'>eclipse attacks</a>) and makes it practically impossible for attackers to target certain nodes in the peering process, while ensuring nodes always have at least a certain amount of honest neighbors.

<img src="/static/modules/auto_peering.gif"/>

In addition, the auto-peering mechanism will try to create a <a data-tip data-for='small_world_network'>small-world network</a>, in which nodes can be reached from every other node through a small number of intermediate steps. This property further speeds up the time to reach consensus.

`


export const Module3 = () => markdown`

DLTs require a mechanism to control the rate of transactions entering the network, as the limited resources of nodes (e.g., bandwidth, CPU) may become overwhelmed, leading to low throughput. This is similar to a highway, where a large number of vehicles entering the flow of traffic can lead to congestion.

Currently, the Tangle implements a simple spam protection mechanism based on PoW. However, controlling the rate of transaction issuance by PoW alone is impractical, as it introduces <a data-tip data-for='mining_races'>mining races</a>. We propose an __adaptive rate control__ mechanism which intelligently varies the difficulty of the PoW per node based on different factors, such as number of recently-issued transactions and <a data-tip data-for='mana'>mana</a>. 

It is important to note that the use of PoW as a rate control mechanism is unrelated to PoW-based consensus, which our Coordicide approach explicitly eliminates. Our rate control mechanism is designed in such a way that it does not lead to mining races, nor does it require a large amount of energy.

In our model, nodes with higher amounts of _mana_ have the ability to issue more transactions, without the same PoW requirements as low-reputation nodes. Regardless of a node’s _mana_, PoW difficulty increases with transaction rate. i.e. in order to issue more transactions in a short time interval, a node must increase the difficulty of the cryptographic puzzle, while for lower transaction rates a much lower difficulty would be sufficient. 

We enforce a maximum transaction rate per node to further prevent spam. This system brings a double benefit:

* It protects the network against malicious fast actors, e.g., nodes using ASICs to spam the network and/or influence the consensus.
* IOTA’s main use case is IoT, which consists of nodes with limited resources that are likely to issue transactions at a slow rate. This mechanism allows slower nodes to successfully propagate their transactions through the network.

`


export const Module4 = () => markdown`

The tip selection algorithm is the method by which transactions are selected for approval. A good algorithm allows the Tangle to grow in a stable and secure way.

To attach a new transaction to the Tangle, the algorithm needs to select and approve two previous transactions — preferably <a data-tip data-for='tip'>tips</a>. This approval mechanism represents “belief” in the Tangle: If transaction y approves transaction x, this implies that y believes transaction x is valid and that its entire <a data-tip data-for='history'>history</a> is also valid.

<img src="/static/modules/reliabale2.png"/>

In the past, we have used a biased random walk as our tip selection algorithm, as this led not only to a healthy Tangle structure but also allowed us to identify the heaviest, and therefore preferred part of the Tangle. While this mechanism was essential for reaching consensus, it also showed properties that were less desirable:

* Honest transactions could be left behind if they did not accumulate enough weight. This resulted in an increased need for <a data-tip data-for='promotion'>promotions</a> and <a data-tip data-for='reattachment'>reattachments</a> (even in the absence of attacks), which in turn significantly lowered the reliability of transactions.
* Attackers could try to “game” the random walk into entering malicious structures like parasitic chains, or prevent the network from reaching consensus by carrying out splitting attacks.
* Calculating the cumulative weights of transactions is relatively expensive and poses a problem for the scalability of the protocol, especially in high throughput scenarios.

By adding a voting layer to identify the preferred part of the tangle (as an additional module), we are able to:

* Resolve conflicts much faster, and therefore lower the chance of a transaction accidentally attaching to the wrong part of the Tangle.
* Use different tip selection mechanisms that are no longer based on cumulative weight, and have a lower chance of leaving valid transactions behind.

<img src="/static/modules/reliabale1.png"/>

This will increase the reliability of transactions in the IOTA network and significantly reduce the need for reattachments and promotions. It will also make the process of selecting tips much cheaper and faster.

`


export const Module5 = () => markdown`

We have described numerous novel concepts so far. But a consensus mechanism based on cumulative weight, and secured by the tip selection algorithm alone, still exposes IOTA to mining races. 

To overcome this issue, we propose an __additional layer of security__ where nodes exchange opinions by voting. There has been a significant body of research over the years on voter models. In probabilistic models a node requests the opinion of a _small number_ of other nodes over multiple rounds, and possibly changes its own opinion. In the 70s voter models were introduced independently by Holley/Liggett and Clifford/Sudbury (<a href="https://projecteuclid.org/euclid.aop/1176996306">https://projecteuclid.org/euclid.aop/1176996306</a> and <a href="https://academic.oup.com/biomet/article-abstract/60/3/581/217208">https://academic.oup.com/biomet/article-abstract/60/3/581/217208</a>), and there has been an enormous amount of <a href="https://scholar.google.com/scholar?client=ubuntu&channel=fs&oe=utf-8&um=1&ie=UTF-8&lr&cites=196403151939999542">related work</a> since then.

The introduction of a __voting mechanism__ brings multiple benefits:

* Instead of waiting until the situation resolves itself with more and more issued transactions, we let the nodes talk to each other and resolve the situation proactively.
* A node’s vote is weighted according to the amount of _mana_ it holds. Therefore good actors are able to have a larger influence on the network. 
* Honest nodes secure the network by voting even if they are currently not issuing any transactions. Combined with the proposed Sybil protection mechanism (mana), this replaces the constant honest hashing power in blockchain, without any reliance on PoW.
* The consensus process is decoupled from other aspects like tip selection or the structure of the Tangle.This makes for a modular DLT that can easily be adapted to fit future requirements. It also prevents all forms of attack that manipulate the Tangle’s structure to break the consensus mechanism, including the most dangerous attacks described in the white paper, like <a data-tip data-for='parasite_chain_attacks'>parasite chain attacks</a>.

The main drawback of traditional voting schemes is that they do not scale very well; they require precise knowledge of all network participants and have a high message overhead. 

We introduce Shimmer: a voting scheme that overcomes the issues faced by traditional voting schemes. 

In the following sections, we describe the current state of voting research, by presenting two candidates for vote exchange within Shimmer, and how consensus can be achieved:

* “Cellular Consensus”, which mimics the behavior in a cellular automaton, and 
* “Fast Probabilistic Consensus”, which gives strong security guarantees using probability theory.

# Module #5.1 - Shimmer
The Shimmer voting scheme is named after an extraordinary behavior seen in nature. Bees <a href="http://digg.com/video/honeybee-nest-shimmering">“synchronize” their movement to defend themselves against predators.</a> They do this without any centralized entity, and only know when to “change their state” by observing the behavior of their __peers.__

Individual autonomous agents that act according to some predefined rules can be found in many systems in nature, such as bees, ants, schools of fish and even in some areas of physics. Very simple rules can create incredibly complex features that, over time, manifest as __emergent__ properties of a system. The Shimmer consensus mechanism works in the same way. Instead of trying to reconstruct the opinion of every other node, we care only about the opinions of a very small subset of nodes and let consensus be formed __organically__ as an emergent property of the network.

When a conflict arises under Shimmer the nodes iteratively exchange opinions about which of the conflicting transactions they prefer, until eventually a consensus is reached. The nodes obtain a global view of the preferred part of the Tangle, which is of crucial importance in guaranteeing consensus. At some point a node may further decide to mark its decision as _finalized._ This means it stops its involvement in the voting process, and will never deviate from that opinion again, even in the case of an overwhelming opinion change (due to an attack).

As Shimmer will be used for consensus in the Tangle, ‘liking’ or ‘disliking’ a transaction has wider consequences. If a transaction is ‘liked’ by a node, then it must also ‘like’ all other transactions that are directly or indirectly referenced. Conversely, if a transaction is ‘disliked’, then no transaction that references this transaction can be ‘liked’.

It is important to note that it is not necessary to vote on every transaction. Transactions that have no conflicts with any other transaction can be considered ‘liked’ based on local modifiers alone (i.e., after a certain time has elapsed). Votes are only required to resolve conflicts and edge cases.

Nodes will reject votes that ‘prefer’ two conflicting <a data-tip data-for='subtangle'>subtangles</a> at the same time. This forces nodes to decide on a sole survivor. Nodes that violate this rule may be ignored and permanently dropped as neighbors. Also note that there is no reason why honest nodes would want to vote for two conflicting subtangles, since there is no mining reward that would incentivize them to do so.

We are examining two different approaches to how voting is conducted and secured. These are:

* Cellular Consensus
* Fast Probabilistic Consensus

These have different properties, but both show equally promising early results, and will soon be scrutinized on a public testnet. Fortunately, the protocol’s modularity makes it very easy to test both in parallel. 

## Sub-Module #5.1.1 Cellular Consensus
In Cellular Consensus the voting process is modelled as a <a href="https://en.wikipedia.org/wiki/Cellular_automaton">cellular automaton</a>, where nodes can be thought of as cells that monitor the states of their neighbors and adjust their opinion accordingly. The actual consensus algorithm is extremely simple and can be summarized in 5 lines of code:




This describes a mechanism where nodes adopt the majority opinion of their neighbors, liking or disliking a transaction based on that majority.

It is extremely fast and robust. The following animation depicts a simulation of 10,000 nodes reaching a consensus in the presence of 128 conflicting transactions (different colors represent different transactions): 

<img src="/static/module_5.1.1.gif"/>

In this example, the network reaches consensus in a matter of seconds.

Increasing the number of nodes affects the time taken for transactions to propagate in the network, but does not affect the time to reach a consensus. Decisions are made locally and in parallel no matter how many nodes participate in the network. 

The fact that votes are always exchanged with the same neighbors can represent a route of attack. We add security by incorporating _mana_-based reputation in the peering process: nodes will prefer neighbors with a similar reputation. This makes it expensive for attackers to even be considered as neighbors, and adds another incentive for nodes to attain a high reputation. The network becomes increasingly secure as the amount of _mana_ possessed by honest nodes grows naturally over time.

### Gossip about Opinion: The organism’s immune system

Treating nodes as cells of a living organism enables us to implement an ‘immune system’. This secures the network against attack by forcing participants to play by the rules, and provides a greater protection than traditional measures like Sybil protection. 
Since all neighbors are selected randomly the process by which Shimmer reaches a consensus is highly probabilistic. But at node level, the Cellular Consensus is deterministic. This allows us to verify a node’s behavior if we know the opinion of its neighbors. Bad actors that violate the rules can therefore be detected (as demonstrated below) and evicted immediately, by any of their neighbors. 

This idea can be formalized in the following protocol, which we call “Gossip about Opinion”:

* At regular intervals, every node issues a “heartbeat” message to its neighbors. This contains its current opinion and the reason why it came to that opinion, i.e. its neighbors’ opinions in the previous round.
* To compress the amount of exchanged data only the difference between consecutive heartbeats is sent i.e. only those transaction hashes whose ‘liked’ status has changed.
* A node signs its heartbeat messages and opinions to guarantee authenticity.

This heartbeat serves multiple purposes:

* It forces nodes to make regular statements and remain active members of the network.
* It is used to synchronize opinions between neighbors, allowing nodes to update their own opinion according to the previously described rules, without the need to proactively query other nodes.
* It allows nodes to verify that their neighbors are honest - those that violate the protocol by changing their opinion can be evicted from the network immediately. Since the messages are signed, misbehaviour can be proven by tracing malicious messages back to the nodes that issued them.

This approach has a number of compelling features that have not been seen in any other permissionless consensus mechanism: its asynchronous nature, the simplicity of its implementation, the efficiency of its message overhead, the speed at which it reaches consensus, and its attack resilience.

While emergent phenomena are very common in biological systems and have proven to work well in practice, it is extremely difficult to model them mathematically due to their inherently chaotic and complex nature. The approach’s biggest drawback is therefore the complexity of formalizing its scientific proofs. It would be necessary to thoroughly study Cellular Consensus in a testnet environment before it could be deployed on the mainnet.

### Sub-Module #5.1.2 - Fast Probabilistic Consensus

To address the drawbacks of Cellular Consensus, we are simultaneously analyzing another voting process, for which we have already demonstrated mathematical models and proofs: the Fast Probabilistic Consensus.

A formal description of Fast Probabilistic Consensus can be found in this <a href="https://arxiv.org/pdf/1905.10895.pdf">article</a>. The basic principle is quite similar to Cellular Consensus, but rather than asynchronously casting votes between neighbors in parallel, the voting process is split into separate rounds. In each round every node selects a new random subset of other nodes, and queries their current opinions. A node’s opinion is then formed according to the majority of returned opinions. However, the notion of “majority” here fluctuates. Instead of using a fixed threshold of 50%, we use a decision threshold derived from a <a href="https://eprint.iacr.org/2016/228.pdf">decentralized random number</a> sequence. Selecting a global but unpredictable threshold allows us to defend against an attacker that wants to delay consensus.

This voting process has the crucial property of converging very quickly, even in scenarios where malicious nodes are voting according to the worst possible strategy. This has been formally proven in the paper, but the general principle can be explained as follows:

* If an adversary knows the decision rules used by honest nodes, it can then predict their behaviour and adjust its strategy to stall the process indefinitely. 
* Consider a situation in which the threshold at which honest nodes change their opinion is fixed. Now a malicious actor controlling a sufficient number of nodes can adjust the proportion of its nodes that state they liked / disliked a particular transaction to keep the network in a split (undecided) state. By using global random numbers to keep changing this threshold, we eliminate this possibility by making the rules consistent but unpredictable for the adversary.
* It will therefore be practically impossible to keep the network in a split state for an extended time. It is important to note that these random numbers only have a relevant influence when the network is in an initial split state, and do not impact a network that is close to consensus.

After a certain number of voting rounds in which a node does not change its opinion, the opinion can be considered finalized and does not require any further voting. This number can be chosen in such a way that the probability that the entire network has achieved consensus is arbitrarily high.

Therefore Fast Probabilistic Consensus gives us an approach that is guaranteed to achieve consensus after a small number of rounds and with a small set of sampled nodes, thereby fulfilling the required conditions for any voting process using Shimmer. 

`


export const Future = () => markdown`

So far, we have discussed the direct implications of Coordicide for the IOTA network and its underlying technology. However, the Coordicide project enables much more than just a “better” network.

There are indirect implications that are equally fascinating, but which might not be immediately obvious. While this website does not have the scope to cover these implications in depth, we still want to offer some initial discussions around a few of the most important features. 

### Reliable Timestamps

Instead of directly voting on the fate of transactions, we may instead vote on the credibility of timestamps. Here ‘credible’ means that the difference between the issuing timestamp of a transaction and its arrival time to the nodes is not above a certain threshold.

Whether a transaction is liked can then be locally derived i.e. by preferring the earliest transaction with a credible timestamp in the presence of conflicts. This has multiple benefits:

* Even devices that do not have full knowledge about the ledger state can take part in the voting process. This is extremely beneficial for syncing nodes and the IoT environment where devices have unreliable connections.
* Since the network can reach consensus on which transactions carry credible timestamps, we can start trusting timestamp values and establish a totally ordered tangle. When two transactions carry the “same” timestamp we simply sort them by their transaction hash.

An inability to establish an overall order has been one of the biggest drawbacks of DAG-based DLTs in relation to “smart contracts”.

### Multiple Tangles (domains)

Without the Coordinator, it is possible to have multiple Tangles coexisting as separate domains. Each domain can implement a different logic for the transactions it processes (through different <a data-tip data-for='ixi'>IXI modules</a>) and associate a different meaning to the tokens it contains. Even though these domains do not necessarily share the same rules, it is still possible that transactions from one domain refer to data from another domain.

This will enable us to model extremely complex use cases with very simple building blocks. For example, resource tokens in one domain can represent the right to access certain resources, whereas asset tokens in another domain can represent the ownership of a share of a certain asset.

In addition to adding a lot of flexibility to IOTA, the modular approach enables a way of sharding network activity into separate domains, and thereby further increase IOTA’s scalability. For example, a “data-only” Tangle that contains only data transactions could be separated from a Tangle that contains only value transactions. Since data transactions can never be conflicting, transactions in this Tangle could “confirm” instantly without the involvement of any consensus mechanism. This would enable a wide array of IoT use cases that depend on immutable data.

### Different data structures for every domain

Since the Tangle is the most generic form of DAG — with bundles being able to reference 1 to n other transactions — it will now be possible to build completely different data structures tailored to the specific needs of a use case. By implementing a different tip selection algorithm, one could build a blockchain-like structure where the trunk and branch of a transaction always reference the previous transaction. Similarly structures like “block lattices” could easily be emulated using a different tip selection algorithm. There is really no limit to the possibilities. The modular approach guarantees the ultimate freedom of the protocol.

### Additional rules encoded in the signature message fragment

Since every transaction carries a “signature message fragment” that can contain arbitrary data, it is possible to encode more complex behaviors (such as certain conditions for the application of a transaction, or side-effects that are triggered automatically). These can then be parsed and applied by the nodes of that specific domain.

`

export const Conclusion = () => markdown`

The goal of this website has been to introduce the concepts behind Coordicide and its various modules. The following list summarizes the implications of these modules, explaining the properties a Coordinatorless network will bring to the table:

`

export const Glossary = () => markdown`

<div className="glossary-header" id="b">Blockchain bottleneck</div>
<p>
As more transactions are issued, the block rate and size become a bottleneck in the system. It can no longer include all incoming transactions promptly. Attempts to speed up block rates will introduce more orphan blocks (blocks being left behind) and reduce the security of the blockchain.
</p>

<div className="glossary-header" id="c">Consensus</div>
<p>
Agreement on a specific datum or value in distributed multi-agent systems, in the presence of faulty processes.
</p>

<div className="glossary-header">Coordinator</div>
<p>
A trusted entity that issues milestones to guarantee finality and protect the Tangle against attacks.
</p>

<div className="glossary-header">Cumulative weight</div>
<p>
A transaction rating system. Each additional transaction that references a transaction increases its cumulative weight. Tip selection favors a path through transactions that has a higher cumulative weight.
</p>

<div className="glossary-header" id="e">Eclipse attack</div>
<p>
A cyber-attack that aims to isolate and attack a specific user, rather than the whole network.
</p>

<div className="glossary-header" id="f">Finality</div>
<p>
The property that once a transaction is completed there is no way to revert or alter it. This is the moment when the parties involved in a transfer can consider the deal done. Finality can be deterministic or probabilistic.
</p>

<div className="glossary-header" id="h">History</div>
<p>
The list of transactions directly or indirectly approved by a given transaction.
</p>

<div className="glossary-header" id="i">IXI</div>
<p>
IOTA eXtending Interface, a framework to extend the functionality of an IOTA node by reacting to incoming transactions and/or providing additional API calls.
</p>

<div className="glossary-header" id="l">Local modifiers</div>
<p>
Custom conditions that nodes can take into account during tip selection. In IOTA, nodes do not necessarily have the same view of the Tangle; various kinds of information only locally available to them can be used to strengthen security. Read more about local modifiers <a href="https://assets.ctfassets.net/r1dr6vzfxhev/4p2Jh4jQzYwmQSqScgKW2G/6bd776742d48e6a44fca66845e956e8e/Local_Modifiers_in_the_Tangle.pdf">here</a>.
</p>

<div className="glossary-header" id="m">Mana</div>
<p>
The reputation of a node is based on a virtual token called mana. This reputation, working as a Sybil protection mechanism, is important for issuing more transactions (see Module 3) and having a higher influence during the voting process (see Module 5).
</p>

<div className="glossary-header">Message overhead</div>
<p>
The additional information (metadata) that needs to be sent along with the actual information (data). This can contain signatures, voting, heartbeat signals, and anything that is transmitted over the network but is not the transaction itself.
</p>

<div className="glossary-header">Milestones</div>
<p>
Milestones are transactions signed and issued by the Coordinator. Their main goal is to help the Tangle to grow healthily and to guarantee finality. When milestones directly or indirectly approve a transaction in the Tangle, nodes mark the state of that transaction and its entire history as confirmed. 
</p>

<div className="glossary-header">Mining races</div>
<p>
In PoW-based DLTs, competition between nodes to obtain mining rewards and transaction fees are known as mining races. These are undesirable as they favor more powerful nodes, especially those with highly optimized hardware like ASICs. As such, they block participation by regular or IoT hardware and are harmful for the environment.
</p>

<div className="glossary-header" id="n">Nakamoto consensus</div>
<p>
Named after the originator of Bitcoin, Satoshi Nakamoto, Nakamoto consensus describes the replacement of voting/communication between known agents with a cryptographic puzzle (Proof-of-Work). Completing the puzzle determines which agent is the next to act.
</p>

<div className="glossary-header">Neighbors</div>
<p>
Network nodes that are directly connected and can exchange messages without intermediate nodes.
</p>

<div className="glossary-header">Node</div>
<p>
A machine which is part of the IOTA network. Its role is to issue new transactions and to validate existing ones.
</p>

<div className="glossary-header" id="o">Orphan</div>
<p>
A transaction (or block) that is not referenced by any succeeding transaction (or block). An orphan is not considered confirmed and will not be part of the consensus.
</p>

<div className="glossary-header" id="p">Parasite-chain attacks</div>
<p>
A double spend attack on the Tangle. Here an attacker attempts to undo a transaction by building an alternative Tangle in which the funds were not spent. They then try to get the majority of the network to accept the alternative Tangle as the legitimate one.
</p>

<div className="glossary-header">Peering</div>
<p>
The procedure of discovering and connecting to other network nodes.
</p>

<div className="glossary-header">Promotion and reattachment</div>
<p>
Strategies used in IOTA to reintroduce orphaned transactions. 
</p>

<div className="glossary-header">Promotion</div>
<p>
Attaching empty transactions that reference both the original transaction and newer parts of the Tangle in an attempt to get “picked up” by random walks.
</p>

<div className="glossary-header">Proof-of-Work</div>
<p>
Data which is difficult (costly, time-consuming) to produce but easy for others to verify.
</p>

<div className="glossary-header" id="r">Random walk</div>
<p>
A mathematical object that describes a path, which consists of a succession of random steps in some mathematical space.
</p>

<div className="glossary-header">Reattachment</div>
<p>
Resending a transaction by redoing tip selection and referencing newer tips by redoing PoW.
</p>

<div className="glossary-header" id="s">Small-world network</div>
<p>
A network in which most nodes can be reached from every other node by a small number of intermediate steps. 
</p>

<div className="glossary-header">Solidification time</div>
<p>
The solidification time is the point at which the entire history of a transaction has been received by a node.
</p>

<div className="glossary-header">Splitting attacks</div>
<p>
An attack in which a malicious node attempts to split the Tangle into two branches. As one of the branches grows the attacker publishes transactions on the other branch to keep both alive.Splitting attacks attempt to slow down the consensus process or conduct a double spend.
</p>

<div className="glossary-header">Subtangle</div>
<p>
A consistent section of the Tangle (i.e. a subset of transactions), such that each included transaction also includes its referenced transactions. 
</p>

<div className="glossary-header">Sybil attack</div>
<p>
An attempt to gain control over a peer-to-peer network by forging multiple fake identities.
</p>

<div className="glossary-header" id="t">Tip</div>
<p>
A transaction that has not yet been approved.
</p>

<div className="glossary-header">Tip selection</div>
<p>
The process of selecting previous transactions to be referenced by a new transaction. These references are where a transaction attaches to the existing data structure. IOTA only enforces that a transaction approves two other transactions, but the tip selection strategy is left up to the user (with a good default provided by IOTA).
</p>

<div className="glossary-header">Transaction</div>
<p>
A message that transfers funds or information between two nodes. A transaction is referred to as “solid” if its entire history is known.
</p>

`
