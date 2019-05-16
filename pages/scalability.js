import Layout from '../components/Layout'
import { Scalability } from '../components/Content'
import PreviousChapter from '../components/PreviousChapter'
import NextChapter from '../components/NextChapter'
import '../styles/content-page.scss'

export default () => (
    <Layout>
        <div className="content">
            <Scalability />
        </div>
        <div className="content-footer">
            <NextChapter page="post-coordinator" chapterNumber={2} />
            <PreviousChapter page="" />
        </div>
    </Layout>
)