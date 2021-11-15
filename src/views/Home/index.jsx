import Imports from '../../utils/Imports'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import About from '../../components/About'
import Cv from '../../components/Cv'
import Skills from '../../components/Skills'
import Portfolio from '../../components/Portfolio'
import Footer from '../../components/Footer'

export default function Home() {
    return (
        <Imports>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Cv></Cv>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Footer></Footer>
        </Imports>
    )
}