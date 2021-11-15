import styled, { keyframes } from 'styled-components'

import { Row } from '../../styles/container'

const rocketFly = keyframes`
    0% { transform: translateY(5px) rotate(-45deg) }
    50% { transform: translateY(-5px) rotate(-45deg) }
    100% { transform: translateY(5px) rotate(-45deg) }
`

export const FooterContent = styled(Row)`
    position: relative;
    font-size: 1.5rem;
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