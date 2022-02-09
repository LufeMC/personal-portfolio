import { useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import About from './About/About';
import Contact from './Contact/Contact';
import Intro from './Intro/Intro';
import Work from './Work/Work';
import ReactFullpage from '@fullpage/react-fullpage';
import './About/About.scss'
import {Helmet} from "react-helmet";

const Home = (props) => {
    const [currentPage, setCurrentPage] = useState('home')
    const [about, setAbout] = useState(false)
    const [work, setWork] = useState(false)
    const [contact, setContact] = useState(false)

    const animate = (origin, destination, direction) => {
        const aboutItems = destination.item.querySelectorAll('.appearAbout')
        const ocean = destination.item.querySelectorAll('.ocean')
        const contact = destination.item.querySelectorAll('.contactContainer')
        if (aboutItems && aboutItems.length && aboutItems.length > 0) {
            setAbout(true)
        }
        if (ocean && ocean.length && ocean.length > 0) {
            setWork(true)
        }
        if (contact && contact.length && contact.length > 0) {
            setContact(true)
        }

        if (aboutItems && aboutItems.length && aboutItems.length > 0) {
            setCurrentPage('about')
        } else if (ocean && ocean.length && ocean.length > 0) {
            setCurrentPage('work')
        } else if (contact && contact.length && contact.length > 0) {
            setCurrentPage('contact')
        } else {
            setCurrentPage('home')
        }
    }

    return (
        <ReactFullpage
            //fullpage options
            licenseKey={'YOUR_KEY_HERE'}
            navigation={true}
            afterLoad={(origin, destination, direction) => {
                animate(origin, destination, direction)
            }}
            scrollingSpeed={1000} /* Options here */
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        <Helmet>
                            <title>Luis Cerqueira</title>
                        </Helmet>
                        <Intro />
                        <About animated={about} />
                        <Work animated={work} />
                        <Contact animated={contact} />
                    </ReactFullpage.Wrapper>
                )
            }}
        />
    )
}

export default Home