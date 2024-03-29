import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import { MenuContext } from '../context/globalState';
import Text from './Text'
import Shape from './Shape'
import Button from './Button'
import PlayButton from './PlayButton'
import CascadingAnimation from './CascadingAnimation';

import '../styles/content.scss'

export default () => {
    const [showVideo, setShowVideo] = useState(false)
    const { showNav } = useContext(MenuContext)

    return (
        <React.Fragment>
            <div className="intro-wrapper">
                <ModalVideo 
                    channel='youtube' 
                    autoplay
                    allowFullScreen
                    isOpen={showVideo} 
                    videoId='guNNqEeu6gY' 
                    onClose={() => setShowVideo(false)} 
                />
                <div className="intro">
                    <PlayButton onClick={() => setShowVideo(true)} />
                    <CascadingAnimation />
                    <div className="intro-blur-wrapper">
                        <Shape className="intro-shape-outer" color="#ffffff" width="383px" height="434px" />
                        <Shape className="intro-shape-inner" color="rgba(232, 242, 248, 0.6)" width="193px" height="218px" />
                        <Text className="title">Coordicide</Text>
                        <Text className="subtitle">THE next step IN IOTA’s EVOLUTION</Text>
                    </div>
                </div>
                <Text className="subtitle">Our goal</Text>
                <Text>The IOTA Foundation is preparing to take its most important step to date in the maturity of the IOTA protocol — realizing the dream of a permissionless and scalable distributed ledger technology (DLT). We refer to this event as Coordicide: the death of the Coordinator</Text>
                <div className="intro-buttons-wrapper">
                    <Link to="/scalability">
                        <Button
                            className="large primary intro-page"
                            icon="hexagon"
                        >
                            Get started
                        </Button>
                    </Link>
                    <Button
                        className="large secondary intro-page"
                        icon="search"
                        onClick={showNav}
                    >
                        View contents
                    </Button>
                </div>
            </div>
            <img className="colored asset1" src="../static/Group.png"/>
            <img className="colored asset2" src="../static/Blur.png"/>
            <img className="colored asset3" src="../static/pink.png"/>
        </React.Fragment>
    )
}

