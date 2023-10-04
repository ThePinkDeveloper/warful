export default function (bufferKeys, player) {

    if (bufferKeys.has('Control')) {
        if (bufferKeys.has('p')) {

        }
    }

    if (!bufferKeys.has('Control')) {
        if (bufferKeys.has('7')) {
            player.move7();
        } else if (bufferKeys.has('8')) {
            player.move8();
        } else if (bufferKeys.has('9')) {
            player.move9();
        } else if (bufferKeys.has('4')) {
            player.move4();
        } else if (bufferKeys.has('5')) {
            player.move5();
        } else if (bufferKeys.has('6')) {
            player.move6();
        } else if (bufferKeys.has('1')) {
            player.move1();
        } else if (bufferKeys.has('2')) {
            player.move2();
        } else if (bufferKeys.has('3')) {
            player.move3();
        } else if (bufferKeys.has('P')) {
            console.log('patata');
        }
    }
}
