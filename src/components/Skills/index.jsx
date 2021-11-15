import Skill from '../CardSkills'
import { MySkills } from './styles'
import { Container } from '../../styles/container'

import ScrollAnimation from 'react-animate-on-scroll'

export default function Skills() {
    return(
        <Container id="skills">
            <ScrollAnimation animateIn='animate__animated animate__fadeIn' animateOut='animate__animated animate__fadeOut'>
                <h4>Habilidades</h4>
                <h3>Algumas tecnologias que utilizo.</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__animated animate__zoomIn' animateOut='animate__animated animate__zoomOut'>
                <MySkills>
                    <Skill icon='simple-icons:html5' title='HTML5' />
                    <Skill icon='simple-icons:css3' title='CSS3' />
                    <Skill icon='simple-icons:sass' title='Sass' />
                    <Skill icon='cib:bootstrap' title='Bootstrap' />
                    <Skill icon='simple-icons:javascript' title='Javascript' />
                    <Skill icon='simple-icons:react' title='ReactJs' />
                    <Skill icon='akar-icons:node-fill' title='NodeJs' />
                    <Skill icon='simple-icons:nextdotjs' title='NextJs' />
                    <Skill icon='simple-icons:php' title='php' />
                    <Skill icon='fontisto:mysql' title='MySql' />
                    <Skill icon='simple-icons:mongodb' title='MongoDB' />
                    <Skill icon='simple-icons:git' title='Git' />
                    <Skill icon='simple-icons:github' title='Github' />
                    <Skill icon='cib:adobe-photoshop' title='Photoshop' />
                </MySkills>
            </ScrollAnimation>
        </Container>
    )
}