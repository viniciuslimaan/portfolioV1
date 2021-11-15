import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;

    @media (max-width: 767px) {
        padding: 5rem 5%;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 5rem 10%;
    }
    @media (min-width: 1025px) {
        padding: 5rem 20%;
    }
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 1024px) {
        align-items: center;
        flex-wrap: nowrap;
    }
`