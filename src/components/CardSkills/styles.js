import styled from 'styled-components'

export const CardContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    color: ${props => props.theme.colors.grey};
    font-size: 3rem;
    cursor: default;
    width: 6rem;
    margin: 10px;

    :hover {
        color: ${props => props.theme.colors.yellow}!important;
        transition: .5s ease;
    }
`

export const NameSkill = styled.div`
    font-weight: 500;
    font-size: 1rem;
    margin-top: 10px;
`