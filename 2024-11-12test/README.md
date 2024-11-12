1. 문제 제목:
   문자열 구분자 변경

2. 배경 설명:
   문자열은 다양한 데이터 포맷에서 매우 중요하게 사용됩니다. 예를 들어, CSV 파일이나 URL 쿼리 파라미터에서 문자열은 서로 다른 구분자(delimiter)를 사용하여 항목을 구분합니다. 이 문제는 구분자를 다른 것으로 바꾸는 방법을 통해 문자열 조작에 대한 이해를 높이는 것입니다.

3. 문제 설명:
   주어진 문자열이 있고, 이 문자열은 특정 구분자로 항목이 구분되어 있습니다. 주어진 구분자를 새로운 구분자로 변경하는 함수를 작성하세요.

   - 입력: 문자열 `str`, 현재 구분자 `currentDelimiter`, 새로운 구분자 `newDelimiter`
   - 출력: 새로운 구분자로 항목이 구분된 문자열

   제약사항:
   - 문자열 내부에 대체할 구분자가 없을 수도 있습니다.
   - 문자열은 빈 문자열일 수 있습니다.
   - 구분자는 빈 문자열이 아닙니다.

4. 예시:

   ```javascript
   입력: ("apple,banana,cherry", ",", "-")
   출력: "apple-banana-cherry"

   입력: ("apple*banana*cherry", "*", ",")
   출력: "apple,banana,cherry"

   입력: ("singleword", ",", "-")
   출력: "singleword"
   ```

5. 함수 시그니처:

   ```javascript
   /**
    * 문자열의 구분자를 변경합니다.
    * @param {string} str - 구분자를 변경할 대상 문자열
    * @param {string} currentDelimiter - 현재 사용 중인 구분자
    * @param {string} newDelimiter - 새롭게 사용할 구분자
    * @returns {string} - 변경된 구분자를 적용한 문자열
    */
   function replaceDelimiter(str, currentDelimiter, newDelimiter) {
     // Implementation here
   }
   ```

6. 테스트 케이스:

   ```javascript
   // 기본 사용 테스트 케이스
   console.log(replaceDelimiter("apple,banana,cherry", ",", "-"));
   // 예상 출력: "apple-banana-cherry"

   // 구분자가 포함되지 않은 경우
   console.log(replaceDelimiter("singleword", ",", "-"));
   // 예상 출력: "singleword"

   // 여러 글자로 이루어진 구분자 사용
   console.log(replaceDelimiter("red:blue:green", ":", ";"));
   // 예상 출력: "red;blue;green"

   // 빈 문자열 입력
   console.log(replaceDelimiter("", ",", "/"));
   // 예상 출력: ""
   ```

7. 학습 포인트:
   - 문자열 분할 및 결합 기법
   - 문자열 내 구분자의 존재 여부 확인
   - 빈 문자열 및 특수 문자 처리 방법
   - 효율적인 문자열 조작을 위한 메서드 활용
   - 사용자가 정의한 함수의 읽기 쉽고 유지 보수 가능한 코드 스타일

이 문제를 통해 사용자들은 문자열 조작의 기본적인 방법을 학습할 수 있습니다. 다양한 문자열 메서드를 활용하여 효율적이고 직관적인 코드를 작성하는 방법을 익히는 데 도움이 됩니다.