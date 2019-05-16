import Layout from '../components/Layout'
import { Modularity } from '../components/Content'
import PreviousChapter from '../components/PreviousChapter'
import NextChapter from '../components/NextChapter'
import '../styles/content-page.scss'

export default () => (
    <Layout>
        <div className="content">
            <Modularity />
        </div>
        <div className="content-footer">
            <NextChapter page="modules" chapterNumber={4} />
            <PreviousChapter page="post-coordinator" />
        </div>
    </Layout>
)