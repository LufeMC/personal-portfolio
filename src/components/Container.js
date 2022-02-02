import NavBar from './NavBar'
import ContainerDiv from './ContainerDiv'

const Container = (props) => {
    return (
        <div style={{backgroundColor: props.backgroundColor, height: '100vh', position: 'relative', overflow: 'hidden'}}>
            <ContainerDiv>{props.children}</ContainerDiv>
        </div>
    )
}

export default Container