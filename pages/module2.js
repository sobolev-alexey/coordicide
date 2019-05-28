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
                <Text className="title extra-large">MODULE 2</Text>
                <Text className="subtitle">SECURE AUTO-PEERING</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>In peer-to-peer networks like IOTA, a node’s <a data-tip="true" data-for="neighbors" currentitem="false">neighbors</a> are its only source of information. Any peering mechanism must therefore focus on connecting to a healthy number of honest neighbors, i.e. nodes not trying to harm the network.</p>
                    <p>We introduce an auto-peering mechanism in which every node has its own criteria for selecting potential neighbors. An attacker cannot influence a node’s decisions in the peer selection process, and therefore a node’s particular “view” of the network is both local and unpredictable. This serves to protect against outside attacks (such as <a data-tip="true" data-for="eclipse_attack" currentitem="false">eclipse attacks</a>) and makes it practically impossible for attackers to target certain nodes in the peering process, while ensuring nodes always have at least a certain amount of honest neighbors.</p>
                    <img src="/static/modules/auto_peering.gif" />
                    <p>In addition, the auto-peering mechanism will try to create a <a data-tip="true" data-for="small_world_network" currentitem="false">small-world network</a>, in which nodes can be reached from every other node through a small number of intermediate steps. This property further speeds up the time to reach consensus.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="module1" title="Module 1" />
                <NextPage page="module3" title="Module 3" />
            </div>

            <Tooltip tooltipId='neighbors' />
            <Tooltip tooltipId='eclipse_attack' />
            <Tooltip tooltipId='small_world_network' />
        </Layout>
    )
}
