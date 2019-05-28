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
                <Text className="title extra-large">MODULE 4</Text>
                <Text className="subtitle">TIP SELECTION ALGORITHM</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>The tip selection algorithm is the method by which transactions are selected for approval. A good algorithm allows the Tangle to grow in a stable and secure way.</p>
                    <img src="/static/modules/tangle.gif" />
                    <p>To attach a new transaction to the Tangle, the algorithm needs to select and approve two previous transactions — preferably <a data-tip="true" data-for="tip" currentitem="false">tips</a>. This approval mechanism represents “belief” in the Tangle: If transaction y approves transaction x, this implies that y believes transaction x is valid and that its entire <a data-tip="true" data-for="history" currentitem="false">history</a> is also valid.</p>
                    <img src="/static/modules/reliabale2.png" />
                    <p>In the past, we have used a biased random walk as our tip selection algorithm, as this led not only to a healthy Tangle structure but also allowed us to identify the heaviest, and therefore preferred part of the Tangle. While this mechanism was essential for reaching consensus, it also showed properties that were less desirable:</p>
                    <ul>
                        <li>Honest transactions could be left behind if they did not accumulate enough weight. This resulted in an increased need for <a data-tip="true" data-for="promotion" currentitem="false">promotions</a> and <a data-tip="true" data-for="reattachment" currentitem="false">reattachments</a> (even in the absence of attacks), which in turn significantly lowered the reliability of transactions.</li>
                        <li>Attackers could try to “game” the random walk into entering malicious structures like parasitic chains, or prevent the network from reaching consensus by carrying out splitting attacks.</li>
                        <li>Calculating the cumulative weights of transactions is relatively expensive and poses a problem for the scalability of the protocol, especially in high throughput scenarios.</li>
                    </ul>
                    <p>By adding a voting layer to identify the preferred part of the tangle (as an additional module), we are able to:</p>
                    <ul>
                        <li>Resolve conflicts much faster, and therefore lower the chance of a transaction accidentally attaching to the wrong part of the Tangle.</li>
                        <li>Use different tip selection mechanisms that are no longer based on cumulative weight, and have a lower chance of leaving valid transactions behind.</li>
                    </ul>
                    <img src="/static/modules/reliabale1.png" />
                    <p>This will increase the reliability of transactions in the IOTA network and significantly reduce the need for reattachments and promotions. It will also make the process of selecting tips much cheaper and faster.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="module3" title="Module 3" />
                <NextPage page="module5" title="Module 5" />
            </div>

            <Tooltip tooltipId='tip' />
            <Tooltip tooltipId='history' />
            <Tooltip tooltipId='promotion' />
            <Tooltip tooltipId='reattachment' />
        </Layout>
    )
}
