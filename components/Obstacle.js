import React, { useState } from 'react'
import {
    Animated,
    View,
    Image,

} from 'react-native'






const Obstacle = ({
    OBSTACLE_LEFT,
    OBSTACLE_BOTTOM,
    OBSTACLE_WIDTH,
    OBSTACLE_HEIGHT,
    GAP,
    color,
    translate_Y,
    translate_X,

}) => {

    return (
        <Animated.View style={{
            position: 'absolute',
            left: OBSTACLE_LEFT,
            bottom: OBSTACLE_BOTTOM,
            transform: [
                {
                    translateY: translate_Y
                },
                {
                    translateX: translate_X
                }
            ]
        }}>



            <View style={{
                // backgroundColor: color,
                width: OBSTACLE_WIDTH,
                height: OBSTACLE_HEIGHT,
                position: 'absolute',
                bottom: 0,
            }} >
                <View style={{
                    width: '100%',
                    height: 36,
                }}>
                    <Image
                        source={require(`../assets/img/tube_top.png`)}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
                <View style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require(`../assets/img/tube.png`)}
                        style={{
                            width: 75,
                            height: '100%',
                        }}
                        resizeMode='stretch'
                    />
                </View>
            </View>

            <View style={{
                // backgroundColor: color,
                width: OBSTACLE_WIDTH,
                height: OBSTACLE_HEIGHT,
                position: 'absolute',
                bottom: OBSTACLE_HEIGHT + GAP,
                justifyContent: 'flex-end'
            }} >

                <View style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                }}>
                    <Image
                        source={require(`../assets/img/tube.png`)}
                        style={{
                            width: 75,
                            height: '100%',
                        }}
                        resizeMode='stretch'
                    />
                </View>
                <View style={{
                    width: '100%',
                    height: 36,
                }}>
                    <Image
                        source={require(`../assets/img/tube_top.png`)}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </View>
            </View>


        </Animated.View>

    )
}
export default Obstacle
