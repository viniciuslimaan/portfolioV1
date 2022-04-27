import { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import SimpleReactLightbox,{ SRLWrapper } from "simple-react-lightbox"
import api from '../../services/api'

import Card from '../CardPortfolio'
import { Container, Row } from '../../styles/container'
import { Cards, LinkGit } from './styles'

export default function Portfolio() {
    const [portfolio, setPortfolio] = useState([])

    async function loadPortfolio() {
        await api.get('/portfolio')
            .then(response => {
                setPortfolio(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        loadPortfolio()
    }, [])

    return(
        <Container id="portfolio">
            <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOnce={true}>
                <h3>Portfólio</h3>
                <p className="subtitle">Projetos que desenvolvi.</p>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOnce={true}>
                <Row>
                    <SimpleReactLightbox>
                    <SRLWrapper>
                        <Cards>
                                {
                                    portfolio.length > 0 && portfolio.map(data => (
                                        <Card key={ data._id }
                                        linkImg={process.env.REACT_APP_API_URL + '/images/' + data.img}
                                        type={ data.type === 1 ? 'Design' : data.type === 2 ? 'Aplicativo Web' : 'Aplicativo Mobile' }
                                        title={ data.title }
                                        github={ data.githubLink }
                                        view={ data.deployLink }
                                        />
                                    ))
                                }
                        </Cards>
                    </SRLWrapper>
                    </SimpleReactLightbox>
                </Row>
                <LinkGit>Você pode encontrar mais projetos no meu <a href="https://github.com/viniciuslimaan" target="_blank" rel="noreferrer">GitHub</a>.</LinkGit>
            </ScrollAnimation>
        </Container>
    )
}
