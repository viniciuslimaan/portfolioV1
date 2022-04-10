import styled from 'styled-components'

export const CardContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-image: linear-gradient(to bottom right, ${props => props.theme.colors.darkBlue}, ${props => props.theme.colors.bg});
    color: ${props => props.theme.colors.lightGrey};
    font-size: 3rem;
    cursor: default;
    width: 8rem;
    height: 8rem;
    border-radius: 3px;

    :hover {
        background: ${props => props.theme.colors.yellow};
        color: ${props => props.theme.colors.lightYellow};
        transition: .5s ease;
    }
`

export const NameSkill = styled.div`
    font-weight: 500;
    font-size: 1rem;
    margin-top: 12px;
`