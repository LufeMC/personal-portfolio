import styled, {keyframes} from 'styled-components';

const scaleUp = keyframes`
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
`

const Circle = styled.div`
    border-radius: 100%;
    background-color: white;
    position: absolute;
    animation: ${scaleUp} 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`
export default Circle