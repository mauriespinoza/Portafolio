import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/yoda.webp' className="profile-img" width={300} height={300} alt="Mauricio Espinoza picture" />
            <div className="hero-text">
                <h1>Hola, soy Mauricio 👋</h1>
                <p>
                    Soy ingeniero de Software. Yo me especializo en Desarrollo de aplicaciones
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/olawanle_joel"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/olawanlejoel"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olawanlejoel/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;