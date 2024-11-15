function solution(input) {
    return input.map((text) => {
        return Array(...text).reverse().join("");
    }).join("-")
}

// 테스트를 위한 코드입니다
console.log(solution(["code", "kata"])) // "edoc-atak"
console.log(solution(["javascript", "is", "fun"])) // "tpircsavaj-si-nuf"
console.log(solution(["reverse", "and", "join"])) // "esrever-dna-nioj"
