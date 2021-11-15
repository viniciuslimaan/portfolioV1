import { useState, useEffect } from 'react'

import { Icon } from '@iconify/react'

import {
    NavbarContent,
    Logo,
    Buttons,
    Button,
    ButtonsHamburger,
    Hamburger,
} from './styles'

export default function Navbar() {
    const [opened, setOpened] = useState(false)
    const [changeBg, setchangeBg] = useState(false)

    function close() {
        setOpened(!opened)
    }

    function changeNavbarBg() {
        if(window.scrollY >= 60)
            setchangeBg(true)
        else
            setchangeBg(false)
    }

    useEffect(() => {
        changeNavbarBg()
        window.addEventListener('scroll', changeNavbarBg)

        return () => {
            document.removeEventListener("scroll", changeNavbarBg)
        }
    })

    return(
        <>
            <NavbarContent changeBg={changeBg}>
                <Logo>
                    vinícius<span>.</span>lima
                </Logo>
                {/* Normal */}
                <Buttons>
                    <Button href="#about">
                        Quem sou?
                    </Button>
                    <Button href="#skills">
                        Habilidades
                    </Button>
                    <Button href="#portfolio">
                        Portfólio
                    </Button>
                </Buttons>
                {/* Hamburger */}
                <Hamburger>
                    <Icon icon={opened === false ? 'subway:menu' : 'vaadin:grid-small-o'} onClick={() => close()}/>
                </Hamburger>
            </NavbarContent>
            <ButtonsHamburger opened={opened}>
                <Button href="#about" buttonHamburger onClick={() => close()}>
                    Quem sou?
                </Button>
                <Button href="#skills" buttonHamburger onClick={() => close()}>
                    Habilidades
                </Button>
                <Button href="#portfolio" buttonHamburger onClick={() => close()}>
                    Portfólio
                </Button>
            </ButtonsHamburger>
        </>
    )
}