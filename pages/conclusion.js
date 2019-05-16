import Layout from '../components/Layout'
import { Conclusion } from '../components/Content'
import PreviousChapter from '../components/PreviousChapter'
import '../styles/content-page.scss'

export default () => (
    <Layout>
        <div className="content">
            <Conclusion />
        </div>
        <div className="content-footer">
            <PreviousChapter page="future" />
        </div>
    </Layout>
)
