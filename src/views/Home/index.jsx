// Imports
import ScrollAnimation from 'react-animate-on-scroll'
import { Icon } from '@iconify/react'

import Imports from '../../utils/Imports'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Skill from '../../components/CardSkills'
import Portfolio from '../../components/Portfolio'

// Images and Pdf
import MeImg from '../../assets/img/me.png'
import curriculum from '../../assets/curriculum.pdf'
import ImgRocket from '../../assets/img/rocket.png'

// Styles
import {
    CardCv,
    CardDownloadCv,
    Photo,
    About,
    Skills,
    Footer
} from './styles.js'

import { Container, Row } from '../../styles/container'

export default function Home() {
    const scrollTop = () => {
        window.scrollTo({top: 0,})
    }

    return (
        <Imports>
            {/* ===== Navbar ===== */}
            <Navbar></Navbar>
            {/* ===== Header ===== */}
            <Header></Header>
            {/* ===== About ===== */}
            <Container id="about">
                <Row>
                    <ScrollAnimation animateIn='animate__animated animate__bounceInLeft' animateOnce={true}>
                        <Photo>
                            <img src={MeImg} width={300} height={300} alt="Imagem de um Satélite" />
                        </Photo>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOnce={true}>
                        <About>
                            <h4>Quem sou?</h4>
                            <h3>Olá, eu sou o <span>Vinícius</span>!</h3>
                            <p>
                                Meu nome é <span>Vinícius Lima</span>, tenho 19 anos, sou formado em técnico em informática integrado ao ensino médio na Etec de Lins. Cursei informática essencial, manutenção de computadores e redes e InDesigner na Microlins. Atualmente, estou cursando o 3º semestre em Sistemas para Internet na Fatec de Lins e o 4º ano de Inglês no CNA.
                                <br />Sou apaixonado em programação e design desde meus 12 anos. Comecei programar aos 15 anos, quando ingressei na Etec de Lins e, desde então, desenvolvo aplicações Front-End e Back-End. Particularmente, gosto e utilizo design minimalista e clean em minhas aplicações.
                            </p>
                            <div id='icons'>
                                <a href="https://www.facebook.com/viniciuslimaan/" target="_blank" rel="noreferrer">
                                    <Icon icon="brandico:facebook" />
                                </a>
                                <a href="https://www.instagram.com/viniciuslimaan/" target="_blank" rel="noreferrer">
                                    <Icon icon="akar-icons:instagram-fill" />
                                </a>
                                <a href="https://wa.me/5514991212457" target="_blank" rel="noreferrer">
                                    <Icon icon="akar-icons:whatsapp-fill" />
                                </a>
                                <a href="mailto:viniciuslimaandre@hotmail.com" target="_blank" rel="noreferrer">
                                    <Icon icon="entypo:email" />
                                </a>
                                <a href="https://github.com/viniciuslima21" target="_blank" rel="noreferrer">
                                    <Icon icon='akar-icons:github-fill' />
                                </a>
                                <a href="https://www.linkedin.com/in/viniciuslima21/" target="_blank" rel="noreferrer">
                                    <Icon icon="akar-icons:linkedinv2-fill" />
                                </a>
                            </div>
                        </About>
                    </ScrollAnimation>
                </Row>
                {/* ===== Curriculum ===== */}
                <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOnce={true}>
                    <CardCv>
                        <h4>Habilidades</h4>
                        <h5>Linguagens e Bancos de Dados</h5>
                        <p>HTML5, CSS3, Sass, JavaScript, Typescript, PHP e MySql.</p>
                        <h5>Frameworks/Libraries</h5>
                        <p>Bootstrap, ReactJs, NextJs, NodeJs, Styled-Components e PHPMailer.</p>
                        <h5>Padrões de projetos</h5>
                        <p>MVC e API RESTful.</p>
                        <h5>Ferramentas</h5>
                        <p>Microsoft Word, Microsoft PowerPoint, Microsoft Excel, Microsoft Teams, VSCode, Adobe Photoshop, CorelDRAW, Insomnia, Figma, XAMPP, MySQL Workbench, MongoDBCompass, Git e Github.</p>
                    </CardCv>
                    <CardCv>
                        <h4>Formação acadêmica</h4>
                        <p>
                            Curso Superior de Tecnologia em Sistemas para Internet, na Fatec Lins - Professor Antônio Seabra.<br />
                            <span>2021 - atualmente</span>
                        </p>
                        <p>
                            Técnico em Informática Integrado ao Ensino Médio, na Etec Lins.<br />
                            <span>2018 - 2020</span>
                        </p>
                    </CardCv>
                    <CardCv>
                        <h4>Experiência Profissional</h4>
                        <p>
                            <span>Freelancer - Desenvolvedor Front-End (Fev. de 2020 - Dez. de 2020)</span><br />
                            Desenvolvimento do website da instituição.
                        </p>
                    </CardCv>
                    <CardCv>
                        <h4>Experiência de voluntariado</h4>
                        <p>
                            <span>Etec Lins (Fev. de 2020 - Dez. de 2020)</span><br />
                            Durante esse período, ajudei alunos dando aulas de reforço na área da informática. Juntamente com três amigos, desenvolvemos o site da instituição. Desenvolvi também, artes para essa instituição.
                        </p>
                    </CardCv>
                    <CardCv>
                        <h4>Idiomas</h4>
                        <p>
                            Inglês - Intermediário
                        </p>
                    </CardCv>
                    <CardCv>
                        <h4>Cursos</h4>
                        <p>
                            Curso de Língua Inglesa, pelo CNA Idiomas.<br />
                            <span>Lins (SP), 2019 - atualmente</span>
                        </p>
                        <p>
                            Introdução ao Git e ao GitHub, pela Digital Innovation One Inc.<br />
                            <span>Lins (SP), 2021 - 2021</span>
                        </p>
                        <p>
                            Trabalhando com Componentes em React, pela Digital Innovation One Inc.<br />
                            <span>Lins (SP), 2021 - 2021</span>
                        </p>
                        <p>
                            Desenvolvimento de Interfaces com React, pelo Centro Paula Souza (FATEC Lins).<br />
                            <span>Lins (SP), 2021 - 2021</span>
                        </p>
                        <p>
                            Design de interfaces com Figma, pelo Centro Paula Souza (FATEC Lins).<br />
                            <span>Lins (SP), 2021 - 2021</span>
                        </p>
                        <p>
                            Curso Técnico em Informática Integrado ao Ensino Médio, pela Etec Lins.<br />
                            <span>Lins (SP), 2018 - 2020</span>
                        </p>
                        <p>
                            Curso Técnico Profissionalizante em InDesigner - Photoshop, Corel Draw e criação de material gráfico, pela Microlins.<br />
                            <span>Lins (SP), 2016 - 2017</span>
                        </p>
                        <p>
                            Técnico Profissionalizante em Montagem e manutenção de computadores e redes, pela Microlins.<br />
                            <span>Lins (SP), 2016 - 2016</span>
                        </p>
                        <p>
                            Curso Técnico Profissionalizante em Informática Essencial - Informática básica e Pacote Office, pela Microlins.<br />
                            <span>Lins (SP), 2015 - 2015</span>
                        </p>
                    </CardCv>
                    <CardDownloadCv>
                        <h4>Curriculum Vitae</h4>
                        <p>
                            Clique no botão abaixo e faça o download do meu Curriculum Vitae.
                        </p>
                        <a href={curriculum} download="curriculum_viniciusLima.pdf">Download CV</a>
                    </CardDownloadCv>
                </ScrollAnimation>
            </Container>
            {/* ===== Skills ===== */}
            <Container id="skills">
                <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true}>
                    <h4>Habilidades</h4>
                    <h3>Algumas tecnologias que utilizo.</h3>
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
                        <Skill icon='cib:adobe-photoshop' title='Photoshop' />
                    </Skills>
                </ScrollAnimation>
            </Container>
            {/* ===== Portfólio ===== */}
            <Portfolio></Portfolio>
            {/* ===== Footer ===== */}
            <Footer>
                <a href="https://github.com/viniciuslima21" target="_blank" rel="noreferrer">
                    <Icon icon='akar-icons:github-fill' />
                </a>
                <a href="https://www.linkedin.com/in/viniciuslima21/" target="_blank" rel="noreferrer">
                    <Icon icon="akar-icons:linkedinv2-fill" />
                </a>
                <img src={ImgRocket} alt="Imagem de um foguete" onClick={() => scrollTop()} />
            </Footer>
        </Imports>
    )
}