import { projectData } from './data.js';
import styles from "../styles/Projects.module.css";
import Link from 'next/link';
import { H1, H2 } from './Heading.jsx';
import Comment from './Comment.jsx';
import ProjectView from './ProjectView.jsx';
import Button from './Button';

export const Projects = () => {
    return (
        <div id="proyectosId" className="projects-container">
            <h2>Proyectos</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                            <div className="small-icons">
                                <a href={project.gitHubLink}><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))
                }
            </div>
        </div>
    //     <section className={styles.container}>
    //   {<H2>{"Proyectos"}</H2>}
    //   <Comment>Estos son los principales proyectos que he desarrollado utilizando tanto tecnologías de Frontend como de Backend. Algunas de las tecnologías utilizadas incluyen JavaScript, React, MongoDB, Express, MaterialUI, MySQL, Mongoose y Nodejs. Existen algunos proyectos desarrollados de manera grupal mientras cursaba el Bootcamp de programación Full Stack MERN de Mindhub, como otros desarrollados de manera individual (entregas del bootcamp, desarrollo de pruebas técnicas y proyectos personales).</Comment>
    //   <ProjectView projectData={projectData}/>
      
    //     <Link href="#proyectosId" passHref>
    //       {/* <Button>{button}</Button> */}
    //     </Link>
      
    // </section>
    )
}

//export default Projects;