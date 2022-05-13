// Imports
import ScrollAnimation from 'react-animate-on-scroll'
import { Icon } from '@iconify/react'
// import { Link } from 'react-router-dom'

import Imports from '../../utils/Imports'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import CardServices from '../../components/CardServices'
import Skill from '../../components/CardSkills'
import Portfolio from '../../components/Portfolio'

// Images and Pdf
import MeImg from '../../assets/img/me.png'
import curriculum from '../../assets/curriculum.pdf'
import ImgRocket from '../../assets/img/rocket.png'

// Styles
import {
    Services,
    CardDownloadCv,
    Photo,
    About,
    Skills,
    Footer
} from './styles.js'

import { Container, Row } from '../../styles/container'

export default function Home() {
    // Scroll to top
    const scrollTop = () => {
        window.scrollTo({ top: 0, })
    }

    // Getting my age
    const myAge = new Date().getFullYear() - 2003

    return (
        <Imports>
            {/* ===== Navbar ===== */}
            <Navbar />
            {/* ===== Header ===== */}
            <Header />
            {/* ===== Services ===== */}
            <Container>
                {/* <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true}>
                    <h3>Serviços</h3>
                    <p className="subtitle">Realizo essas atividades.</p>
                </ScrollAnimation> */}
                <ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce={true}>
                    <Services>
                        <CardServices>
                            <span>
                                <Icon icon="ph:lightbulb-filament-duotone" inline={true} />
                            </span>
                            <h4>Design</h4>
                            <p>Desenho e crio logos, flyers, artes de divulgação, entre outros.</p>
                        </CardServices>
                        <CardServices>
                            <span>
                                <Icon icon="ph:desktop-duotone" inline={true} />
                            </span>
                            <h4>Desenvolvimento Web</h4>
                            <p>Projeto e desenvolvo aplicações web desde um simples landing page até um e-commerce.</p>
                        </CardServices>
                        <CardServices>
                            <span>
                                <Icon icon="ph:device-mobile-duotone" inline={true} />
                            </span>
                            <h4>Desenvolvimento Mobile</h4>
                            <p>Planejo e desenvolvo aplicativos mobile para Android e iOS.</p>
                        </CardServices>
                    </Services>
                </ScrollAnimation>
            </Container>
            {/* ===== About ===== */}
            <Container id="about">
                <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true}>
                    <h3>Quem sou?</h3>
                    <p className="subtitle">Conheça um pouco sobre mim.</p>
                </ScrollAnimation>
                <Row>
                    <ScrollAnimation animateIn='animate__animated animate__bounceInLeft' animateOnce={true}>
                        <Photo>
                            <img src={MeImg} width={300} height={300} alt="Imagem de um Satélite" />
                        </Photo>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOnce={true}>
                        <About>
                            <h3>Olá, eu sou o <span>Vinícius</span>!</h3>
                            <p>
                                Meu nome é <span>Vinícius Lima</span>, tenho {myAge} anos, sou formado em técnico em informática integrado ao ensino médio na Etec Lins e atualmente estou cursando tecnólogo em Sistemas para Internet na Fatec Lins.
                                <br />Sou apaixonado por tecnologia e inovação desde pequeno, tive meu primeiro contato com programação aos 12 anos, onde eu desenvolvia scripts para jogos de computador. Comecei realmente a programar aos 15, quando ingressei na Etec Lins e, desde então, desenvolvo aplicações Front-End e Back-End. Particularmente, gosto e utilizo design minimalista e clean em minhas aplicações.
                            </p>
                            <div id='icons'>
                                <a href="https://www.facebook.com/viniciuslimaan" target="_blank" rel="noreferrer">
                                    <Icon icon="brandico:facebook" />
                                </a>
                                <a href="https://www.instagram.com/viniciuslimaan" target="_blank" rel="noreferrer">
                                    <Icon icon="akar-icons:instagram-fill" />
                                </a>
                                <a href="https://wa.me/5514991212457" target="_blank" rel="noreferrer">
                                    <Icon icon="akar-icons:whatsapp-fill" />
                                </a>
                                <a href="mailto:viniciuslimaandre@hotmail.com" target="_blank" rel="noreferrer">
                                    <Icon icon="entypo:email" />
                                </a>
                                <a href="https://github.com/viniciuslimaan" target="_blank" rel="noreferrer">
                                    <Icon icon='akar-icons:github-fill' />
                                </a>
                                <a href="https://www.linkedin.com/in/viniciuslimaan" target="_blank" rel="noreferrer">
                                    <Icon icon="akar-icons:linkedinv2-fill" />
                                </a>
                            </div>
                        </About>
                    </ScrollAnimation>
                </Row>
                {/* ===== Curriculum ===== */}
                <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOnce={true}>
                    <CardDownloadCv>
                        <h4>Curriculum Vitae</h4>
                        <p>
                            Clique no botão abaixo e faça o download do meu Curriculum Vitae.
                            {/* Faça o download do meu Curriculum Vitae ou acesse online. */}
                        </p>
                        <a href={curriculum} download="curriculum_viniciusLima.pdf" id="btnOutline">Download CV</a>
                        {/* <Link to="/curriculum">CV Online</Link> */}
                    </CardDownloadCv>
                </ScrollAnimation>
            </Container>
            {/* ===== Skills ===== */}
            <Container id="skills">
                <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true}>
                    <h3>Habilidades</h3>
                    <p className="subtitle">Algumas tecnologias que utilizo.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOnce={true}>
                    <Skills>
                        <Skill icon='simple-icons:html5' title='HTML5' />
                        <Skill icon='simple-icons:css3' title='CSS3' />
                        <Skill icon='simple-icons:sass' title='Sass' />
                        <Skill icon='cib:bootstrap' title='Bootstrap' />
                        <Skill icon='simple-icons:javascript' title='Javascript' />
                        <Skill icon='simple-icons:react' title='ReactJs' />
                        <Skill icon='akar-icons:node-fill' title='NodeJs' />
                        <Skill icon='simple-icons:nextdotjs' title='NextJs' />
                        <Skill icon='simple-icons:php' title='php' />
                        <Skill icon='fontisto:mysql' title='MySql' />
                        <Skill icon='simple-icons:mongodb' title='MongoDB' />
                        <Skill icon='simple-icons:git' title='Git' />
                        <Skill icon='simple-icons:github' title='GitHub' />
                        <Skill icon='akar-icons:figma-fill' title='Figma' />
                        <Skill icon='cib:adobe-photoshop' title='Photoshop' />
                    </Skills>
                </ScrollAnimation>
            </Container>
            {/* ===== Portfólio ===== */}
            <Portfolio />
            {/* ===== Footer ===== */}
            <Footer>
                <a href="https://github.com/viniciuslimaan" target="_blank" rel="noreferrer">
                    <Icon icon='akar-icons:github-fill' />
                </a>
                <a href="https://www.linkedin.com/in/viniciuslimaan/" target="_blank" rel="noreferrer">
                    <Icon icon="akar-icons:linkedinv2-fill" />
                </a>
                <img src={ImgRocket} alt="Imagem de um foguete" onClick={() => scrollTop()} />
            </Footer>
        </Imports>
    )
}