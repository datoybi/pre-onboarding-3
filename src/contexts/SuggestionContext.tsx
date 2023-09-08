import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { fetchSuggestions } from "../apis/remotes";
import { Cache, Sick } from "../types";

type GlobalContextType = {
  suggestion: Sick[] | null;
  focusIndex: number;
  setFocusIndex: Dispatch<SetStateAction<number>>;
  handleSetSuggestions: (keyword: string) => void;
};

const STALE_CHECK_TIME = 10000;

const GlobalContext: GlobalContextType = {
  suggestion: [],
  focusIndex: 0,
  setFocusIndex: () => {
    throw new Error();
  },
  handleSetSuggestions: () => {
    throw new Error();
  },
};

export const SuggestionContext = createContext(GlobalContext);

export function SuggestionContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cache, setCache] = useState<Cache[]>([]);
  const [suggestion, setSuggestion] = useState<Sick[] | null>(null);
  const [focusIndex, setFocusIndex] = useState<number>(0);

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

  const handleSetSuggestions = async (keyword: string) => {
    // 캐시안에 있는지 체크
    const hasSuggestions = cache.some(
      (suggestion) => suggestion.keyword === keyword
    );

    // 만료됐는지 체크
    const isExpired = () => {
      const cacheTime = cache.find(
        (suggestion) => suggestion?.keyword === keyword
      )?.staleTime;
      if (!cacheTime) return;
      return new Date().getTime() - cacheTime > STALE_CHECK_TIME;
    };

    const canUseCache = hasSuggestions && !isExpired();
    setFocusIndex(0);

    if (canUseCache) {
      const updatedCache = cache.find(
        (suggestion) => suggestion?.keyword === keyword
      )?.suggestions;
      if (updatedCache) setSuggestion(() => updatedCache);
      console.log("캐시 사용");
    }

    if (!canUseCache) {
      const nextCache = deleteExpiredCache(keyword);
      const newSuggestion: Sick[] | any = await fetchSuggestions(keyword);
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
  };

  return (
    <SuggestionContext.Provider
      value={{
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
