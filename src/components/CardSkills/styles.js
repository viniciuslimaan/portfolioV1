import styled from 'styled-components'

export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: ${props => props.theme.colors.lightGrey};
    color: ${props => props.theme.colors.darkGrey};
    font-size: 3rem;
    cursor: default;
    width: 8rem;
    height: 8rem;
    border-radius: 3px;

    :hover {
        background: ${props => props.theme.colors.lightYellow}!important;
        color: ${props => props.theme.colors.darkYellow}!important;
        transition: .3s ease;
    }
`

export const NameSkill = styled.div`
    font-weight: 500;
    font-size: 1rem;
    margin-top: 10px;
`