import React from 'react'
import {
    Animated,
    View,
    Image,
} from 'react-native'

const Bird = ({
    BIRD_BOTTOM,
    BIRD_WIDTH,
    BIRD_HEIGHT,
    translate_Y,

}) => {

    return (
        <Animated.View style={{
            position: 'absolute',
            bottom: BIRD_BOTTOM,
            width: BIRD_WIDTH,
            height: BIRD_HEIGHT,
            transform: [
                {
                    translateY: translate_Y
                }
            ]
        }}>
            <Image
                source={require(`../assets/img/BIRD.gif`)}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </Animated.View>
    )
}
export default Bird
