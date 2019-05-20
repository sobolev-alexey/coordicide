import { Content } from '../components/Content'
import ContentPage from '../components/ContentPage'
import '../styles/content-page.scss'

export default () => (
    <ContentPage
        prev={Content[10]}
        page={Content[11]}
    />
)