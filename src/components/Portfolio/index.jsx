import { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
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
            <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOut='animate__animated animate__fadeOut'>
                <h4>Portfólio</h4>
                <h3>Projetos que desenvolvi.</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOut='animate__animated animate__zoomOut'>
                <Row>
                    <Cards>
                        {
                            portfolio.length > 0 && portfolio.map(data => (
                                <Card key={ data._id }
                                    linkImg={process.env.REACT_APP_API_URL + '/images/' + data.img}
                                    type={ data.type === 1 ? 'Arte' : data.type === 2 ? 'Aplicativo Web' : 'Aplicativo Mobile' } 
                                    title={ data.title }
                                    github={ data.githubLink }
                                    view={ data.type === 1 ? process.env.REACT_APP_API_URL + '/images/' + data.img : data.deployLink }
                                />
                            ))
                        }
                    </Cards>
                </Row>
                <LinkGit>Você pode encontrar mais projetos no meu <a href="https://github.com/viniciuslima21" target="_blank" rel="noreferrer">GitHub</a>.</LinkGit>
            </ScrollAnimation>
        </Container>
    )
}