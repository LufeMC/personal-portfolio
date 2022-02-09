import './ProjectBox.scss'

const ProjectBox = (props) => {
    return (
        <div className='projectBox'>
            <img src={props.photo} className="hover" />
            <div className="hidden_attributes">
                <div>
                    <h5>{props.name}</h5>
                    <p>{props.description}</p>
                    <button onClick={() => {
                        window.open(props.url, '_blank').focus();
                    }}>Go to website</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox