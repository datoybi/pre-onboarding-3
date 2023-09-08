import { ReactNode, createContext, useState } from "react";

// interface GlobalContextPops {
//   issue: any;
//   issues: Issues;
//   setIssue: Dispatch<SetStateAction<Issue>>;
//   setIssues: Dispatch<SetStateAction<Issues>>;
// }

const GlobalContext: any = {
  suggestions: {},
  focusIndex: 0,
  setFocusIndex: () => {},
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
  const [focusIndex, setFocusIndex] = useState<number>(0);

  const handleSetSuggestion = () => {};

  console.log(suggestions);

  return (
    <SuggestionContext.Provider
      value={{
        suggestions,
        focusIndex,
        setSuggestions,
        setFocusIndex,
      }}
    >
      {children}
    </SuggestionContext.Provider>
  );
}
