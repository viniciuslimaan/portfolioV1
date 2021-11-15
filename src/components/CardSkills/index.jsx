import { CardContent, NameSkill } from './styles'

import { Icon } from '@iconify/react'

export default function Skill(props) {
    return(
        <CardContent>
            <Icon icon={props.icon} />
            <NameSkill>{props.title}</NameSkill>
        </CardContent>
    )
}