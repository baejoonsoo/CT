# TIL

### GCD:

- a%b를 재귀적으로 반복하여 GCD 추출 (유클리드호제법)

### LCM:

- (a\*b)/GCD

### Array.reduce()

```js
Array.reduce((pre, cur) => pre + cur);
```

array의 모든 값을 더할 때 많이 사용

pre : 이전 index에서의 연산의 return 값

cur : array의 n번째 index의 값

### 에라토스테네스의 체

- 소수들을 대량으로 빠르고 정확하게 구하는 알고리즘

- 에라토스테네스의 체 원리

  1.  소수를 판별할 범위만큼 배열을 할당하여 해당하는 값 삽입
  2.  2부터 시작해서 특정 수의 배수에 해당하는 수를 모두 지운다.(자기 자신은 X)
  3.  2부터 시작하여 남아있는 수를 모두 출력

- 배열의 길이가 n일때, √n 보다 큰 값의 배수는 이미 삭제된 숫자이기에 √n이하 수의 배수를 지운다

### String.localeCompare()

- 기준 문자열과 비교했을 때 비교 대상 문자열이 정렬상 전에 오는지, 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴

  - 기존 문자열의 우선 순위가 더 높다면 -1

  - 기존 문자열의 우선 순위가 더 낮다면 +1

  - 같은 우선 순위(같은 문자열)이라면 0

    ```javascript
    "a".localeCompare("c"); // -1
    "check".localeCompare("against"); // 1
    "a".localeCompare("a"); // 0
    ```

### 배열 슬라이딩

- 배열의 특정 인덱스에서 다른 특정인텍스까지가 담긴 새로운 배열을 뽑아내는 기법

- substr(), substring(), slice() 존재

- substr()은 오래된 함수로 사용을 권장하지 않음
- substring과 slice 사용을 권장하는데 이 중 slice는 음수를 통한 슬라이딩이 가능하므로 사용을 권장함

### Array.fill()

- 배열의 시작 인덱스부터 끝 인덱스의 이전까지 하나의 값으로 채움

- 구문

  ```javascript
  arr.fill(value, start, end]])
  ```

  - value : 배열을 채울 값.

  - start `Optional` : 시작 인덱스, 기본 값은 0.
  - end `Optional` : 끝 인덱스, 기본 값은 `this.length`.


- start와 end는 음수를 사용할 수 있으며 음수를 사용할 시 (length+start), (length+end)를 의미한다



- 예시

  ```js
  const array1 = [1, 2, 3, 4];
  
  console.log(array1.fill(0, 2, 4));
  // expected output: [1, 2, 0, 0]
  
  // fill with 5 from position 1
  console.log(array1.fill(5, 1));
  // expected output: [1, 5, 5, 5]
  
  console.log(array1.fill(6));
  // expected output: [6, 6, 6, 6]
  
  console.log(array1.fill(8,-2));
  // expected output: [1, 2, 8, 8]
  
  console.log(array1.fill(9,-3,-1));
  // expected output: [1, 9, 9, 4]
  ```



### array.find()

- 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다
- 만족하는 요소가 없다면 `undefined`를 반환한다

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```



##### [js의 array는 object이다](https://programmers.co.kr/learn/courses/30/lessons/42576/solution_groups?language=javascript)

- array에 key, value로 저장 가능
- 단 property이기에 forEach를 통해 key, value를 얻지는 못한다



### string.padEnd()

```js
str.padEnd(targetLength [, padString])
```

- targetLength

  목표 문자열 길이. 현재 문자열의 길이보다 작다면 채워넣지 않고 그대로 반환.

- padString

  현재 문자열에 채워넣을 다른 문자열. 

  문자열이 너무 길어 목표 문자열 길이를 초과한다면 좌측 일부를 잘라서 넣음. 

  기본값은 " "
