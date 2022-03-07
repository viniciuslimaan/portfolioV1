import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
        background: ${props => props.theme.colors.bg};
        -webkit-font-smoothing: antialiased !important;
    }

    html {
        scroll-behavior: smooth; //Scroll suave
    }

    ::selection {
        color: ${props => props.theme.colors.lightGrey};
        background: ${props => props.theme.colors.darkYellow};
    }

    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3rem;
        color: ${props => props.theme.colors.grey};
    }

    h1 {
        font-weight: 800;
        color: ${props => props.theme.colors.white};
        @media (max-width: 767px) { font-size: 3rem; }
        @media (min-width: 768px) and (max-width: 1024px) { font-size: 4.5rem; }
        @media (min-width: 1025px) { font-size: 4vw; }
    }

    h3 {
        font-weight: 800;
        font-size: 3rem;
        color: ${props => props.theme.colors.white};
        text-align: center;
    }

    p.subtitle {
        text-align: center;
        margin-bottom: 25px;
    }

    h4 {
        font-weight: 700;
        font-size: 1.2rem;
        text-transform: uppercase;
        margin: 15px 0 7px 0;
        color: ${props => props.theme.colors.yellow};
    }

    a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;

        :hover {
            transition: .5s ease;
            color: ${props => props.theme.colors.yellow}
        }
    }
`

export default GlobalStyles