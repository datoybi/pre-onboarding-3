import { useContext } from "react";
import { styled } from "styled-components";
import SearchBar from "../components/SearchBar";
import SuggestionList from "../components/SuggestionList";
import { SuggestionContext } from "../contexts/SuggestionContext";

export default function Main() {
  const { suggestions, focusIndex, setFocusIndex } =
    useContext(SuggestionContext);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
    switch (event.key) {
      case "ArrowDown":
        if (suggestions.length < 0) return;
        if (focusIndex === suggestions.length - 1) setFocusIndex(0);
        if (focusIndex < suggestions.length - 1)
          setFocusIndex((prevIndex: number) => prevIndex + 1);
        break;
      case "ArrowUp":
        if (focusIndex === 0) setFocusIndex(suggestions.length);
        if (focusIndex < suggestions.length)
          setFocusIndex((prevIndex: number) => prevIndex - 1);
        break;
      default:
    }
  };

  return (
    <Wrapper>
      <SearchBar handleKeyDown={handleKeyDown} />
      <SuggestionList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  min-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
