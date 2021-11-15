import { Icon } from '@iconify/react'

import {
    CardContent,
    CardImg,
    Type,
    Title,
    Link,
} from './styles'

export default function Card(props) {
    return(
        <CardContent>
            <CardImg>
                <img src={props.linkImg} alt={props.title} />
            </CardImg>
            <Type>{props.type}</Type>
            <Title>{props.title}</Title>
            <Link 
                href={props.github} 
                target='_blank' 
                disable={props.github === '' ? true : false} 
            >
                <Icon icon='akar-icons:github-fill' />
            </Link>
            <Link 
                href={props.view} 
                target='_blank'
                disable={props.view === '' ? true : false}
            >
                <Icon icon="carbon:view-filled" />
            </Link>
        </CardContent>
    ) 
}