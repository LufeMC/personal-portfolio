import { useEffect, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import About from './About/About';
import Contact from './Contact/Contact';
import Intro from './Intro/Intro';
import Work from './Work/Work';

const Home = (props) => {
    const [currentPage, setCurrentPage] = useState(null)

    const handlePageChange = number => {
        setCurrentPage(number)
    };

    const handleBeforePageChange = number => {
        const color = number !== 2 ? 'white' : 'black'
        props.changeBackground(color)
    };


    return (
        <ReactPageScroller
            pageOnChange={handlePageChange}
            onBeforePageScroll={handleBeforePageChange}
            customPageNumber={currentPage}
        >
            <Intro />
            <About />
            <Work />
            <Contact />
        </ReactPageScroller>
    )
}

export default Home