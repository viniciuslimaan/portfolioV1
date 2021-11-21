import MeImg from '../../assets/img/me.png'

import ScrollAnimation from 'react-animate-on-scroll'
import { Icon } from '@iconify/react';

import {
    Photo,
    TitleAbout,
    ContentAbout,
    Icons,
} from './styles'

import { Container, Row } from '../../styles/container.js'

export default function About() {
    return (
        <Container id="about">
            <Row>
                <ScrollAnimation animateIn='animate__animated animate__bounceInLeft' animateOut='animate__animated animate__bounceOutLeft'>
                    <Photo>
                        <img src={MeImg} width={300} height={300} alt="Imagem de um Satélite" />
                    </Photo>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOut='animate__animated animate__zoomOut'>
                    <div>
                        <h4>Quem sou?</h4>
                        <TitleAbout>Olá, eu sou o <span>Vinícius</span>!</TitleAbout>
                        <ContentAbout>
                            <p>
                                Meu nome é <span>Vinícius Lima</span>, tenho 18 anos, sou formado em técnico em informática integrado ao ensino médio na Etec de Lins. Cursei informática essencial, manutenção de computadores e redes e InDesigner na Microlins. Atualmente, estou cursando o 2º semestre em Sistemas para Internet na Fatec de Lins e o 3º ano de Inglês no CNA.
                                <br />Sou apaixonado em programação e design desde meus 12 anos. Comecei programar aos 15 anos, quando ingressei na Etec de Lins e, desde então, desenvolvo aplicações Front-End e Back-End. Particularmente, gosto e utilizo design minimalista e clean em minhas aplicações.

                            </p>
                            <Icons>
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
                            </Icons>
                        </ContentAbout>
                    </div>
                </ScrollAnimation>
            </Row>
        </Container>
    )
}