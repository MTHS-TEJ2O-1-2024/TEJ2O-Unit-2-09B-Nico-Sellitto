/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Oct 2024
 * This program is rock paper scissors
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let score = 0
let randomNumber: number = 0

// on shake
input.onGesture(Gesture.Shake, function() {
    
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // rock
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
    }

    // paper
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
    }

    // scissors
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }

    // reset
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)

})

// score increase
input.onButtonPressed(Button.A, function() {
    
    score += 1
    basic.showIcon(IconNames.Yes)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)

})

// shows score
input.onButtonPressed(Button.B, function()  {

    basic.clearScreen()
    basic.showString("Score:" + score)

})