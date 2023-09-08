# **프리온보딩 3주차 개인 과제 - 윤다솜**

## 🚩목표

검색창 구현 + 검색어 추천 기능 구현 + 캐싱 기능 구현

---

## 🌈 배포

https://pre-onboarding-3.vercel.app/

---

## ✨기능 구현 사항

---

### API 호출별로 로컬 캐싱 구현

- context안에 cache state를 선언하여 prop drilling 방지 및 전역적으로 cache 관리
  ```jsx
  export function SuggestionContextProvider({
    children,
  }: {
    children: ReactNode;
  }) {
    const [cache, setCache] = useState<Cache[]>([]);
  // ...
    return (
      <SuggestionContext.Provider value={{}}>
        {children}
      </SuggestionContext.Provider>
    );
  }
  ```
  <br/>
- cache state데이터를 json으로 구현
  ```jsx
  type Cache = {
    keyword: string;
    staleTime: number;
    suggestions: Sick[];
  };
  ```
  <br/>
- 해당 키워드가 캐싱 데이터에 존재하면 캐싱 데이터를 사용
  ```jsx
  if (canUseCache) {
    const updatedCache = cache.find(
      (suggestion) => suggestion?.keyword === keyword
    )?.suggestions;
    if (updatedCache) setSuggestion(() => updatedCache);
  }
  ```
  <br/>
- 해당 키워드가 캐싱 데이터에 존재하지 않다면 api 호출

  ```jsx
  if (!canUseCache) {
    const newSuggestion: Sick[] = await fetchSuggestions(keyword);
    console.info("calling api");

    if (newSuggestion.length === 0) {
      setSuggestion([]);
      return;
    }

    setCache(() => [
      ...nextCache,
      {
        keyword,
        suggestions: newSuggestion,
        staleTime: new Date().getTime(),
      },
    ]);
    setSuggestion(() => newSuggestion);
  }
  ```

  <br/>

- 키워드의 만료시간이 지났다면 캐시에서 삭제 후, api 호출
  ```jsx
  const deleteExpiredCache = (keyword: string) => {
      let nextSuggestions = [...cache];
      const expiredIndex = cache.findIndex(
        (suggestion) => suggestion.keyword === keyword
      );
      if (expiredIndex > -1) {
        nextSuggestions = [...cache];
        nextSuggestions.splice(expiredIndex, 1);
      }
      return nextSuggestions;
    };
  ```

---

### debounce 적용

입력마다 API 호출하지 않도록 lodash의 debounce를 이용하여 구현

```jsx
const handleKeywordChange = debounce(
  (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    handleSetSuggestions(keyword);
  },
  1000
);
```

---

### 키보드만으로 추천 검색어들로 이동 가능하도록 구현

input에 focus가 되었을 때,

위, 아래 키보드를 이용하여 추천 검색어 횡단 기능 구현

```jsx
switch (event.key) {
  case "ArrowDown":
    if (suggestion.length < 0) return;
    if (focusIndex === suggestion.length - 1) setFocusIndex(0);
    if (focusIndex < suggestion.length - 1)
      setFocusIndex((prevIndex: number) => prevIndex + 1);
    break;
  case "ArrowUp":
    if (focusIndex === 0) setFocusIndex(suggestion.length);
    if (focusIndex < suggestion.length)
      setFocusIndex((prevIndex: number) => prevIndex - 1);
    break;
  default:
}
```
