import styled, { keyframes } from 'styled-components'

const astronautFloating = keyframes`
    0% { transform: translateY(-8px) rotate(35deg) }
    50% { transform: translateY(8px) rotate(35deg) }
    100% { transform: translateY(-8px) rotate(35deg) }
`

const planetFloating = keyframes`
    0% { transform: translateY(-5px) }
    50% { transform: translateY(5px) }
    100% { transform: translateY(-5px) }
`

export const Content = styled.div`
    z-index: 1;
    text-align: center;
    padding-bottom: 50px;

    h1 {
        line-height: 100%;
        @media (max-width: 767px) { font-size: 6rem; }
        @media (min-width: 768px) and (max-width: 1024px) { font-size: 8rem; }
        @media (min-width: 1025px) { font-size: 12rem; }
    }

    p {
        margin: 25px 0 35px 0;
    }

    img {
        position: absolute;
        user-select: none;
    }

    a {
        font-weight: 600;
        background: transparent;
        color: ${props => props.theme.colors.darkYellow};
        border: 1px solid ${props => props.theme.colors.darkYellow};
        padding: 12px 32px;
        cursor: pointer;
        margin: 5px;

        &:hover {
            color: ${props => props.theme.colors.darkBlue};
            background: ${props => props.theme.colors.darkYellow};
            transition: .5s ease;
        }
    }
`

export const Astronaut = styled.img`
    top: 10vh;
    right: 13vw;
    width: 25vw;
    max-width: 200px;
    animation: ${astronautFloating} 8s linear infinite;
`

export const Venus = styled.img`
    bottom: 7vh;
    left: -2vw;
    width: 9vw;
    max-width: 150px;
    animation: ${planetFloating} 5s linear infinite;
`