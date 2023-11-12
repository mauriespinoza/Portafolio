import styles from '../styles/ProjectView.module.css'
import ProjectCard from './ProjectCard'

const ProjectView = ({ projectData }) => {
    return (
        <section className={styles.gridContainer}>
            {projectData.map(project => <ProjectCard projectData={project} key={project.id} />)}
        </section>
    )
}

export default ProjectView