radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    move_bit_bot(receivedNumber)
})
function move_bit_bot (code: number) {
    if (code == 0) {
        bitbot.stop(BBStopMode.Brake)
    } else if (code == 1) {
        bitbot.go(BBDirection.Forward, Speed)
    } else if (code == 4) {
        bitbot.go(BBDirection.Reverse, Speed)
    } else if (code == 2) {
        bitbot.rotate(BBRobotDirection.Left, TurnSpeed)
    } else if (code == 3) {
        bitbot.rotate(BBRobotDirection.Right, TurnSpeed)
    } else if (code == 5) {
        bitbot.rotate(BBRobotDirection.Right, TurnSpeed)
    } else if (code == 6) {
        bitbot.rotate(BBRobotDirection.Left, TurnSpeed)
    } else {
    	
    }
}
function send_number (num: number) {
    if (LastSentNumber != num) {
        radio.sendNumber(num)
        LastSentNumber = num
        basic.pause(300)
    }
}
let LastSentNumber = 0
let TurnSpeed = 0
let Speed = 0
Speed = 50
TurnSpeed = Speed / 2
LastSentNumber = 0
radio.setGroup(3)
bitbot.ledRainbow()
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) < 0) {
        if (input.buttonIsPressed(Button.AB)) {
            send_number(1)
        } else if (input.buttonIsPressed(Button.A)) {
            send_number(2)
        } else if (input.buttonIsPressed(Button.B)) {
            send_number(3)
        } else {
            send_number(0)
        }
    } else {
        if (input.buttonIsPressed(Button.AB)) {
            send_number(4)
        } else if (input.buttonIsPressed(Button.A)) {
            send_number(5)
        } else if (input.buttonIsPressed(Button.B)) {
            send_number(6)
        } else {
            send_number(0)
        }
    }
    basic.pause(60)
})
