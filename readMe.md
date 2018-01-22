## 소팅된 이미지(이름의 의미로)를 하나의 캔버스로 합성하고 보여주는 모듈

 이미지 타일은 다운로드 했는데 막상 이걸 하나로 합치려고 할 때 생각나서 만든 것  
 lib 는 [p5](https://github.com/processing/p5.js)를 사용함. 자세한 것은 링크를 참고하시라  

 원래 파일을 선택하는 input 이 있었으나, setup 과 draw가 무작정 진행되는 것 같기고 하고... 이 망할!  
 코드상에 수정해야 되는 부분도 있어서 이건 나중에 바꾸도록 노오오력 해보도록 합시다.

 정렬된 이미지라 함은 다음을 뜻한다.
 * Y_X.jpg 이름을 가진 이미지 자세한 것은 naver_70 을 참고  
   
 다음은 정렬된 이미지에 맞게 수정해야 될 코드부분이다.
   
```{.no-highlight}
const FILE_X_LENGTH = 6;
const FILE_Y_LENGTH = 5;
const TILE_SIZE = 256;
const TILE_NAME = '5892_6709';
```
* FILE_X_LENGTH 는 정렬된 이미지중 x축의 길이를 뜻한다.
* FILE_Y_LENGTH 는 정렬된 이미지중 y축의 길이를 뜻한다.
* TILE_SIZE 는 하나의 이미지의 픽셀 개수를 뜻한다. 
* TILE_NAME 은 정렬된 이미지의 첫 이미지 name 을 뜻한다.

지금 올린 모듈은 naver map 을 기준으로 만들었기에 kakao 혹은 google map 을 비교한다면 각 타일 좌표계를 참고해야 한다.