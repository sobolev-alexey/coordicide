import React from 'react'
import Link from 'next/link'
import Text from './Text'

import '../styles/chapters.scss'

export default ({ closeNav }) => (
    <div className="chapters-overlay">
        <div className="close-nav" onClick={closeNav} />
        <Text className="title extra-large">Chapter</Text>
        <div className="chapters-wrapper">
            <Link prefetch href="/scalability">
                <div className="chapter">
                    <Text className="subtitle">Chapter 1</Text>
                    <Text className="subtitle light">IOTA as scalable DLT</Text>
                </div>
            </Link>
            <Link prefetch href="/post-coordinator">
                <div className="chapter">
                    <Text className="subtitle">Chapter 2</Text>
                    <Text className="subtitle light">IOTA POST-COORDINATOR</Text>
                </div>
            </Link>
            <Link prefetch href="/modularity">
                <div className="chapter">
                    <Text className="subtitle">Chapter 3</Text>
                    <Text className="subtitle light">Modularity</Text>
                </div>
            </Link>
            <Link prefetch href="/modules">
                <div className="chapter">
                    <Text className="subtitle">Chapter 4</Text>
                    <Text className="subtitle light">The Modules</Text>
                </div>
            </Link>

            <div className="subtopics">
                <Link prefetch href="/module1">
                    <div className="subtopic">
                        <Text className="subtitle">Module 1</Text>
                        <Text className="subtitle light">Node identities and mana</Text>
                    </div>
                </Link>
                <Link prefetch href="/module2">
                    <div className="subtopic">
                        <Text className="subtitle">Module 2</Text>
                        <Text className="subtitle light">Secure Auto-peering</Text>
                    </div>
                </Link>
                <Link prefetch href="/module3">
                    <div className="subtopic">
                        <Text className="subtitle">Module 3</Text>
                        <Text className="subtitle light">Span protection</Text>
                    </div>
                </Link>
                <Link prefetch href="/module4">
                    <div className="subtopic">
                        <Text className="subtitle">Module 4</Text>
                        <Text className="subtitle light">Secure Auto-peering</Text>
                    </div>
                </Link>
                <Link prefetch href="/module5">
                    <div className="subtopic">
                        <Text className="subtitle">Module 5</Text>
                        <Text className="subtitle light">Span protection</Text>
                    </div>
                </Link>
            </div>
            
            <Link prefetch href="/future">
                <div className="chapter">
                    <Text className="subtitle">Chapter 5</Text>
                    <Text className="subtitle light">The Future</Text>
                </div>
            </Link>
            <Link prefetch href="/conclusion">
                <div className="chapter">
                    <Text className="subtitle">Chapter 6</Text>
                    <Text className="subtitle light">Conclusion</Text>
                </div>
            </Link>
            <Link prefetch href="/glossary">
                <div className="chapter">
                    <Text className="subtitle"></Text>
                    <Text className="subtitle light">Glossary</Text>
                </div>
            </Link>
        </div>
    </div>
)
