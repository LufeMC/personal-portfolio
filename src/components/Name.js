import styled,{keyframes} from 'styled-components';

const shadowPop = keyframes`
    0% {
        text-shadow: 0 0 #f93800, 0 0 #f93800, 0 0 #f93800, 0 0 #f93800, 0 0 #f93800, 0 0 #f93800, 0 0 #f93800, 0 0 #f93800;
        transform: translateX(0) translateY(0);
    }
    100% {
        text-shadow: -1px -1px #f93800, -2px -2px #f93800, -3px -3px #f93800, -4px -4px #f93800, -5px -5px #f93800, -6px -6px #f93800, -7px -7px #f93800, -8px -8px #f93800;
        transform: translateX(8px) translateY(8px);
        
    }
`

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

const Name = styled.span`
    font-size: 5.5em;
    font-weight: 400;
    font-family: "Londrina Solid",cursive;
    animation: ${shadowPop} 0.25s 2s both, ${textFocusIn} 0.7s 1.5s both;
`

export default Name