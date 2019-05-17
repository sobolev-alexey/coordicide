import Layout from '../components/Layout'
import { Scalability } from '../components/Content'
import PreviousChapter from '../components/PreviousChapter'
import NextChapter from '../components/NextChapter'
import Text from '../components/Text'
import '../styles/content-page.scss'

export default () => (
    <Layout>
        <div className="content-header">
            <Text className="content-title">Chapter 1</Text>
            <Text className="content-subtitle">IOTA as<br />scalable DLT</Text>
        </div>
        <div className="content">
            <Scalability />
        </div>
        <div className="content-footer">
            <NextChapter page="post-coordinator" chapterNumber={2} />
            <PreviousChapter page="" />
        </div>
    </Layout>
)