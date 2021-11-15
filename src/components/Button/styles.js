import styled from 'styled-components'

export const ButtonContent = styled.span`
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
`