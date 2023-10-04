import { Constants } from './utils/constants.js';
import { Player } from './entities/player.js';
import eventHandler from './utils/event-handler.js';
import createDungeon from './utils/create-dungeon.js';
import { drawScreen } from './utils/draw.js';

const canvas = createAndConfigureCanvas();
const ctx = canvas.getContext("2d");
ctx.font = "24px monospace";
ctx.fillStyle = 'white';

const player = new Player(Constants.INITIAL_PLAYER_X, Constants.INITIAL_PLAYER_Y);
const map = createDungeon();
drawScreen(ctx, map, player);

const bufferKeys = new Map();
document.addEventListener("keyup", event => bufferKeys.delete(event.key));
document.addEventListener('keydown', event => {
    //event.preventDefault();
    bufferKeys.set(event.key);
    eventHandler(bufferKeys, player);
    drawScreen(ctx, map, player);
});

function createAndConfigureCanvas() {
    const mycanvas = document.getElementById('my-canvas');
    mycanvas.width = Constants.GAME_WIDTH;
    mycanvas.height = Constants.GAME_HEIGHT;
    return mycanvas;
}


