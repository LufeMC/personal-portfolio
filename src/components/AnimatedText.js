import styled, { keyframes } from 'styled-components';

const textFocusIn = keyframes`
    0% {
        filter: blur(12px);
        opacity: 0;
    }
    100% {
        filter: blur(0px);
        opacity: 1;
    }
`

const AnimatedText = styled.span`
    font-size: 5.5em;
    font-weight: 400;
    font-family: "Londrina Solid",cursive;
    animation: ${textFocusIn} 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) ${props => props.theme.delay} both
`
AnimatedText.defaultProps = {
    theme: {
        delay: `2.3s`
    }
}

export default AnimatedText