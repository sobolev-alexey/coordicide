import React, { useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import Text from './Text'

import '../styles/chapters.scss'

export default ({ closeNav }) => {
    const [showSubmenu, setShowSubmenu] = useState(false)

    function hoverOn() {
        setShowSubmenu(true)
    }
    
    function hoverOff() { 
        setShowSubmenu(false)
    }

    return (
        <div className="chapters-outer-wrapper">
            <div className="chapters-overlay">
                <div className="close-nav" onClick={closeNav} />
                <Text className="subtitle">Chapter</Text>
                <div className="chapters-wrapper">
                    <Link prefetch href="/scalability">
                        <div className="chapter">
                            <Text className="title">01</Text>
                            <Text className="subtitle">IOTA as scalable DLT</Text>
                            <Text className="read">Read</Text>
                        </div>
                    </Link>
                    <Link prefetch href="/post-coordinator">
                        <div className="chapter">
                            <Text className="title">02</Text>
                            <Text className="subtitle">IOTA POST-COORDINATOR</Text>
                            <Text className="read">Read</Text>
                        </div>
                    </Link>
                    <Link prefetch href="/modularity">
                        <div className="chapter">
                            <Text className="title">03</Text>
                            <Text className="subtitle">Modularity</Text>
                            <Text className="read">Read</Text>
                        </div>
                    </Link>
                    <div
                        className="submodules-wrapper"
                        onMouseEnter={hoverOn} 
                        onMouseLeave={hoverOff}
                    >
                        <Link prefetch href="/modules">
                            <div className="chapter">
                                <Text className="title">04</Text>
                                <Text className="subtitle">The Modules</Text>
                                <Text className="read">Read</Text>
                            </div>
                        </Link>

                        <div className={classNames('subtopics', { 'enabled': showSubmenu })}>
                            <Link prefetch href="/module1">
                                <div className="subtopic">
                                    <Text className="title">01</Text>
                                    <Text className="subtitle">Node identities and mana</Text>
                                    <Text className="read">Read</Text>
                                </div>
                            </Link>
                            <Link prefetch href="/module2">
                                <div className="subtopic">
                                    <Text className="title">02</Text>
                                    <Text className="subtitle">Secure Auto-peering</Text>
                                    <Text className="read">Read</Text>
                                </div>
                            </Link>
                            <Link prefetch href="/module3">
                                <div className="subtopic">
                                    <Text className="title">03</Text>
                                    <Text className="subtitle">Spam protection</Text>
                                    <Text className="read">Read</Text>
                                </div>
                            </Link>
                            <Link prefetch href="/module4">
                                <div className="subtopic">
                                    <Text className="title">04</Text>
                                    <Text className="subtitle">Secure Auto-peering</Text>
                                    <Text className="read">Read</Text>
                                </div>
                            </Link>
                            <Link prefetch href="/module5">
                                <div className="subtopic">
                                    <Text className="title">05</Text>
                                    <Text className="subtitle">Spam protection</Text>
                                    <Text className="read">Read</Text>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    <Link prefetch href="/future">
                        <div className="chapter">
                            <Text className="title">05</Text>
                            <Text className="subtitle">The Future</Text>
                            <Text className="read">Read</Text>
                        </div>
                    </Link>
                    <Link prefetch href="/conclusion">
                        <div className="chapter">
                            <Text className="title">06</Text>
                            <Text className="subtitle">Conclusion</Text>
                            <Text className="read">Read</Text>
                        </div>
                    </Link>
                    <Link prefetch href="/glossary">
                        <div className="chapter">
                            <Text className="title">{' '}</Text>
                            <Text className="subtitle">Glossary</Text>
                            <Text className="read">Read</Text>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}