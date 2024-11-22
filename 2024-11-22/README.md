# 복잡한 문자열 조작

## 문제 설명
주어진 문자열에서, 각 단어의 첫 글자를 대문자로 변환하고 나머지 글자는 소문자로 변환하는 함수를 구현하세요. 단, 연속되는 공백은 하나의 공백으로 간주합니다. 문자열의 앞뒤 공백도 제거해야 합니다.

## 제약 사항
- 문자열의 길이는 최대 10,000자입니다.
- 입력 문자열은 알파벳과 공백으로만 이루어져 있습니다.
- 연속된 공백은 하나의 공백으로 변환됩니다.

## 입출력 예시
입력: "  hELLO   WORLD "
출력: "Hello World"

입력: "jAVascRIpt is FUN"
출력: "Javascript Is Fun"

## 코드
```javascript
function solution(input) {
    // 여기에 코드를 작성하세요
}

// 테스트를 위한 코드입니다
console.log(solution("  hELLO   WORLD ")) // "Hello World"
console.log(solution("jAVascRIpt is FUN")) // "Javascript Is Fun"
console.log(solution("cOdIng   ChALLEnge")) // "Coding Challenge"
```

## 학습 포인트 및 힌트
### 핵심 개념
- 문자열 변환 및 조작
- 배열 및 문자열 메서드의 사용
- 불필요한 공백 제거

### 알고리즘 설명
- 입력 문자열을 트림하여 앞뒤 공백을 제거합니다.
- 문자열을 단어 단위로 분리합니다.
- 각 단어의 첫 글자만 대문자로 변환하고 나머지는 소문자로 변환합니다.
- 단어들을 하나의 문자열로 결합합니다.

### 접근 방법
- String.prototype.trim() 및 String.prototype.split() 메서드를 활용하여 문자열의 공백 제거 및 분리
- Array.prototype.map()을 사용하여 변환된 배열을 처리
- String.charAt()과 String.slice()를 이용하여 대소문자 변환

### 조심해야 할 점
- 연속된 공백을 하나의 공백으로 변환해야 함
- 변환 후 문자열의 앞뒤에 공백이 없어야 함

### 추천하는 학습 내용
- JavaScript의 문자열 및 배열 메서드
- Regular Expressions(정규 표현식)으로 공백 관리
- 고급 문자열 조작 기법

## 정답
<details>
<summary>정답 보기</summary>

### 해설
주어진 문자열에서 각 단어의 첫 글자를 대문자로, 나머지는 소문자로 변환하는 과정입니다. 여기서 주요한 부분은 연속된 공백을 처리하고, 문자열의 앞뒤 공백을 제거한 후 각 단어를 올바르게 변환하는 것입니다.

### 코드
```javascript
function solution(input) {
    return input.trim().split(/\s+/).map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
}
```

### 시간 복잡도
- O(n), 여기서 n은 문자열의 길이입니다. 문자열을 한 번 순회하며 작업하므로 선형 시간 복잡도를 가집니다.

### 공간 복잡도
- O(n), 새로운 문자열과 배열이 생성되므로 입력 문자열 길이에 비례하는 메모리를 사용합니다.

### 최적화 팁
- 불필요한 메모리 사용을 줄이기 위해 가능한 한 중간 변수 사용을 최소화
- 정규 표현식을 잘 활용하여 문자열의 패턴을 효율적으로 처리
</details>