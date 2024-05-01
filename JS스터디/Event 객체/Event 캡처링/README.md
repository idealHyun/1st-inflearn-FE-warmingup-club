### 이벤트의 흐름

![Untitled](https://blog.kakaocdn.net/dn/bQh5W7/btqHJp4GZkp/tdFTGdXMipM0L6Kbi0fHYK/img.png)

1. 캡처링 단계 : 이벤트가 하위 요소로 전파되는 단계
2. 타킷 단계 : 이벤트가 실제 타깃 요소에 전달되는 단계
3. 버블링 단계 : 이벤트가 상위 요소로 전파되는 단계


이벤트 캡쳐링을 확인하기 위해서는 이벤트를 추가할 때 옵션을 설정해야한다.

`element.addEventListener(…, {capture : true});`

`element.addEventListener(…, true);`