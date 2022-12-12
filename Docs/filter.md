# highlight filter

videos를 오늘 기준 7일까지 분류.
7일을 초과했다면 'rest' 키로 분류.

필터 태그는 select.
기본 날짜는 오늘.
셀렉트를 통해 옵션을 선택하면 해당 날짜로 바뀐다.
- 날짜가 바뀌면서 보여줘야 할 비디오도 바뀐다.
- 우선 총 3개의 데이터가 필요하다.
    - "선택한 날짜"(string)
    - "선택할 수 있는 날짜들"(array)
    - "선택한 날에 보여줄 비디오들"(object의 key에 매핑된 array)
        - open api로부터 가져온 비디오들을 "선택할 수 있는 날짜들"을 이용해 미리 객체로 만들어두면 편하겠다.

- filter를 개별 컴포넌트로 분리하려면....?
    - Home 컴포넌트에 선택한 날짜 + 비디오들이 있어야 한다.
    - filter 컴포넌트에는 선택한 날짜 + 선택할 수 있는 날짜가 있으면 된다.
