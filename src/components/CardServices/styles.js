import styled from 'styled-components'

export const ServicesContent = styled.div`
    @media (max-width: 767px) { width: 100%; }
    width: 30%;
    margin-top: 25px;

    span {
        font-size: 4rem;
        color: ${props => props.theme.colors.yellow};
        margin-left: -5px;
    }

    h4 {
        font-weight: 600;
        margin-bottom: 8px;
        color: ${props => props.theme.colors.white};
    }
`