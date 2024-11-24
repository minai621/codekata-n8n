# 문자열 내 중복 문자 제거

## 문제 설명
주어진 문자열에서 중복된 문자를 제거하여, 각 문자가 한 번씩만 나타나도록 하는 함수를 작성하세요. 문자열의 순서는 원래 문자열에서의 첫 번째 등장 순서를 유지해야 합니다.

## 제약 사항
- 문자열은 알파벳 소문자로만 구성되어 있습니다.
- 문자열의 길이는 1 이상 100 이하입니다.
- 첫 번째로 등장한 순서를 유지해야 합니다.

## 입출력 예시
입력: `"abbacd"`
출력: `"abcd"`

입력: `"aabbcc"`
출력: `"abc"`

## 코드
```javascript
function solution(input) {
    // 여기에 코드를 작성하세요
}

// 테스트를 위한 코드입니다
console.log(solution("abbacd")) // "abcd"
console.log(solution("aabbcc")) // "abc"
console.log(solution("hello")) // "helo"
```

## 학습 포인트 및 힌트
### 핵심 개념
- **문자열 다루기**: 문자열에서 문자를 제거하거나 비교하는 방법.
- **집합(Set) 활용**: 중복 항목을 처리하는 방법으로 집합 자료구조를 이용할 수 있음.
- **배열 및 문자열 메서드**: `indexOf`와 같은 메서드를 통해 중복을 확인.

### 접근 방법
- 문자열을 순회하며 각 문자를 확인합니다.
- 이미 나온 문자라면 지나치고, 나오지 않은 문자라면 결과 문자열에 추가합니다.
- **순서 유지**는 `Set`을 쓰되, 순회하면서 처음 발견되는 위치에 넣어서 구현할 수 있습니다.

### 조심해야 할 점
- 이미 존재하는 문자를 다시 추가하지 않도록 주의하세요.
- 각각의 문자가 처음 등장한 순서를 잘 유지해야 합니다.

### 추천하는 학습 내용
- **JavaScript의 Set 객체**: 중복을 자동으로 처리해주고, 삽입 순서를 유지합니다.
- **배열 및 문자열 메서드**: `indexOf`, `includes`, `push` 등에 대한 이해를 높입니다.
- **집합 개념**: 수학적 집합의 특성에 대해 알아봅니다.

## 정답
<details>
<summary>정답 보기</summary>

### 해설
문자열의 문자를 하나씩 확인하면서, 새로운 문자라면 결과 문자열에 추가합니다. 중복 확인을 위해 `Set`을 사용하여 반복없이 추가된 문자를 저장하고, 반복문으로 문자들을 한 번만 추가합니다.

### 코드
```javascript
function solution(input) {
    let seen = new Set();
    let result = '';
    for (let char of input) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}
```

### 시간 복잡도
- 전형적인 `O(n)` 시간 복잡도를 가집니다. 여기서 `n`은 입력 문자열의 길이입니다. 각 문자를 한 번씩만 확인하기 때문입니다.

### 공간 복잡도
- `O(n)` 공간 복잡도를 가집니다. 가장 많은 경우 모든 문자가 중복 없이 `Set`에 들어가는 경우입니다.

### 최적화 팁
- `Set`은 삽입 및 중복 확인에 `O(1)`의 시간 복잡도를 제공합니다.
- 가능한 적은 연산을 위해 이미 확인된 문자는 즉시 건너뜁니다.
</details>