import ImgRocket from '../../assets/img/rocket.png'

import { Icon } from '@iconify/react'

import { FooterContent } from './styles'

export default function Footer() {
    const scrollTop = () => {
        window.scrollTo({top: 0,})
    }

    return(
        <FooterContent>
            <a href="https://github.com/viniciuslima21" target="_blank" rel="noreferrer">
                <Icon icon='akar-icons:github-fill' />
            </a>
            <a href="https://www.linkedin.com/in/viniciuslima21/" target="_blank" rel="noreferrer">
                <Icon icon="akar-icons:linkedinv2-fill" />
            </a>
            <img src={ImgRocket} alt="Imagem de um foguete" onClick={() => scrollTop()} />
        </FooterContent>
    )
}