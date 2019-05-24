import Layout from '../components/Layout'
import Text from '../components/Text'
import { Glossary } from '../components/Content'
import '../styles/content-page.scss'

export default () => {
    function scrollToLetter(letter) {
        const target = document.querySelector(`#${letter}`)
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const possibleLetters = ['b', 'c', 'e', 'f', 'h', 'i', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't']

    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">Glossary</Text>
                <div className="letter-wrapper">
                    {
                        possibleLetters.map(letter => (
                            <a 
                                key={letter} 
                                className="letter"
                                onClick={() => scrollToLetter(letter)}
                            >
                                <Text className="subtitle">
                                    {letter}
                                </Text>
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className="content">

                <Glossary />
            </div>
        </Layout>
    )
}
