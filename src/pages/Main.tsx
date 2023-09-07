import { styled } from "styled-components";
import SearchBar from "../components/SearchBar";
import SuggestionList from "../components/SuggestionList";

export default function Main() {
  return (
    <Wrapper>
      <SearchBar />
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
