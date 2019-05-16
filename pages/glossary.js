import Layout from '../components/Layout'
import { Glossary } from '../components/Content'
import '../styles/content-page.scss'

export default () => (
    <Layout>
        <div className="content">
            <Glossary />
        </div>
    </Layout>
)
