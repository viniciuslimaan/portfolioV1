import GlobalStyles from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/themes/theme'
import 'animate.css/animate.min.css'

export default function Imports({ children }) {
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            { children }
        </ThemeProvider>
    )
}