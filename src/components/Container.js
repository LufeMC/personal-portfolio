import ContainerDiv from './ContainerDiv'

const Container = (props) => {
    return (
        <div id='main_container' style={{backgroundColor: props.backgroundColor, height: '100vh', width: '100vw', position: 'relative', overflow: 'hidden'}} className = 'section' >
            <ContainerDiv>{props.children}</ContainerDiv>
        </div>
    )
}

export default Container