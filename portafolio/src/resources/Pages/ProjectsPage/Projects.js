import './Projects.css';
import Header from '../../Components/Header/header';
import ProjectCard from '../../Components/ProjectCard/projectCard';

const Projects = () => {
    return (
        <div className='o-body'>
            <Header/>
            <div className='o-projects-content'>
                <ProjectCard/>
            </div>
        </div>
    )
}

export default Projects;