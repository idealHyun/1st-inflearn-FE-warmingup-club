# 자바스크립트 타입

## 원시 타입

- Boolean, String, Number, null, undefined, Symbol
- 고정된 크기로 Call Stack 이라는 메모리 공간에 저장
- 실제 데이터가 변수에 할당

## 참조 타입

- Object, Array, function, classes
- 데이터의 크기가 정해지지 않고 Call Stack 메모리에 저장
- 데이터의 값이 Heap 메모리에 저장되며, 변수에 Heap 메모리 주소값이 할당된다
- Array는 Object의 하나의 타입
- Array인지 확인하는 방법은 `Array.isArray(Array변수);` 나오는 값은 `boolean`

## 타입 변환

### 문자열 타입으로 변환

- `String(변수);`
- `(변수).toString();`

### 숫자 타입으로 변환

- `Number(변수);`
- `boolean` → 숫자 타입의 경우 `true` 면 `1`, `false` 면 `0` 으로 변환된다
- `null` → 숫자 타입의 경우 `0`으로 변환
- `Array` → 숫자 타입의 경우 `NaN`(Not A Number) 으로 변환
- `parseInt(’111.20’);` → 정수형으로 변환; `111`
- `parseFloat(’111.20’);` → 실수형으로 변환; `111.2`