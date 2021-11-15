import { CreateStars } from '../../functions/stars'

import { Banner } from './styles'

export default function BgStars({ children }) {
    return (
        <Banner>
            { CreateStars() }
            { children }
        </Banner>
    )
}