import styled from 'styled-components'

import { Container } from '../../styles/container'

export const Container2 = styled(Container)`
    padding-top: 0;
`

export const CardCv = styled.div`
    margin-bottom: 25px;
`

export const Title = styled.h4`
    margin-bottom: 8px;
`

export const SubTitle = styled.p`
    font-weight: bold;
`

export const Text = styled.p`
    margin-bottom: 8px;
`

export const Italic = styled.span`
    font-style: italic;
`

export const BaixarCv = styled.div`
    text-align: center;

    p {
        margin-bottom: 25px;
    }

    a {
        font-weight: 700;
        color: ${props => props.theme.colors.bg}!important;
        background: ${props => props.theme.colors.darkYellow};
        padding: 12px 32px;
        cursor: pointer;
        text-align: center;

        :hover {
            filter: brightness(80%);
            transition: .5s ease;
        }
    }
`