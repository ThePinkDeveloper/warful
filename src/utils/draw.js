import { Constants } from "./constants.js";

export function drawScreen(canvasContext, map, player) {
    canvasContext.clearRect(0, 0, Constants.GAME_WIDTH, Constants.GAME_HEIGHT);

    for (let column = 0; column < Constants.SCREEN_COLUMNS; column++) {
        for (let row = 0; row < Constants.SCREEN_ROWS; row++) {
            canvasContext.fillText(map[column][row], Constants.FIRST_CELL_X + column * Constants.CELL_WIDTH, Constants.FIRST_CELL_Y + row * Constants.CELL_HEIGHT);
        }
    }
    
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(Constants.FIRST_CELL_X + player.x * Constants.CELL_WIDTH, player.y * Constants.CELL_HEIGHT, Constants.CELL_WIDTH, Constants.CELL_HEIGHT);
    canvasContext.fillStyle = 'white';
    canvasContext.fillText("@", Constants.FIRST_CELL_X + player.x * Constants.CELL_WIDTH, Constants.FIRST_CELL_Y + player.y * Constants.CELL_HEIGHT);
}