import { Content } from '../components/Content'
import ContentPage from '../components/ContentPage'
import '../styles/content-page.scss'

export default () => (
    <ContentPage
        prev={Content[4]}
        page={Content[5]}
        next={Content[6]}
    />
)