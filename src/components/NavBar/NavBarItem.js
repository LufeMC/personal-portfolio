const NavBarItem = ({title, action, link, active, link2}) => {
    
    const clickSpan = () => {
        action(link, link2)
    }

    return (
        <div>
            <span onClick = {() => {
                clickSpan()
            }} style = {{cursor: 'pointer', color: active === true ? 'white' : 'rgb(180,180,180)'}}>{title}</span>
        </div>
    )
}

export default NavBarItem