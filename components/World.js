import React from 'react'
import {
    Animated,
    View,
    Pressable,
    Image,
    StyleSheet,
} from 'react-native'

const World = ({
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    GROUND_HEIGHT,
    GROUND_LINE_WIDTH,
    GROUND_LINE_HEIGHT,
    translate_X,

    children
}) => {
    return (
        <View style={{
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,
            backgroundColor: '#4ec0ca',
            alignItems: 'center',
            justifyContent: 'center',
        }} >
            <View style={{
                width: 210, // 70*3
                height: 450, // 150*3
                position: 'absolute',
                left: 0,
                bottom: GROUND_HEIGHT,
                flexDirection: 'row'
            }} >

                <Image
                    source={require('../assets/img/bg.png')}
                    style={styles.img} />
                <Image
                    source={require('../assets/img/bg.png')}
                    style={styles.img} />
                <Image
                    source={require('../assets/img/bg.png')}
                    style={styles.img} />
            </View>

            {children}

            <View style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#ded895',
                width: SCREEN_WIDTH,
                height: GROUND_HEIGHT,
                alignItems: 'center'
            }} >
                <Animated.View
                    style={{
                        width: GROUND_LINE_WIDTH,
                        height: GROUND_LINE_HEIGHT,
                        position: 'absolute',
                        left: -(SCREEN_WIDTH / 2),
                        top: 0,
                        flexDirection: 'row',
                        transform: [{
                            translateX: translate_X
                        }]
                    }}>
                    <Image
                        source={require('../assets/img/ground_line.png')}
                        style={styles.img} />
                </Animated.View>

            </View>
        </View>
    )
}

export default World

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '100%',
    }
});