import React from 'react'
import Layout from './Layout'
import PreviousPage from './PreviousPage'
import NextPage from './NextPage'
import Text from './Text'
import { 
    Scalability,
    PostCoordinator,
    Modularity,
    Modules,
    Module1, Module2, Module3, Module4, Module5,
    Future,
    Conclusion
} from './Content'
import '../styles/content-page.scss'

export default ({ page, next = {}, prev = {} }) => {
    function getContent(link) {
        switch (link) {
            case 'scalability': return <Scalability />;
            case 'post-coordinator': return <PostCoordinator />;
            case 'modularity': return <Modularity />;
            case 'modules': return <Modules />;
            case 'module1': return <Module1 />;
            case 'module2': return <Module2 />;
            case 'module3': return <Module3 />;
            case 'module4': return <Module4 />;
            case 'module5': return <Module5 />;
            case 'future': return <Future />;
            case 'conclusion': return <Conclusion />;
            default: return <div />;
        }
    }

    return (
        <Layout>
            <div className="content-header">
                {
                    page.title && <Text className="title extra-large">{page.title}</Text>
                }
                {
                    page.subtitle && <Text className="subtitle">{page.subtitle}</Text>
                }
            </div>
            <div className="content">
                {getContent(page.link)}
            </div>
            <div className="content-footer">
                {
                    next && next.title ? (
                        <NextPage page={next.link} title={next.title} />
                    ) : null
                }
                {
                    prev && prev.title ? (
                        <PreviousPage page={prev.link} title={prev.title} />
                    ) : null
                }
            </div>
        </Layout>
    )
}