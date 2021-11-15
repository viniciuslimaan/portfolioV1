import styled from 'styled-components'

export const Photo = styled.div`
    @media (min-width: 1024px) {
        margin-right: 50px;
    }
`

export const TitleAbout = styled.h3`
    span {
        color: ${props => props.theme.colors.yellow};
    }
`

export const ContentAbout = styled.div`
    p {
        text-align: justify;

        span {
            font-weight: bold;
        }
    }
`

export const Icons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 15px;
    font-size: 1.3rem;
`