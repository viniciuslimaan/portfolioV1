import { useState, useEffect } from 'react'
import { Star } from './styles'

export function CreateStars(number = 50) {
    const stars = []
    let time = 3

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    
    useEffect(() => {
        function resizeStars() {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener('resize', resizeStars)
        return () => window.removeEventListener('resize', resizeStars);
    })

    for (let i = 1; i <= number; i++) {
        const posX = Math.floor(Math.random() * width)
        const posY = Math.floor(Math.random() * height)
        const sizeStar = Math.floor(Math.random() * 2) + 1
        const randomTime = Math.floor(Math.random() * 3) + 1
        
        if (randomTime === 1)
            time = 3
        else if (randomTime === 2)
            time = 5.3
        else
            time = 7

        stars.push(
            <Star
                key={i}
                posX={posX.toString()}
                posY={posY.toString()}
                sizeStar={sizeStar.toString()}
                time={time.toString()}
            />
        )
    }
    return stars
}