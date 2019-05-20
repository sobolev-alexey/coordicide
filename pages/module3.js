import { Content } from '../components/Content'
import ContentPage from '../components/ContentPage'
import '../styles/content-page.scss'

export default () => (
    <ContentPage
        prev={Content[6]}
        page={Content[7]}
        next={Content[8]}
    />
)