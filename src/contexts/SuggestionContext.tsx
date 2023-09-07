import { ReactNode, createContext, useState } from "react";

// interface GlobalContextPops {
//   issue: any;
//   issues: Issues;
//   setIssue: Dispatch<SetStateAction<Issue>>;
//   setIssues: Dispatch<SetStateAction<Issues>>;
// }

const GlobalContext: any = {
  suggestions: {},
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

  return (
    <SuggestionContext.Provider
      value={{
        suggestions,
        setSuggestions,
      }}
    >
      {children}
    </SuggestionContext.Provider>
  );
}
