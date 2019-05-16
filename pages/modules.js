import Layout from '../components/Layout'
import { Modules } from '../components/Content'
import PreviousChapter from '../components/PreviousChapter'
import NextChapter from '../components/NextChapter'
import '../styles/content-page.scss'

export default () => (
    <Layout>
        <div className="content">
            <Modules />
        </div>
        <div className="content-footer">
            <NextChapter page="future" chapterNumber={5} />
            <PreviousChapter page="modularity" />
        </div>
    </Layout>
)