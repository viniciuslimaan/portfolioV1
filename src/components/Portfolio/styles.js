import styled from 'styled-components'

export const Cards = styled.div`
    display: grid;
    gap: 25px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1025px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const LinkGit = styled.div`
    color: ${props => props.theme.colors.grey};
    text-align: center;
    margin-top: 25px;

    a {
        color: ${props => props.theme.colors.yellow};
        font-weight: 600;
        cursor: pointer;
    }
`