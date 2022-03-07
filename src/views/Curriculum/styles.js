import styled, { keyframes } from 'styled-components'

// KeyFrames
const rocketFly = keyframes`
    0% { transform: translateY(5px) rotate(-45deg) }
    50% { transform: translateY(-5px) rotate(-45deg) }
    100% { transform: translateY(5px) rotate(-45deg) }
`

// Styles
export const Breadcrumb = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    /* background-image: linear-gradient(to bottom right, ${props => props.theme.colors.darkBlue}, ${props => props.theme.colors.blue}); */
    margin-bottom: 25px;

    hr {
        /* width: 35%; */
        margin-top: 10px;
        border: 1px solid ${props => props.theme.colors.grey};
        border-top: 0px;
    }

    p {
        font-weight: 500;
        font-size: 1.2rem;
    }

    a { color: ${props => props.theme.colors.white}; }
`

export const Photo = styled.div`
    @media (min-width: 1024px) { margin-right: 50px; }
`

export const About = styled.div`
    h3 { text-align: left; }
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

export const CardCv = styled.div`
    margin-top: 25px;

    h5 {
        font-weight: bold;
        font-size: 1rem;
        color: ${props => props.theme.colors.grey};
    }

    p { margin-bottom: 8px; }
    span { font-style: italic; }
`

export const CardDownloadCv = styled.div`
    margin-top: 50px;
    text-align: center;

    p { margin: 5px 0 25px 0; }

    a {
        font-weight: 600;
        color: ${props => props.theme.colors.white};
        background: ${props => props.theme.colors.darkYellow};
        border: 1.5px solid ${props => props.theme.colors.darkYellow};
        padding: 12px 32px;
        cursor: pointer;
        margin: 5px;

        &:hover {
            color: ${props => props.theme.colors.darkYellow};
            background: ${props => props.theme.colors.lightYellow};
            transition: .5s ease;
        }
    }
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