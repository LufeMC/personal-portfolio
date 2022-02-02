import Circle from "../../../components/Circle"
import Container from "../../../components/Container"
import AnimatedText from "../../../components/AnimatedText"
import Line from "../../../components/Line"
import Name from "../../../components/Name"
import { ThemeProvider } from "styled-components"
import Greeting from "../../../components/Greeting/Greeting"

const Intro = () => {
    return (
        <Container backgroundColor='#1E232B'>
            <Greeting />
        </Container>
    )
}

export default Intro