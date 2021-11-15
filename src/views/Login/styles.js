import { ButtonContent } from '../../components/Button/styles.js'

import styled from 'styled-components'

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
`

export const Form = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    border-radius: 15px;
    width: 95vw;
    max-width: 350px;
    padding: 30px;
    z-index: 1;
    box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 10%);

    p {
        color: ${props => props.theme.colors.grey};
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 500;
    }

    input {
        margin-bottom: 15px;
        font-size: 1rem;
        background: none;
        border: none;
        color: ${props => props.theme.colors.white};
        border-bottom: 1px solid ${props => props.theme.colors.darkBlue};
        font-size: 1.1rem;
        padding: 5px 0;
    }
`

export const FormTop = styled.div`
    text-align: center;
    font-size: 6rem;
    color: ${props => props.theme.colors.yellow};
`

export const BtnLogin = styled(ButtonContent)`
    margin-top: 10px;
`

export const BtnBack = styled.div`
    cursor: pointer;
    text-align: center;
    margin-top: 35px;
    font-size: 1rem;

    a { text-decoration: none !important; }
`