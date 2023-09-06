import { styled } from "styled-components";
import SearchBar from "../components/SearchBar";
import RecommendList from "../components/RecommendList";

export default function Main() {
  return (
    <Wrapper>
      <SearchBar />
      <RecommendList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 600px;
  min-width: 400px;
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
