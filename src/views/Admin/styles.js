import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 1024px) { justify-content: space-evenly; }

    margin-top: 15px;
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: ${props => props.theme.colors.darkBlue};
    color: ${props => props.theme.colors.grey};
    width: 300px;
    font-weight: 600;
    font-size: 1.5rem;
    padding: 35px 15px;
    margin: 5px 0;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 5px 15px 0px rgb(0 0 0 / 10%);

    @media (min-width: 1025px) { margin-right: 15px; }

    &:hover {
        background: ${props => props.theme.colors.blue};
        color: ${props => props.theme.colors.white};
        transition: .5s ease;
    }

    span {
        font-size: 2.5rem;
    }
`

export const Table = styled.table`
    /* border-collapse: collapse; */
    width: 100%;
    margin-top: 15px;
    overflow-x: auto;
    border-radius: 15px;
    color: ${props => props.theme.colors.bg};

    tr:nth-child(even) { background-color: ${props => props.theme.colors.grey} }
    thead > tr { background-color: ${props => props.theme.colors.darkYellow}; font-weight: bold; }
    tr { background: ${props => props.theme.colors.white}; }
    td { padding: 10px; }
`

export const BtnFuction = styled.a`
    background: ${props => props.del ? '#c0392b' : props.theme.colors.darkYellow};
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;

    :hover {
        filter: brightness(.8);
        color: ${props => props.theme.colors.white}
    }
`

export const BtnCreate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 15px 20px;
    margin: 15px 2px;
    cursor: pointer;
    background: #27ae60;
    color: ${props => props.theme.colors.white}!important;
    @media (min-width: 1025px) { width: 300px }

    &:hover{
        filter: brightness(.8);
    }

    span {
        font-size: 1.8rem;
        margin-right: 10px;
    }
`