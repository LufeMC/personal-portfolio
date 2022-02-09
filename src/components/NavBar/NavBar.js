import styled from 'styled-components';
import NavBarItem from './NavBarItem';
import * as AiIcons from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const NavBar = ({color}) => {
    const history = useHistory()
    const [link, setLink] = useState('home')

    const pushHistory = (link, link2) => {
        history.push(link)
        setLink(link2)
    }
    
    return (
        <NavBarContainer>
            <div style={{padding: '.5em 1em'}}>
                <NavBarItem title = 'Home' action = {pushHistory} link = '' link2 = 'home' active = {true}/>
            </div>
            <div style={{padding: '.5em 1em'}}>
                <NavBarItem title = 'Projects' action = {pushHistory} link = 'projects' link2 = 'projects' active = {true}/>
            </div>
            {/* <div style={{padding: '.5em 1em'}}>
                <NavBarItem title = 'Contact' active = {false}/>
            </div> */}
            <div style={{padding: '.5em 1em'}}>
                <NavBarItem title = {<AiIcons.AiFillGithub/>} active = {true} action={() => {
                    window.open('https://www.github.com/LufeMC', '_blank').focus();
                }}/>
            </div>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
    width: 100%;
    background: rgba(0,0,0,0);
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center;
`

export default NavBar