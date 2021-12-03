input.onButtonPressed(Button.A, function () {
    if (true) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == ".") {
        images.createImage(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `).showImage(0)
        music.playTone(698, music.beat(BeatFraction.Half))
    } else if (receivedString == "-") {
        images.createImage(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `).showImage(0)
        music.playTone(698, music.beat(BeatFraction.Double))
    }
})
radio.setGroup(1)
