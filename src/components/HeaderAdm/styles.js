import styled from 'styled-components'

export const Acconunt = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 767px) { justify-content: center; }
`

export const NameAccount = styled.h1`
    font-size: 1.8rem;
    word-break: break-all;
    
    span {
        color: ${props => props.theme.colors.darkYellow}
    }
`

export const ButtonsAccount = styled.div`
    display: flex;
`

export const BtnGreen = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 32px;
    font-weight: 700;
    margin-right: 10px!important;
    color: ${props => props.theme.colors.bg}!important;
    background: ${props => props.theme.colors.darkYellow};
    @media (max-width: 1024px) { margin: 10px 0; }

    span {
        font-size: 1.8rem;
        margin-right: 10px;
    }

    :hover {
        filter: brightness(80%);
        transition: .5s ease;
    }
`

export const BtnRed = styled.div`
    padding: 12px 32px;
    background: #c0392b;
    cursor: pointer;
    font-size: 1.8rem;
    color: ${props => props.theme.colors.bg}!important;
    @media (max-width: 1024px) { margin: 10px 0; }

    :hover {
        filter: brightness(80%);
        transition: .5s ease;
    }
`

export const Line = styled.hr`
    height: 1px;
    border-color: ${props => props.theme.colors.darkBlue};
    width: 75%;
    margin: 25px auto;
    opacity: .3;
`