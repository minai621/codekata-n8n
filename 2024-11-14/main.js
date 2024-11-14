function solution(input) {
    return input.sort((a, b) => a - b)
}

// 테스트를 위한 코드입니다
console.log(solution([3, 1, 4, 1, 5])) // [1, 1, 3, 4, 5]
console.log(solution([-1, -3, 2, 0])) // [-3, -1, 0, 2]
console.log(solution([10, 5, 3, 8, 2])) // [2, 3, 5, 8, 10]
