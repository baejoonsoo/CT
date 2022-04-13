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
  
  console.log(array1.fill(8, -2));
  // expected output: [1, 2, 8, 8]
  
  console.log(array1.fill(9, -3, -1));
  // expected output: [1, 9, 9, 4]
  ```



### array.find()

- 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다
- 만족하는 요소가 없다면 `undefined`를 반환한다

```javascript
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

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



### String.replace()

- 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환

```js
// 구문
var newStr = str.replace(regexp|substr, newSubstr|function)
```

- regexp (pattern)

  `newSubStr`로 대체 될 정규식

- substr (pattern)

  `newSubStr`로 대체 될 `String`. 정규식이 아닌 글자 그대로의 문자열로 처리

- newSubStr (replacement)

  첫번째 파라미터를 대신할 문자열

- function (replacement)

  주어진 `regexp` 또는 `substr`에 일치하는 요소를 대체하는 데 사용될 새 하위 문자열을 생성하기 위해 호출되는 함수



# 정규표현식

#### 특정한 규칙을 가진 문자열의 집합을 표현하기 위해 쓰이는 형식언어

##### 정규식 메타문자에서는 흔히 대문자로 표현한 것은 소문자로 표현한 문자의 반대를 의미



## 정규표현식 메타 문자

#### `^`

- 문자열의 시작을 표현

- `[ ... ]` 내부에서 쓰이는 경우라면 뒤의 패턴에 일치하지 않는 것을 선택한다

  ```markdown
  ^http : 문자열이 http로 시작하는 경우에만 매치하며, 중간에 나타난 http에는 매치하지 않는다.
  ab[^0-9]: “ab” 뒤에 숫자가 아닌 것이 오는 것에만 매치한다. (“abc” – O, “ab1” – X)
  ```



#### `$`

- 문자열의 끝을 표현

  ```markdown
  them$ : 문자열이 “them”으로 끝난 경우에만 해당 “them”에 매치한다.
  ```



#### `\b`

- 단어의 경계를 의미

- 문자열 시작과 끝, 공백, 개행, 탭, 콤마, 구두점, 대시문자 등

  ```markdown
  \bplay\b : 단어 경계로 구분되는 “play”에는 매치한다. 하지만 “playground”의 “play”에는 매치하지 않는다.
  ```



#### `\B`

- `\b`가 아닌것

  ```markdown
  \bplay\B : “play”뒤에 단어의 경계가 아닌 것이 올 때에만 매치
  “playground”, “playball”의 “play”에 매치한다
  <!-- 뒤에 오는 문자는 포함하지 않는다 -->
  ```



#### `\s`

- 공백 문자 및 탭 문자에 매치



#### `\S`

- 공백 문자가 아닌 한 글자에 매치



#### `\d`

- 숫자에 매치
- **`[0-9]`**와 같다



#### `\D`

-  숫자가 아닌 문자에 매치 
- **`[^0-9]`**와 같다.



#### `\w`

- 단어를 만들 수 있는 글자에 매치

- 알파벳 대소문자, 숫자, 언더스코어를 포함 (=[A-Za-z0-9_])



#### `\W`

- **`\w`**에 포함되지 않는 문자들에 매치



#### `\n`

- 개행문자



#### `\`

- 이스케이프용 문자

- 정규식 상의 특별한 의미가 있는 문자들을 문자 그대로 쓸 때 앞에 붙인다

  ```markdown
  \^ 라고 쓰면 “^” 문자 그대로를 가리킨다.
  ```



#### `.`

-  아무 문자 1개에 대응된다.
- 공백 역시 문자 1개로 취급된다.



## 선택 패턴



#### `|`

- **`|`** 문자를 이용하면 **`A | B`** 의 패턴으로 A 혹은 B에 매칭할 수 있다



#### `[...]`

- 대괄호속에 넣은 문자 중에서 하나에 매칭
- **`[cfh]all`** 이라는 패턴은 **`call`**, **`fall`**, **`hall`**에 모두 매치될 수 있다



#### `A-B`

- 특정 범위를 표현

  ```markdown
  숫자의 경우 [0-9]
  알파벳 소문자의 경우 [a-z]
  알파벳대문자의 경우 [A-Z]
  
   유니코드를 지원하는 정규식에서는 [ㄱ-힣]로 한글 한 글자에 매칭하는게 가능
  ```



#### `^`

- 선택 패턴 내에서 사용하면 **not**의 의미가 되어 뒤에 오는 문자들을 제외한다
- **`[^cfh]all`** 은 앞서 나온 **`call`**, **`fall`**, **`hall`**에는 매치하지 않으며 **`mall`**에는 매치하게 된다.



## 그룹

- 괄호**`( )`**로 둘러싼 단위는 그룹을 나타낸다

- 그룹은 전체 패턴 내에서 다시 하나로 묶여지는 패턴 조각을 나타낸다

- `|` 나 뒤에 수량 한정자를 그룹에 붙이는 형태로 많이 사용

- 한 번 매치한 그룹이 다시 반복되어 나타나는 경우에도 사용할 수 있다.

  ```markdown
  (tom|pot)ato : tomato, potato에 모두 매치되는 패턴을 그룹을 써서 좀 더 줄였다.
  (a|i){3}bc : a 혹은 i가 3개 온 후에 bc가 오는 패턴. aaabc, iiibc, aiabc, aaibc 등에 매치된다.
  ```





## 수량 한정자

- 동일한 글자 혹은 동일한 족(family)이 n 개 만큼 나오는 경우에 수량한정자를 뒤에 붙일 수 있다.



#### `?`

- 바로 앞의 글자 혹은 그룹이 1개 혹은 0개이다

  ```markdown
  `apples?` : `s?`는 “s”가 있을 수도 있고, 없을 수도 있다는 의미로, “apple”, “apples” 모두에 매치
  ```



#### `*`

-  0개 이상이다

  ```markdown
  n\d* : n 뒤에 숫자가 0개 이상이라는 의미. "n", “n1”, “n123” 에 모두 매치된다.
  ```



#### `+`

-  1개 이상이다.

  ```markdown
  n\d+ : “n” 뒤에 숫자가 1개 이상이다. “n1”, “n123″에 매치되지만 “n” 에는 매치되지 않는다.
  <!-- *인 경우 n도 매치됨 -->
  ```

  

#### `{n}`

- n 개가 있다

  ```markdown
  n\d{2}$ : “n”뒤에 숫자가 2개 있다. “n12” 에 매치되지만, “n”, “n1”, “n123″에는 매치되지 않는다
  
  n\d{2}라고 했을 때에 “n123″에서는 n12까지만 매치하고 3은 제외한다.
  ```

  

#### `{n, m}`

- n개 이상, m개 이하가 있다.

- `m`은 생략 가능하며, 생략되면 n개 이상을 의미한다

  ```markdown
  n\d{2, 3}$ : “n12” , “n123″에는 매치되지만 “n1″이나 “n1234″에는 매치되지 않는다.
  ```

