import styled, { keyframes } from 'styled-components'

const pulseStar = keyframes`
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }

    100% {
        opacity: 1;
    }
`

export const Star = styled.div`
    position: absolute;
    background-color: #fff;
    top: ${props => props.posY}px;
    left: ${props => props.posX}px;
    width: ${props => props.sizeStar}px;
    height: ${props => props.sizeStar}px;
    border-radius: 50%;
    animation: ${pulseStar} ${props => props.time}s ease infinite;
`