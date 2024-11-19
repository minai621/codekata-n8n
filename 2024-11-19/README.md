# 합병 정렬을 활용한 배열 정렬

## 문제 설명
주어진 정수 배열을 합병 정렬을 사용하여 오름차순으로 정렬하는 함수를 작성하세요. 합병 정렬은 재귀적인 분할 정복 알고리즘으로, 배열을 중간지점에서 자르고 각각을 정렬한 후 병합하는 방식입니다.

## 제약 사항
- 입력 배열의 크기는 1 이상 10,000 이하입니다.
- 배열의 각 요소는 -10,000 이상 10,000 이하의 정수입니다.
- 시간 복잡도를 고려하여 최적의 성능을 발휘해야 합니다.

## 입출력 예시
입력: [5, 3, 8, 4, 2]  
출력: [2, 3, 4, 5, 8]

입력: [100, -1, 25, 7, 8]  
출력: [-1, 7, 8, 25, 100]

## 코드
```javascript
function solution(arr) {
    // 여기에 코드를 작성하세요
}

// 테스트를 위한 코드입니다
console.log(solution([5, 3, 8, 4, 2])) // [2, 3, 4, 5, 8]
console.log(solution([100, -1, 25, 7, 8])) // [-1, 7, 8, 25, 100]
console.log(solution([4, 1, 3, 9, 6, 2, 0])) // [0, 1, 2, 3, 4, 6, 9]
```

## 학습 포인트 및 힌트
### 핵심 개념
- **합병 정렬:** 안정적인 정렬 알고리즘으로, 분할 정복과 병합 단계를 이해해야 합니다.
- **시간 복잡도:** 합병 정렬은 평균 및 최악의 경우에도 O(n log n)의 시간 복잡도를 가집니다.

### 접근 방법
1. 배열의 중간을 찾아 두 개의 하위 배열로 분할합니다.
2. 각각의 하위 배열을 재귀적으로 합병 정렬을 호출하여 정렬합니다.
3. 정렬된 하위 배열들을 병합합니다.

### 조심해야 할 점
- **스택 오버플로우:** 너무 큰 배열을 처리할 경우 재귀 깊이를 주의해야 합니다.
- **병합 단계에서의 인덱스 관리:** 두 하위 배열을 병합할 때 인덱스를 올바르게 관리합니다.

### 추천하는 학습 내용
- **JavaScript의 배열 메서드:** `slice`, `concat` 사용법.
- **분할 정복 알고리즘 개념:** 다른 유사한 알고리즘들도 살펴볼 가치가 있습니다.

## 정답
<details>
<summary>정답 보기</summary>

### 해설
합병 정렬은 배열을 계속해서 반으로 나누고, 각 부분 배열을 정렬한 다음 병합하는 알고리즘입니다. 두 개의 정렬된 배열을 합병할 때 새로운 배열에 작은 요소부터 순서대로 추가합니다.

### 코드
```javascript
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function solution(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex);

    return merge(solution(left), solution(right));
}
```

### 시간 복잡도
- O(n log n): 배열을 계속 반으로 나누며 처리하기 때문입니다.

### 공간 복잡도
- O(n): 재귀 호출과 병합 과정에서 추가적인 배열이 필요합니다.

### 최적화 팁
- 메모리 사용을 줄이기 위해 링크드 리스트와 같은 자료구조를 사용하면 좋습니다.
- 배열의 크기가 작을 때는 삽입 정렬로 전환하여 이점을 볼 수 있습니다.
</details>