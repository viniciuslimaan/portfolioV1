import styled from 'styled-components'

export const CardContent = styled.div`
    max-width: 320px;
`

export const CardImg = styled.div`
    max-width: 320px;
    max-height: 320px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        cursor: pointer;

        :hover {
            opacity: 75%;
            transform: scale(1.1);
            transition: .5s ease;
        }
    }
`

export const Type = styled.div`
    font-weight: 700;
    font-size: .8rem;
    text-transform: uppercase;
    margin-top: 10px;
    color: ${props => props.theme.colors.yellow};
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 6px;
    color: ${props => props.theme.colors.white};
    ${props => props.disable && `opacity: .7;`};
`

export const Link = styled.a`
    margin-right: 25px;
    font-size: 1.2rem;
    color: ${props => props.disable && props.theme.colors.grey}!important;
    ${props => props.disable && `pointer-events: none;`};
    ${props => props.disable && `opacity: .7;`};
`