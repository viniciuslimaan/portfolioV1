import styled, { keyframes } from 'styled-components'

// KeyFrames
const rocketFly = keyframes`
    0% { transform: translateY(5px) rotate(-45deg) }
    50% { transform: translateY(-5px) rotate(-45deg) }
    100% { transform: translateY(5px) rotate(-45deg) }
`

// Styles
export const Services = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`

export const Photo = styled.div`
    @media (min-width: 1024px) { margin-right: 50px; }
`

export const About = styled.div`
    h3 {
        text-align: left;
        font-size: 2rem;
        margin-bottom: 5px;
    }
    h3 > span { color: ${props => props.theme.colors.yellow}; }
    p { text-align: justify; }
    span { font-weight: bold; }

    #icons {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 15px;
        font-size: 1.3rem;
    }
`

export const CardDownloadCv = styled.div`
    margin-top: 75px;
    text-align: center;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }

    p { margin: 5px 0 25px 0; }

    a {
        font-weight: 600;
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.darkYellow};
        outline: 2px solid ${props => props.theme.colors.yellow};
        padding: 12px 32px;
        cursor: pointer;
        margin: 5px;

        &:hover {
            color: ${props => props.theme.colors.darkYellow};
            background: ${props => props.theme.colors.lightYellow};
            transition: .5s ease;
        }
    }

    a#btnOutline {
        background: transparent;
        color: ${props => props.theme.colors.yellow};

        &:hover {
            color: ${props => props.theme.colors.bg};
            background: ${props => props.theme.colors.darkYellow};
            transition: .5s ease;
        }
    }
`

export const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const Footer = styled.div`
    position: relative;
    font-size: 1.5rem;
    text-align: center;
    padding: 5rem 0;

    a {
        margin: 0 15px;
    }

    img {
        position: absolute;
        width: 3rem;
        height: 3rem;
        right: 25px;
        bottom: 35px;
        cursor: pointer;
        user-select: none;
        animation: ${rocketFly} 5s ease-in-out infinite;
    }
`