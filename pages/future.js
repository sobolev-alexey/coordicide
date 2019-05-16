import Layout from '../components/Layout'
import { Future } from '../components/Content'
import PreviousChapter from '../components/PreviousChapter'
import NextChapter from '../components/NextChapter'
import '../styles/content-page.scss'

export default () => (
    <Layout>
        <div className="content">
            <Future />
        </div>
        <div className="content-footer">
            <NextChapter page="conclusion" chapterNumber={6} />
            <PreviousChapter page="modules" />
        </div>
    </Layout>
)
