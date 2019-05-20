import { Content } from '../components/Content'
import ContentPage from '../components/ContentPage'
import '../styles/content-page.scss'

export default () => (
    <ContentPage
        prev={Content[2]}
        page={Content[3]}
        next={Content[4]}
    />
)