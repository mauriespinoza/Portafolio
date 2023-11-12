import Image from "next/image";
import styles from '../styles/Hero.module.css'
import Button from './Button'
// import Image from 'next/image'
import Link from 'next/link'
// import {img} from '/images/yoda.webp';
const Hero = () => {
    return (
        // <div className="hero-container">
        //     <Image src='/images/yoda.webp' className="profile-img" width={300} height={300} alt="Mauricio Espinoza picture" />
        //     <div className="hero-text">
        //         <h1>Hola, soy Mauricio 👋</h1>
        //         <p>
        //             Soy ingeniero de Software. Yo me especializo en Desarrollo de aplicaciones
        //         </p>
        //         <div className="social-icons">
        //             <a
        //                 href="https://twitter.com/olawanle_joel"
        //                 aria-label="Twitter"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <i className="fa-brands fa-twitter"></i>
        //             </a>
        //             <a
        //                 href="https://github.com/olawanlejoel"
        //                 aria-label="GitHub"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <i className="fa-brands fa-github"></i>
        //             </a>
        //             <a
        //                 href="https://www.linkedin.com/in/olawanlejoel/"
        //                 aria-label="LinkedIn"
        //                 target="_blank"
        //                 rel="noopener noreferrer"
        //             >
        //                 <i className="fa-brands fa-linkedin"></i>
        //             </a>
        //         </div>
        //     </div>
        // </div>
        <section className={styles.hero}>
        <div className={styles.info}>
          <h1>
            Mauricio Espinoza
            <span>
                Desarrollador Full Stack
                
            </span>
          </h1>
          <p>Hola a todos! Soy Mauricio, ingeniero en Informática y Computación, Chile. Apasionado por la tecnología y siempre buscando cosas nuevas para aprender.</p>
          <Link href="/">
            <Button>Contáctame</Button>
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src="/images/yoda.webp"
            width={1}
            height={1}
            alt={50}
            layout="responsive"
          />
        </div>
      </section>
    )
}

export default Hero;