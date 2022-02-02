import styled from 'styled-components';

const NavBar = ({color}) => {
    return (
        <NavBarContainer style={{color}}>
            TESTE
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    width: 100%;
    padding: .5em 1em;
    background: rgba(0,0,0,0);
    position: fixed;
    top: 0;
    z-index: 10;
`

export default NavBar