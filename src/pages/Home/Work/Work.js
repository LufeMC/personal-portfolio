import Container from "../../../components/Container"
import './Work.scss'
import { useHistory } from 'react-router-dom';

const Work = ({ animated }) => {
    const history = useHistory()

    const goToProjects = () => {
        history.push('projects')
    }

    return (
        <Container backgroundColor='#fdfffc' text={'Work'}>
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className="workContainer">
                <h1 className={animated === true ? "gradient-text animated" : "gradient-text"} onClick={() => {
                    goToProjects()
                }}>Check my work!</h1>
                <div className={animated === true ? "button animated" : "button"}>
                    <span onClick={() => {
                        goToProjects()
                    }}>Click me!</span>
                </div>
            </div>
            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </Container>
    )
}

export default Work