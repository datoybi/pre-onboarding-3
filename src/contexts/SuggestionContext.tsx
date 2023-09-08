import { ReactNode, createContext, useState } from "react";
import { getSuggestions } from "../apis/remotes";
// interface GlobalContextPops {
//   issue: any;
//   issues: Issues;
//   setIssue: Dispatch<SetStateAction<Issue>>;
//   setIssues: Dispatch<SetStateAction<Issues>>;
// }

const STALE_CHECK_TIME = 10000;

const GlobalContext: any = {
  suggestions: [],
  keywordSuggestion: () => {},
  focusIndex: 0,
  setFocusIndex: () => {},
  setKeyword: () => {},
  getSuggestion: () => {},
  setSuggestions: () => {
    throw new Error();
  },
};

export const SuggestionContext = createContext(GlobalContext);

export function SuggestionContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [suggestions, setSuggestions] = useState<any>([]);
  const [suggestion, setSuggestion] = useState<any>([]);
  const [focusIndex, setFocusIndex] = useState<number>(0);

  const handleSetSuggestions = async (keyword: string) => {
    console.log("keyword", keyword);
    const hasSuggestions = suggestions.some(
      (suggestion: any) => suggestion.keyword === keyword
    );
    console.log("hasSuggestions", hasSuggestions);

    // 만료됐는지 체크
    const isExpired = () => {
      const cacheTime = suggestions.find(
        (suggestion: any) => suggestion.keyword === keyword
      ).staleTime;
      return new Date().getTime() - cacheTime > STALE_CHECK_TIME;
    };

    if (hasSuggestions && !isExpired()) {
      setSuggestion(
        () =>
          suggestions.find((suggestion: any) => suggestion.keyword === keyword)
            .suggestions
      );

      console.log("캐시 사용");
    } else {
      const expiredIndex = suggestions.findIndex(
        (suggestion: any) => suggestion.keyword === keyword
      );
      let nextSuggestions = [...suggestions];
      if (expiredIndex > -1) {
        // const newSuggestions = suggestions.slice(expiredIndex)
        nextSuggestions = [...suggestions];
        nextSuggestions.splice(expiredIndex, 1);
        console.log("nextSuggestions", nextSuggestions);
      }
      console.log("isExpired ", expiredIndex);

      const newSuggestion = await getSuggestions(keyword);
      if (!newSuggestion) setSuggestion(() => []);
      console.info("calling api");

      setSuggestions(() => [
        ...nextSuggestions,
        {
          keyword,
          suggestions: newSuggestion,
          staleTime: new Date().getTime(),
        },
      ]);
      setSuggestion(() => newSuggestion);
    }
  };

  console.log(suggestions);

  return (
    <SuggestionContext.Provider
      value={{
        suggestions,
        suggestion,
        focusIndex,
        handleSetSuggestions,
        setFocusIndex,
      }}
    >
      {children}
    </SuggestionContext.Provider>
  );
}
