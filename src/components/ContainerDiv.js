import styled from 'styled-components';

const ContainerDiv = styled.div`
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    margin: auto;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

export default ContainerDiv