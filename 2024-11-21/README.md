# 서로 다른 문자 개수 계산

## 문제 설명
주어진 문자열에서 서로 다른 문자의 개수를 계산하는 함수를 작성하세요. 대소문자는 서로 다른 문자로 처리되고, 공백은 제외하고 계산합니다.

## 제약 사항
- 입력 문자열의 길이는 1 이상 100 이하입니다.
- 입력 문자열은 영어 소문자, 대문자, 그리고 공백으로 구성됩니다.
- 출력은 정수형이어야 합니다.

## 입출력 예시
입력: `"Hello World"`
출력: `7`

입력: `"Aa Bb Cc"`
출력: `6`

## 코드
```javascript
function solution(input) {
    // 여기에 코드를 작성하세요
}

// 테스트를 위한 코드입니다
console.log(solution("Hello World")) // Expected Output: 7
console.log(solution("Aa Bb Cc")) // Expected Output: 6
console.log(solution("Test Case")) // Expected Output: 8
```

## 학습 포인트 및 힌트
### 핵심 개념
- 문자열과 배열 조작
- 세트 자료 구조 이해하기
- 공백 제거 및 중복 제거

### 접근 방법
- 입력 문자열에서 공백을 제거합니다.
- 문자열을 순회하면서 문자를 세트(Set)에 추가합니다.
- 세트의 크기를 반환합니다.

### 조심해야 할 점
- 대소문자 구분하기
- 공백을 계산에서 제외하기

### 추천하는 학습 내용
- JavaScript의 Set 사용법
- 배열 및 문자열 조작 메서드 (`split`, `filter`, `join`)
- 적절한 반복문 또는 고차 함수 사용

## 정답
<details>
<summary>정답 보기</summary>

### 해설
주어진 문자열에서 공백을 제거한 후, 모든 문자를 세트에 추가해서 중복을 제거합니다. 최종적으로 세트의 크기를 반환하여 서로 다른 문자 개수를 출력합니다.

### 코드
```javascript
function solution(input) {
    input = input.split(' ').join(''); // 공백 제거
    const uniqueCharacters = new Set(input.split(''));
    return uniqueCharacters.size;
}
```

### 시간 복잡도
- `O(n)`, 여기서 `n`은 입력 문자열의 길이입니다. 문자열을 순회하는 데 걸리는 시간입니다.

### 공간 복잡도
- `O(n)`, 사용된 세트의 크기가 문자열의 문자 수에 따라 다르기 때문입니다.

### 최적화 팁
- 세트는 중복된 값을 허용하지 않으므로, 직접 중복 체크할 필요가 없습니다.
- 가능한 한 빨리 공백을 제거하여 불필요한 문자의 처리를 줄입니다.
</details>