import { Content } from '../components/Content'
import ContentPage from '../components/ContentPage'
import '../styles/content-page.scss'

export default () => (
    <ContentPage
        prev={Content[3]}
        page={Content[4]}
        next={Content[5]}
    />
)