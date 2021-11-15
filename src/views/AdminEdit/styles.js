import { ButtonContent } from '../../components/Button/styles'
import styled from 'styled-components'

export const Form = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 15px;

    background: ${props => props.theme.colors.bg};
    border-radius: 15px;
    z-index: 1;
    box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 10%);

    p {
        color: ${props => props.theme.colors.grey};
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 500;
    }

    input, select {
        margin-bottom: 15px;
        font-size: 1rem;
        background: none;
        border: none;
        color: ${props => props.theme.colors.white};
        border-bottom: 1px solid ${props => props.theme.colors.darkBlue};
        font-size: 1.1rem;
        padding: 5px 0;
    }

    option {
        color: ${props => props.theme.colors.bg};
    }
`

export const Button = styled(ButtonContent)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;

    @media (max-width: 1024px) { 
        margin: 10px 0; 
        width: 100%;
    }

    span {
        font-size: 1.5rem;
        margin-right: 10px;
    }
`