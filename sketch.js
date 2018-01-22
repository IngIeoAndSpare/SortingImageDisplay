
const FILE_X_LENGTH = 6;
const FILE_Y_LENGTH = 5;
const TILE_SIZE = 256;
const TILE_NAME = '5892_6709';

var canvasBuffer = [];
var resultArray = [];
var testArray = [];
function setup() {

    createCanvas(TILE_SIZE * FILE_Y_LENGTH, TILE_SIZE * FILE_X_LENGTH);
    getFile(TILE_NAME);

    for (let i = 0; i < FILE_Y_LENGTH; i++) {
        //버퍼, 시작x, 시작 y
        for (let j = 0; j < FILE_X_LENGTH; j++) {
            canvasBuffer.push([createGraphics(TILE_SIZE, TILE_SIZE), j * TILE_SIZE, i * TILE_SIZE]);
        }
    }
}

function draw() {
    let offset = 0;
    for (let item of canvasBuffer) {
        drawBuffer(item[0], offset);
        image(item[0], item[1], item[2]);
        offset++;
    }
}

function drawBuffer(drawbuffer, offset){
    drawbuffer.image(resultArray[offset],0,0);
}


function getFile(defultFile) {
    let newFileName = defultFile.split('_');
    newFileName[0] = Number(newFileName[0]);
    newFileName[1] = Number(newFileName[1]);

    for (let i = newFileName[0] + FILE_Y_LENGTH - 1; i > newFileName[0] - 1; i--) {
        for (let j = newFileName[1]; j < newFileName[1] + FILE_X_LENGTH; j++) {
            testArray.push(i + '_' + j + '.jpg');
            resultArray.push(loadImage('naver_70/'+i + '_' + j + '.jpg'));
        }
    }

}
