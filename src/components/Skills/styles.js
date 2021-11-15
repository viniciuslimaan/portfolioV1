import styled from 'styled-components'

import { Row } from '../../styles/container'

export const MySkills = styled(Row)`
    display: grid;
    gap: 10px;
    
    @media (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1025px) and (max-width: 1300px) {
        grid-template-columns: repeat(6, 1fr);
    }
    @media (min-width: 1301px) {
        grid-template-columns: repeat(7, 1fr);
    }
`