import { useEffect, useState } from 'react'
import Container from '../../components/Container'
import ProjectBox from '../../components/ProjectBox/ProjectBox'
import './Projects.scss'
import { projectService } from '../../integration/project'
import { Helmet } from "react-helmet";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        projectService.list((response) => {
            console.log(response.data)
            setProjects(response.data)
        })
    }, [])

    return (
        <Container backgroundColor='#1E232B' text={'Projects'}>
            <Helmet>
                <title>Luis Cerqueira - Projects</title>
            </Helmet>
            <div className='projects_container'>
                {projects.map((project) => {
                    return (
                        <ProjectBox name={project.name} description={project.description} url={project.url} photo={project.photo} />
                    )
                })}
            </div>
        </Container>
    )
}

export default Projects