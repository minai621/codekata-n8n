# 문자열 뒤집기와 연결하기

## 문제 설명
주어진 문자열 배열이 있을 때, 각 문자열을 뒤집고 그 결과를 하나의 문자열로 연결하세요. 단, 각 문자열 사이에는 "-" 문자를 삽입하세요.

예를 들어, 입력이 `["hello", "world"]`라면, 각각의 문자열을 뒤집으면 "olleh"와 "dlrow"가 됩니다. 이 두 문자열을 "-"로 연결하면 "olleh-dlrow"가 됩니다.

## 제약 사항
- 배열 내 문자열의 길이는 1 이상 100 이하입니다.
- 문자열 배열의 길이는 1 이상 10 이하입니다.
- 모든 문자열은 알파벳 소문자로 구성되어 있습니다.

## 입출력 예시
입력: `["code", "kata"]`
출력: `"edoc-atak"`

입력: `["javascript", "is", "fun"]`
출력: `"tpircsavaj-si-nuf"`

## 코드
```javascript
function solution(input) {
    // 여기에 코드를 작성하세요
}

// 테스트를 위한 코드입니다
console.log(solution(["code", "kata"])) // "edoc-atak"
console.log(solution(["javascript", "is", "fun"])) // "tpircsavaj-si-nuf"
console.log(solution(["reverse", "and", "join"])) // "esrever-dna-nioj"
```

## 학습 포인트 및 힌트
### 핵심 개념
- 문자열 조작
- 배열의 순회

### 접근 방법
- 각 문자열을 뒤집은 후 결과를 배열에 저장
- 저장된 배열을 특정 문자열("-")로 연결

### 조심해야 할 점
- 문자열을 뒤집는 방법에 익숙하지 않을 수 있음
- 빈 배열이나 빈 문자열에 주의

### 추천하는 학습 내용
- `Array.prototype.map()`
- `Array.prototype.join()`
- `String.prototype.split()`, `String.prototype.reverse()`, `String.prototype.join()`

## 정답
<details>
<summary>정답 보기</summary>

### 해설
문제를 해결하기 위해서는 두 가지 주요 작업을 수행해야 합니다: 문자열을 뒤집고, 결과 문자열을 연결하는 것입니다.

1. 문자열 뒤집기: 각 문자열은 `split("").reverse().join("")`을 통해 뒤집을 수 있습니다.
2. 연결하기: `join("-")`을 사용하여 배열의 문자열을 "-"로 연결할 수 있습니다.

### 코드
```javascript
function solution(input) {
    return input.map(str => str.split("").reverse().join("")).join("-");
}
```

### 시간 복잡도
- 시간 복잡도는 O(n * m)입니다. 여기서 n은 배열의 길이, m은 각 문자열의 평균 길이입니다.

### 공간 복잡도
- 공간 복잡도는 O(n * m)이며, 변환된 문자열을 저장하는 데 사용됩니다.

### 최적화 팁
- 문자열을 뒤집는 로직을 직접 구현하여 더욱 최적화할 수 있습니다.
- `Array.prototype.reduce()`를 이용하여 배열 없이도 구현 가능합니다.
</details>