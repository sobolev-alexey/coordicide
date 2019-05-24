import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { MenuContext } from './Layout'
import Text from './Text'
import Shape from './Shape'
import Button from './Button'
import PlayButton from './PlayButton'
import CascadingAnimation from './CascadingAnimation';

import '../styles/content.scss'

export default () => {
    const [showVideo, setShowVideo] = useState(false)
    const { showMenu } = useContext(MenuContext)

    return (
        <div className="intro-wrapper">
            {
                showVideo ? (
                    <div className="video-container aos-init aos-animate" data-aos="fade-up">
                        <iframe
                            className="video"
                            src="https://www.youtube.com/embed/h09z2N0MtuQ"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen="">
                        </iframe>
                    </div> 
                ) : (
                    <div className="intro">
                        <PlayButton onClick={() => setShowVideo(true)} />
                        <CascadingAnimation />
                        <div className="intro-blur-wrapper">
                            <Shape className="intro-shape-outer" color="#ffffff" width="383px" height="434px" />
                            <Shape className="intro-shape-inner" color="rgba(232, 242, 248, 0.6)" width="193px" height="218px" />
                            <Text className="title">Coordicide</Text>
                            <Text className="subtitle">Removing the coordinator</Text>
                        </div>
                    </div>
                )
            }
            <Text className="subtitle">Our goal</Text>
            <Text>At the IOTA Foundation, we are preparing to take the most significant step to date in the maturity of the protocol. This step in effect realizes the dream of a permissionless and scalable distributed ledger technology (DLT). We refer to this event as Coordicide -- <strong>the death of the Coordinator.</strong></Text>
            <div className="intro-buttons-wrapper">
                <Link prefetch href="/scalability">
                    <Button
                        className="large primary"
                        icon="hexagon"
                    >
                        Get started
                    </Button>
                </Link>
                <Button
                    className="large secondary"
                    icon="search"
                    onClick={showMenu}
                >
                    View contents
                </Button>
            </div>
        </div>
    )
}

