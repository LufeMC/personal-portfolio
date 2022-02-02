import Circle from "../../../components/Circle"
import Container from "../../../components/Container"
import AnimatedText from "../../../components/AnimatedText"
import Line from "../../../components/Line"
import Name from "../../../components/Name"
import { ThemeProvider } from "styled-components"
import Bubbles from "../../../components/Sparkles/Sparkles"
import Greeting from "../../../components/Greeting/Greeting"

const Intro = () => {
    return (
        <Container backgroundColor='#1E232B'>
            <Greeting />
            {/* <Bubbles /> */}
            {/* <div> */}
                {/* <div> */}
                    {/* <Line /> */}
                    {/* <Greeting /> */}
                    {/* <Name style={{ color: '#F5B301' }}>Luis Fernando</Name><br /> */}
                    {/* <AnimatedText style={{ color: '#F5B301', fontSize: '5em', fontWeight: '300' }}>Full-Stack Web Developer</AnimatedText><br />
                    <AnimatedText style={{ color: '#F5B301', fontSize: '3em', fontWeight: '300' }}>Doing what I like to give you something you love</AnimatedText> */}
                    {/* <Line /> */}
                {/* </div> */}
                {/* <Circle style={{ height: '300px', width: '300px', right: '-80px', bottom: '-80px' }} /> */}
            {/* </div> */}
        </Container>
    )
}

export default Intro