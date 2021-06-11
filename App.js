/*
this animation comes from a shattered dream.
during my studies on react native I wanted 
to try to recreate the Flappy Bird game...
unfortunately I discovered the hard way 
that this technology is perhaps the most 
wrong for developing games with physics and collisions

however, it lends itself very well to the creation of animations 
and in order not to throw away all the work done I have developed 
this animation where the bird of the game Flappy Bird flies to 
infinity avoiding obstacles that change height randomly 
at each passage dynamically.

I redesigned the graphics, the assets and the gif of the flappy bird in the 
./assets/img folder because on the internet I found only low-resolution images.

Enjoy :)

P.S: libraries such as react-native-game-engine and Matter.js could be the solution, 
but personally I believe that if the aim is to create a performing game 
the best solution is to immediately use a game engine like Unity.


________________________________________________________________________________
TODO:

#_add a second obstacle
#_add more random up/down movement to the bird
#_add parallax effect to backgrond
#_add day night cycle
#_add cycle of seasons XD

optional:
#_add animated title fadeIN and fadeOUT at the beginning of the animation
#_add start button
#_add credits modal
#_navigation...?

and at the end:
#make the code neat and beautiful!!
________________________________________________________________________________

*/



import React, { useRef, useEffect } from 'react';
import {
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

import World from './components/World'
import Bird from './components/Bird'
import Obstacle from './components/Obstacle'

//screen dimensions
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
//bird dimensions
const BIRD_WIDTH = 51     // 17 * 3
const BIRD_HEIGHT = 36    // 12 * 3
//obstacle dimensions
const OBSTACLE_WIDTH = 81
const OBSTACLE_HEIGHT = SCREEN_HEIGHT * .5
const GAP = 150
//ground dimensions
const GROUND_HEIGHT = 130
const GROUND_LINE_WIDTH = (SCREEN_WIDTH * 2) + (OBSTACLE_WIDTH * 2)
const GROUND_LINE_HEIGHT = 21   // 7 * 3

//initialization variables
const BIRD_BOTTOM = (SCREEN_HEIGHT / 2) + (GROUND_HEIGHT / 2) - (BIRD_HEIGHT / 2)
const OBSTACLE_BOTTOM = (-GAP / 2) + (GROUND_HEIGHT / 2)
const OBSTACLE_LEFT = SCREEN_WIDTH + OBSTACLE_WIDTH

//global speed
const SPEED = 2000




export default function App() {

  const bird_translate_Y = useRef(new Animated.Value(0)).current

  const translate_Y = useRef(new Animated.Value(0)).current
  const translate_X = useRef(new Animated.Value(SCREEN_WIDTH / 2)).current

  const translateAnimationY = () => {

    Animated.timing(bird_translate_Y, {
      toValue: translate_Y,
      duration: SPEED / 2,
      useNativeDriver: true
    }).start()

  }

  const translateAnimationX = () => {
    requestAnimationFrame(() => {
      const interval = setInterval(() => {
        translate_Y.setValue(Math.random() * 150)

      }, SPEED)
      return () => clearInterval(interval)
    })
    Animated.loop(

      Animated.timing(translate_X, {
        toValue: -(SCREEN_WIDTH / 2 + (OBSTACLE_WIDTH * 2)),
        delay: 100,
        duration: SPEED,
        easing: Easing.linear,
        useNativeDriver: true
      })
      , -1).start()


  }
  useEffect(() => {

    translateAnimationX()
    translateAnimationY()

  }, [])
  return (
    <World
      SCREEN_WIDTH={SCREEN_WIDTH}
      SCREEN_HEIGHT={SCREEN_HEIGHT}
      GROUND_HEIGHT={GROUND_HEIGHT}
      GROUND_LINE_WIDTH={GROUND_LINE_WIDTH}
      GROUND_LINE_HEIGHT={GROUND_LINE_HEIGHT}
      translate_X={translate_X}

    >

      <Bird
        OBSTACLE_LEFT={OBSTACLE_LEFT}
        BIRD_BOTTOM={BIRD_BOTTOM}
        BIRD_WIDTH={BIRD_WIDTH}
        BIRD_HEIGHT={BIRD_HEIGHT}
        translate_Y={bird_translate_Y}
      />

      <Obstacle
        OBSTACLE_BOTTOM={OBSTACLE_BOTTOM}
        OBSTACLE_WIDTH={OBSTACLE_WIDTH}
        OBSTACLE_HEIGHT={OBSTACLE_HEIGHT}
        GAP={GAP}

        color='green'
        translate_Y={translate_Y}
        translate_X={translate_X}
      />

      {/* <Obstacle
        transitionX={obstacle_TWO_move_to_left}
        transitionY={obstacle_TWO_random_bottom}

        OBSTACLE_WIDTH={OBSTACLE_WIDTH}
        OBSTACLE_HEIGHT={OBSTACLE_HEIGHT}
        GAP={GAP}

        color='yellow'
      /> */}

    </World>
  );
}
