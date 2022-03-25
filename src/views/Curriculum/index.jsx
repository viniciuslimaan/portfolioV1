// Imports
import ScrollAnimation from 'react-animate-on-scroll'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

import Imports from '../../utils/Imports'

// Images and Pdf
import MeImg from '../../assets/img/me.png'
import curriculum from '../../assets/curriculum.pdf'
import ImgRocket from '../../assets/img/rocket.png'

// Styles
import {
    Breadcrumb,
    Photo,
    About,
    CardCv,
    CardDownloadCv,
    Footer
} from './styles'

import { Container, Row } from '../../styles/container'

export default function Curriculum() {
    // Scroll to top
    const scrollTop = () => {
        window.scrollTo({top: 0,})
    }

    // Getting my age
    const myAge = new Date().getFullYear() - 2003

    return (
        <Imports>
            <Container>
                {/* ===== Breadcrumb ===== */}
                <Breadcrumb>
                    <p><Link to="/">Página Inicial</Link> / Currículo</p>
                    <hr />
                </Breadcrumb>
                {/* ===== About ===== */}
                <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true}>
                    <Row>
                        <Photo>
                            <img src={MeImg} width={300} height={300} alt="Imagem de um Satélite" />
                        </Photo>
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
                    </Row>
                    {/* ===== Curriculum ===== */}
                    <CardCv>
                        <h4>Habilidades</h4>
                        <h5>Linguagens e Bancos de Dados</h5>
                        <p>HTML5, CSS3, Sass, JavaScript, PHP e MySql.</p>
                        <h5>Frameworks/Libraries</h5>
                        <p>Bootstrap, ReactJs, NextJs, NodeJs, Styled-Components e PHPMailer.</p>
                        <h5>Padrões de projetos</h5>
                        <p>MVC e API RESTful.</p>
                        <h5>Ferramentas</h5>
                        <p>Microsoft Word, Microsoft PowerPoint, Microsoft Excel, Microsoft Teams, VSCode, Adobe Photoshop, CorelDRAW, Insomnia, XAMPP, MySQL Workbench, MongoDBCompass, Git e Github.</p>
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
                            Durante esse período, ajudei alunos dando aulas de reforço na área da informática. Juntamente com três amigos, desenvolvemos o site da instituição. Desenvolvi também, artes para a mesma.
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
                            Desenvolvimento de Interfaces com React, pela Fatec Lins.<br />
                            <span>Lins (SP), 2021 - 2021</span>
                        </p>
                        <p>
                            Design de interfaces com Figma, pela Fatec Lins.<br />
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
            {/* ===== Footer ===== */}
            <Footer>
                <a href="https://github.com/viniciuslimaan" target="_blank" rel="noreferrer">
                    <Icon icon='akar-icons:github-fill' />
                </a>
                <a href="https://www.linkedin.com/in/viniciuslimaan" target="_blank" rel="noreferrer">
                    <Icon icon="akar-icons:linkedinv2-fill" />
                </a>
                <img src={ImgRocket} alt="Imagem de um foguete" onClick={() => scrollTop()} />
            </Footer>
        </Imports>
    )
}