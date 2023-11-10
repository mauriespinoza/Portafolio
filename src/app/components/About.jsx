import styles from './about.css'

export const About = () => {
  return (
    <div id="aboutId" className="about-container">
    <h2>Acerca de Mi</h2>
    <div className="flex-about">
        <div className="about-text">
            <p>
              Como desarrollador, siempre me ha apasionado crear soluciones elegantes y eficaces a problemas complejos. Tengo una base sólida en el desarrollo de software, con enfoque en tecnologías web como HTML, CSS y JavaScript. Disfruto trabajando tanto en el front-end como en el back-end de las aplicaciones y siempre estoy buscando formas de optimizar el rendimiento, mejorar la experiencia del usuario y garantizar el más alto nivel de calidad del código.
            </p>
            <p>A lo largo de mi carrera, he trabajado en una amplia gama de proyectos, desde simples sitios web estáticos hasta complejas aplicaciones de nivel empresarial en el area Banking y Seguridad Electrónica. Tengo experiencia trabajando con una variedad de marcos y herramientas de desarrollo, incluidos React, Angular, Node.js, Java, ASP.Net, C#, Visual Basic. Siempre estoy ansioso por aprender y explorar nuevas tecnologías, y busco constantemente oportunidades para mejorar mis habilidades y conocimientos.

</p>
        </div>
        {/* <div className="about-img">
            <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
        </div> */}
    </div>
</div>
  )
}
