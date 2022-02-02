import styled, {keyframes} from 'styled-components'

const showUp = keyframes`
    from {
        transform: translate(-100%, 0);
    }

    to {
        transform: translate(0);
    }
`

const Line = styled.div`
    height: 1em;
    width: 35%;
    background-color: white;
    margin: 1em 0;
    animation: ${showUp} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) .5s both;
`

export default Line