import React from 'react'
import Link from 'next/link'
import Text from './Text'

import '../styles/chapters.scss'

{/* <Link prefetch href="/">

</Link> */}

export default () => (
    <div className="chapters-overlay">
        <Text className="title extra-large">Chapters</Text>
        <div className="chapters-wrapper">
            <div className="chapter">
                <Text className="subtitle">Chapter 1</Text>
                <Text className="subtitle light">IOTA as scalable DLT</Text>
            </div>
            <div className="chapter">
                <Text className="subtitle">Chapter 2</Text>
                <Text className="subtitle light">IOTA POST-COORDINATOR</Text>
            </div>
            <div className="chapter">
                <Text className="subtitle">Chapter 3</Text>
                <Text className="subtitle light">Modularity</Text>
            </div>
            <div className="chapter">
                <Text className="subtitle">Chapter 4</Text>
                <Text className="subtitle light">The Modules</Text>
                <div className="subtopics">
                    <div className="subtopic">
                        <Text className="subtitle">Module 1</Text>
                        <Text className="subtitle light">Node identities and mana</Text>
                    </div>
                    <div className="subtopic">
                        <Text className="subtitle">Module 2</Text>
                        <Text className="subtitle light">Secure Auto-peering</Text>
                    </div>
                    <div className="subtopic">
                        <Text className="subtitle">Module 3</Text>
                        <Text className="subtitle light">Span protection</Text>
                    </div>
                </div>
            </div>
            <div className="chapter">
                <Text className="subtitle">Chapter 5</Text>
                <Text className="subtitle light">The Future</Text>
            </div>
        </div>
    </div>
)

