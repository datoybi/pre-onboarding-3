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
  const [suggestion, setSuggestion] = useState<any>(null);
  const [focusIndex, setFocusIndex] = useState<number>(0);

  const deleteExpiredData = (keyword: string) => {
    let nextSuggestions = [...suggestions];
    const expiredIndex = suggestions.findIndex(
      (suggestion: any) => suggestion.keyword === keyword
    );
    if (expiredIndex > -1) {
      nextSuggestions = [...suggestions];
      nextSuggestions.splice(expiredIndex, 1);
    }
    return nextSuggestions;
  };

  const handleSetSuggestions = async (keyword: string) => {
    // 캐시안에 있는지 체크
    const hasSuggestions = suggestions.some(
      (suggestion: any) => suggestion.keyword === keyword
    );

    // 만료됐는지 체크
    const isExpired = () => {
      return (
        new Date().getTime() -
          suggestions.find((suggestion: any) => suggestion.keyword === keyword)
            .staleTime >
        STALE_CHECK_TIME
      );
    };

    if (hasSuggestions && !isExpired()) {
      setSuggestion(
        () =>
          suggestions.find((suggestion: any) => suggestion.keyword === keyword)
            .suggestions
      );
      console.log("캐시 사용");
    } else {
      const nextSuggestions = deleteExpiredData(keyword);
      const newSuggestion: any = await getSuggestions(keyword);
      console.info("calling api");

      if (newSuggestion.length === 0) {
        setSuggestion([]);
        return;
      }

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
