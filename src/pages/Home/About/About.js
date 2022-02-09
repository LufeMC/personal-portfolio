import { useEffect, useState } from "react"
import Container from "../../../components/Container"
import './About.scss'

const About = (props) => {
    const [anim, setAnim] = useState(props.animated)

    useEffect(() => {
        console.log(props)
        setAnim(props.animated)
        console.log(anim)
    }, [props.animated])
    return (
        <Container backgroundColor='#e91e63' text={'About'}>
            <div className="aboutContainer">
                <div className="headingWrapper color-bright">
                    <span className={anim === true ? "header header--raiseUp animated" : "header header--raiseUp"}>Intro</span>
                    <span className={anim === true ? "header appearAbout animated animated1" : "header appearAbout"}>I</span>
                    <span className={anim === true ? "header appearAbout animated animated2" : "header appearAbout"}>n</span>
                    <span className={anim === true ? "header appearAbout animated animated3" : "header appearAbout"}>t</span>
                    <span className={anim === true ? "header appearAbout animated animated4" : "header appearAbout"}>r</span>
                    <span className={anim === true ? "header appearAbout animated animated5" : "header appearAbout"}>o</span>
                </div>
                <div className = {anim === true ? "aboutBar animated" : "aboutBar"}></div>
                <div class="center">
                    <p id="text" className={anim === true ? "aboutText animated" : "aboutText"}>Hello! My name is Luis. I'm a Full-Stack Developer currently studying at Minerva University.<br/><br/>I'm organized, a passionate volleyball player and a assiduous movie and TV series watcher.<br/><br/>I can't wait to work with you!</p>
                </div>
            </div>
        </Container>
    )
}

export default About