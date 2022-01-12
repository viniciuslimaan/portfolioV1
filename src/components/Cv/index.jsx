import ScrollAnimation from 'react-animate-on-scroll'

import curriculum from '../../assets/curriculum.pdf'

import {
    Container2,
    CardCv,
    Title,
    SubTitle,
    Text,
    Italic,
    BaixarCv,
} from './styles'

export default function Cv() {
    return (
        <Container2>
            <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOut='animate__animated animate__zoomOut'>
                <CardCv>
                    <Title>Habilidades</Title>
                    <SubTitle>Linguagens e Bancos de Dados</SubTitle>
                    <Text>HTML5, CSS3, Sass, JavaScript, Typescript, PHP e MySql.</Text>
                    <SubTitle>Frameworks/Libraries</SubTitle>
                    <Text>Bootstrap, ReactJs, NextJs, NodeJs, Styled-Components e PHPMailer.</Text>
                    <SubTitle>Padrões de projetos</SubTitle>
                    <Text>MVC e API RESTful.</Text>
                    <SubTitle>Ferramentas</SubTitle>
                    <Text>Microsoft Word, Microsoft PowerPoint, Microsoft Excel, Microsoft Teams, VSCode, Adobe Photoshop, CorelDRAW, Insomnia, Figma, XAMPP, MySQL Workbench, MongoDBCompass, Git e Github.</Text>
                </CardCv>
                <CardCv>
                    <Title>Trabalho voluntário</Title>
                    <Text>
                        <Italic>Etec Lins (Fev. de 2020 - Dez. de 2020)</Italic><br />
                        Durante esse período, ajudei alunos dando aulas de reforço na área da informática. Juntamente com três amigos, desenvolvemos o site da instituição. Desenvolvi também, artes para essa instituição.
                    </Text>
                </CardCv>
                <CardCv>
                    <Title>Idiomas</Title>
                    <Text>
                        Inglês - Intermediário
                    </Text>
                </CardCv>
                <CardCv>
                    <Title>Formação acadêmica</Title>
                    <Text>
                        Curso Superior de Tecnologia em Sistemas para Internet, na Fatec Lins - Professor Antônio Seabra.<br />
                        <Italic>2021 - atualmente</Italic>
                    </Text>
                    <Text>
                        Técnico em Informática Integrado ao Ensino Médio, na Etec Lins.<br />
                        <Italic>2018 - 2020</Italic>
                    </Text>
                </CardCv>
                <CardCv>
                    <Title>Cursos</Title>
                    <Text>
                        Curso de Língua Inglesa, pelo CNA Idiomas.<br />
                        <Italic>Lins (SP), 2019 - atualmente</Italic>
                    </Text>
                    <Text>
                        Introdução ao Git e ao GitHub, pela Digital Innovation One Inc.<br />
                        <Italic>Lins (SP), 2021 - 2021</Italic>
                    </Text>
                    <Text>
                        Desenvolvimento de Interfaces com React, pelo Centro Paula Souza (FATEC Lins).<br />
                        <Italic>Lins (SP), 2021 - 2021</Italic>
                    </Text>
                    <Text>
                        Design de interfaces com Figma, pelo Centro Paula Souza (FATEC Lins).<br />
                        <Italic>Lins (SP), 2021 - 2021</Italic>
                    </Text>
                    <Text>
                        Curso Técnico em Informática Integrado ao Ensino Médio, pela Etec Lins.<br />
                        <Italic>Lins (SP), 2018 - 2020</Italic>
                    </Text>
                    <Text>
                        Curso Técnico Profissionalizante em InDesigner - Photoshop, Corel Draw e criação de material gráfico, pela Microlins.<br />
                        <Italic>Lins (SP), 2016 - 2017</Italic>
                    </Text>
                    <Text>
                        Técnico Profissionalizante em Montagem e manutenção de computadores e redes, pela Microlins.<br />
                        <Italic>Lins (SP), 2016 - 2016</Italic>
                    </Text>
                    <Text>
                        Curso Técnico Profissionalizante em Informática Essencial - Informática básica e Pacote Office, pela Microlins.<br />
                        <Italic>Lins (SP), 2015 - 2015</Italic>
                    </Text>
                </CardCv>
                <BaixarCv>
                    <Title>Curriculum Vitae</Title>
                    <Text>
                        Clique no botão abaixo e faça o download do meu Curriculum Vitae.
                    </Text>
                    <a href={curriculum} download="curriculum_viniciusLima.pdf">Download CV</a>
                </BaixarCv>
            </ScrollAnimation>
        </Container2>
    )
}