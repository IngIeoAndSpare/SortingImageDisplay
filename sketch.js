const FILE_PATH = 'tileData/sulackSan/vworld_d_100/',
      FILE_X_LENGTH = 50,
      FILE_Y_LENGTH = 50,
      TILE_LEVEL = 15,
      TILE_SIZE = 50,
      TILE_NAME = '116074_279368',
      APIKEY = 'YourAPIKEY';


var canvasBuffer = [],
    resultArray = [],
    timeArray = [];

function setup() {

    createCanvas(TILE_SIZE * FILE_Y_LENGTH, TILE_SIZE * FILE_X_LENGTH);
    selectMapFunction()

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

function drawBuffer(drawbuffer, offset) {
    drawbuffer.image(resultArray[offset], 0, 0);
}


function selectMapFunction() {
    let map = FILE_PATH.split('/')[2].replace(/[0-9_]/g, '');
    switch (map) {
        case 'naver':
            getFIleNaver();
            break;
        case 'vworldd':
            getFileVworld3D();
            break;
        case 'vworld':
            getFileVworld();
            break;
        ''
    }
}

function getFIleNaver(){
    let defultFileCoor = getCoorder();
    for (let i = defultFileCoor[0] + FILE_Y_LENGTH - 1; i > defultFileCoor[0] - 1; i--) {
        for (let j = defultFileCoor[1]; j < defultFileCoor[1] + FILE_X_LENGTH; j++) {
            resultArray.push(loadImage(FILE_PATH + i + '_' + j + '.jpg'));
            //resultArray.push(loadImage(url, TILE_SIZE)); // url 을 통한 파일 다운 + 결합
        }
    }
}

function getFileVworld3D() {
    let defultFileCoor = getCoorder();
    for (let i = defultFileCoor[0] + FILE_Y_LENGTH - 1; i > defultFileCoor[0] - 1; i--) {
        for (let j = defultFileCoor[1]; j < defultFileCoor[1] + FILE_X_LENGTH; j++) {
            let server = 'xdworld' + (j % 4 == 0 ? '' : j % 4);
            let url = 'http://' + server + '.vworld.kr:8080/XDServer/3DData?Version=2.0.0.0&Request=GetLayer&Layer=tile_mo_HD&Level=' + TILE_LEVEL + '&IDX=' + j + '&IDY=' + i + APIKEY;
            //resultArray.push(loadImage(FILE_PATH + i + '_' + j + '.jpg')); 로컬 파일 결합
            resultArray.push(loadImage(url, TILE_SIZE)); // url 을 통한 파일 다운 + 결합
        }
    }


}

function getFileVworld() {

    let defultFileCoor = getCoorder();
    for (let i = defultFileCoor[0]; i < defultFileCoor[0] + FILE_Y_LENGTH; i++) {
        let server = 'xdworld'; // + (i % 4 == 0 ? '' : i % 4);
        for (let j = defultFileCoor[1]; j < defultFileCoor[1] + FILE_X_LENGTH; j++) {
            let url = 'http://' + server + '.vworld.kr:8080/XDServer/3DData?Version=2.0.0.0&Request=GetLayer&Layer=tile_mo_HD&Level=' + TILE_LEVEL + '&IDX=' + j + '&IDY=' + i + APIKEY;
            //resultArray.push(loadImage(FILE_PATH + i + '_' + j + '.jpg')); 로컬 파일 결합
            resultArray.push(loadImage(url)); // url 을 통한 파일 다운 + 결합
        }
    }
}

function getCoorder() {
    let newFileName = TILE_NAME.split('_');
    newFileName[0] = Number(newFileName[0]);
    newFileName[1] = Number(newFileName[1]);

    return newFileName;
}
