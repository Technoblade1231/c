input.onButtonPressed(Button.A, function () {
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(277, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Whole))
    music.playTone(831, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("- - D - - - - - ", 120)
})
basic.forever(function () {
	
})
