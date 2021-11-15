import styled, { keyframes } from 'styled-components'

const meteorFall1 = keyframes`
    0% { transform: rotate(-30deg) translateX(55px) }
    100% { transform: rotate(-30deg) translateX(-2000px) }
`

const meteorFall2 = keyframes`
    0% { transform: rotate(-30deg) translateX(55px) }
    100% { transform: rotate(-30deg) translateX(-2000px) }
`

const satRotate = keyframes`
    0% { transform: rotate(-20deg) }
    50% { transform: rotate(20deg) }
    100% { transform: rotate(-20deg) }
`

const earthRotate = keyframes`
    0% { transform: translateY(-6px) }
    50% { transform: translateY(6px) }
    100% { transform: translateY(-6px) }
`

const down = keyframes`
    0% { transform: translateY(0) }
    5% { transform: translateY(-5px) }
    10% { transform: translateY(0) }
    15% { transform: translateY(-5px) }
    20% { transform: translateY(0) }
`

export const Banner = styled.div`
    background-image: radial-gradient(ellipse at bottom, #003566, #002f5b, #002951, #002347, #001d3d 80%);
    width: 100vw;
    height: 100vh;

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
`

export const Title = styled.h1`

    span {
        color: ${props => props.theme.colors.yellow}
    }
`

export const SubTitle = styled.p`
    font-weight: 500;
    margin-top: -7px;
    text-align: center;
    color: ${props => props.theme.colors.grey};
`

export const AfterBanner = styled.div`
    background-image: radial-gradient(ellipse at top, #003566, #002f5b, #002951, #002347, #001d3d 80%);
    position: relative;
    margin: 0;
    width: 100%;
    @media (max-width: 767px) { height: 100px; }
    @media (min-width: 768px) and (max-width: 1024px) { height: 200px; }
    @media (min-width: 1025px) { height: 300px; }
`

export const Waves = styled.div`
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
`

export const Meteor = styled.div`
    background-image: linear-gradient(to right, #f2f2f2, #fff0);
    top: -5px;
    left: ${props => props.name === 'meteorFall1' ? '50%' : '47%'};
    width: 55px;
    height: 3px;
    border-radius: 2px 0 0 2px;
    position: absolute;
    filter: drop-shadow(0 0 6px #f2f2f2);
    animation: 
        ${props => props.name === 'meteorFall1' ? meteorFall1 : meteorFall2} 4s linear 5s infinite;

    :after {
        content: '';
        background-color: #fff8;
        position: absolute;
        top: -1px;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
    }
`

export const Satellite = styled.div`
    position: absolute;
    left: 20%;
    bottom: 15%;
    user-select: none;
    animation: ${satRotate} 5s linear infinite;
`

export const Earth = styled.div`
    position: absolute;
    right: 12%;
    top: 12%;
    user-select: none;
    animation: ${earthRotate} 5s ease-in-out infinite;
`

export const Down = styled.p`
    position: absolute;
    bottom: 25px;
    left: 49.5%;
    font-size: 2rem;
    animation: ${down} 3s ease infinite;
`