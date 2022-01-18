import { Link } from 'react-router-dom'

import AstronautImg from '../../assets/img/astronaut.png'
import VenusImg from '../../assets/img/venus.png'

import Imports from '../../utils/Imports'
import BgStars from '../../components/BgStars'
import Button from '../../components/Button'

import { Content, Astronaut, Venus } from './styles'

export default function NotFound() {
    return (
        <Imports>
            <BgStars>
                <Content>
                    <h1>404</h1>
                    <p><b>Página não encontrada!</b><br />Talvez você tenha se perdido no espaço...</p>
                    <Astronaut src={AstronautImg} alt="Imagem de um astronauta" />
                    <Venus src={VenusImg} alt="Imagem do planeta Vênus" />
                    <Link to="/">
                        <Button title="Voltar ao início" />
                    </Link>
                </Content>
            </BgStars>
        </Imports>
    )
}