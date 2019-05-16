import Layout from '../components/Layout'
import { PostCoordinator } from '../components/Content'
import PreviousChapter from '../components/PreviousChapter'
import NextChapter from '../components/NextChapter'
import '../styles/content-page.scss'

export default () => (
    <Layout>
        <div className="content">
            <PostCoordinator />
        </div>
        <div className="content-footer">
            <NextChapter page="modularity" chapterNumber={3} />
            <PreviousChapter page="scalability" />
        </div>
    </Layout>
)