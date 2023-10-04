import * as _ from './_.js';
import { Constants } from './constants.js';

function createDungeon() {

    const map = createMap(Constants.MAP_WIDTH, Constants.MAP_HEIGHT);
    map[40][15] = '.';
    //map[41][15] = '.';
    return map;
}

function createRoom() {

}

function createCorridor() {
    
}

function createMap(mapWidth, mapHeight) {

    const map = Array(mapWidth);
    for (let column = 0; column < map.length; column++) {
        map[column] = Array(mapHeight).fill(0);
    }

    for (let column = 0; column < mapWidth; column++) {
        for (let row = 0; row < mapHeight; row++) {
            map[column][row] = '#';
        }
    }

    return map;
}

export default createDungeon;