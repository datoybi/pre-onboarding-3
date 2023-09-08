import { useContext } from "react";
import { getSuggestions } from "../apis/remotes";
import useHttp from "./useHttp";
import { SuggestionContext } from "../contexts/SuggestionContext";

const useSuggestions = () => {
  const { isLoading, sendRequest, error } = useHttp();
  const { setSuggestions } = useContext(SuggestionContext);

  async function fetchSuggestions(keyword: string) {
    const fetchSuggestions = async () => {
      const selectedIssue = await sendRequest(getSuggestions, keyword);
      if (!selectedIssue) return [];
      console.info("calling api");
      setSuggestions(selectedIssue);
    };
    fetchSuggestions();
  }
  return { fetchSuggestions, isLoading, error };
};

export default useSuggestions;
