import styled from 'styled-components'

export const ButtonContent = styled.span`
    font-weight: 600;
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.darkYellow};
    border: 1px solid ${props => props.theme.colors.darkYellow};
    padding: 12px 32px;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.colors.darkYellow};
        background: ${props => props.theme.colors.lightYellow};
        transition: .5s ease;
    }
`