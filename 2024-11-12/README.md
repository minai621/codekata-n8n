# 문자열 문자 교환하기

## 문제 설명
주어진 문자열에서 두 개의 특정한 문자의 위치를 교환하는 함수를 작성하세요. 예를 들어, 문자열 "hello"에서 'h'와 'o'의 위치를 교환하면 "oellh"가 됩니다.

## 제약 사항
- 입력 문자열의 길이는 최소 1 이상입니다.
- 주어진 두 문자는 문자열 내에 반드시 존재합니다.
- 문자는 대소문자를 구분합니다.

## 입출력 예시
입력: ("hello", 'h', 'o')
출력: "oellh"

입력: ("kangaroo", 'a', 'o')
출력: "kongarao"

## 코드
```javascript
function solution(inputString, char1, char2) {
    // 여기에 코드를 작성하세요
}

// 테스트를 위한 코드입니다
console.log(solution("hello", 'h', 'o')) // "oellh"
console.log(solution("kangaroo", 'a', 'o')) // "kongarao"
console.log(solution("javascript", 'a', 't')) // "tavascirpt"
```

## 학습 포인트 및 힌트
### 핵심 개념
- 문자열 조작
- 배열 인덱싱 및 대체

### 접근 방법
- 주어진 문자열을 배열로 변환합니다.
- 두 캐릭터의 인덱스를 찾습니다.
- 두 캐릭터의 위치를 배열에서 직접 교환합니다.
- 배열을 다시 문자열로 변환하여 반환합니다.

### 조심해야 할 점
- 인덱스가 잘못된 경우 프로그램이 충돌할 수 있습니다.
- 문자의 대소문자가 동일한지 확인합니다.

### 추천하는 학습 내용
- JavaScript 문자열 메서드: `split`, `join`, `indexOf`
- 배열 조작 및 인덱스 관리
- 자바스크립트의 특수한 문자열 처리 방법

## 정답
<details>
<summary>정답 보기</summary>

### 해설
이 문제를 해결하기 위해서는 문자열을 배열로 변환하는 것이 중요합니다. 변환 후, 특정 위치의 문자를 교환하고, 다시 문자열로 변환합니다.

### 코드
```javascript
function solution(inputString, char1, char2) {
    let chars = inputString.split(""); // 문자열을 배열로 변환
    let index1 = chars.indexOf(char1);
    let index2 = chars.indexOf(char2);
    
    if (index1 === -1 || index2 === -1) return inputString; // 만약 문자가 존재하지 않으면 원본 리턴
    
    // 위치 교환
    let temp = chars[index1];
    chars[index1] = chars[index2];
    chars[index2] = temp;
    
    return chars.join(""); // 배열을 문자열로 변환하여 반환
}
```

### 시간 복잡도
- O(n): 문자열을 배열로 변환하고, 인덱스를 찾고, 두 문자의 위치를 조작하는 동안, 모든 작업은 문자열의 길이에만 의존합니다.

### 공간 복잡도
- O(n): 새로운 문자 배열을 생성하므로, 입력 문자열의 길이에 비례하는 추가 공간이 필요합니다.

### 최적화 팁
- 문자열을 직접 교환하기보다는 배열로 변환하여 교환하는 것이 더 효율적입니다.
- 다양한 테스팅 케이스를 이용하여 엣지 케이스를 확인합니다.
</details>