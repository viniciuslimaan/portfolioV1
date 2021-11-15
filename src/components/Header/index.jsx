import ScrollAnimation from 'react-animate-on-scroll'
import { Icon } from '@iconify/react'

import SatelliteImg from '../../assets/img/satellite.png'
import EarthImg from '../../assets/img/earth.png'

import {
    Title,
    SubTitle,
    AfterBanner,
    Waves,
    Meteor,
    Satellite,
    Earth,
    Down,
} from './styles'

import BgStars from '../BgStars'

export default function Header() {
    return (
        <>
            <BgStars>
                <ScrollAnimation
                    animateIn='animate__animated animate__fadeIn'
                    animateOut='animate__animated animate__fadeOut'
                >
                    <ScrollAnimation
                        animateIn='animate__animated animate__fadeInDown'
                        animateOut='animate__animated animate__bounceOut'
                    >
                        <Title>vinícius<span>.</span>lima</Title>
                    </ScrollAnimation>
                    <SubTitle>Desenvolvedor Full-Stack &amp; Designer</SubTitle>
                    <Meteor name="meteorFall1" />
                    <Meteor name="meteorFall2" />
                    <Satellite>
                        <img src={SatelliteImg} width={70} alt="Imagem de um Satélite" />
                    </Satellite>
                    <Earth>
                        <img src={EarthImg} width={110} alt="Imagem do planeta Terra" />
                    </Earth>
                    <Down>
                        <a href="#about">
                            <Icon icon="bx:bx-chevron-down" />
                        </a>
                    </Down>
                </ScrollAnimation>
            </BgStars>
            <AfterBanner>
                <Waves>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#001d3d" d="M0,64L26.7,74.7C53.3,85,107,107,160,96C213.3,85,267,43,320,42.7C373.3,43,427,85,480,112C533.3,139,587,149,640,165.3C693.3,181,747,203,800,186.7C853.3,171,907,117,960,90.7C1013.3,64,1067,64,1120,90.7C1173.3,117,1227,171,1280,160C1333.3,149,1387,75,1413,37.3L1440,0L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                </Waves>
                <Waves>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250"><path fill="#000814" width="100%" d="M0,96L26.7,117.3C53.3,139,107,181,160,170.7C213.3,160,267,96,320,101.3C373.3,107,427,181,480,213.3C533.3,245,587,235,640,197.3C693.3,160,747,96,800,58.7C853.3,21,907,11,960,48C1013.3,85,1067,171,1120,208C1173.3,245,1227,235,1280,202.7C1333.3,171,1387,117,1413,90.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
                </Waves>
            </AfterBanner>
        </>
    )
}