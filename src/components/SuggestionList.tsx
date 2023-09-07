import { useContext } from "react";
import { styled } from "styled-components";
import SuggestionItem from "./SuggestionItem";
import { SuggestionContext } from "../contexts/SuggestionContext";

const SuggestionList = ({ focusIndex }: any) => {
  const { suggestions } = useContext(SuggestionContext);

  const ItemElements = suggestions.map((suggestion: any, index: number) => (
    <SuggestionItem
      key={suggestion.sickCd}
      name={suggestion.sickNm}
      isFocus={focusIndex === index}
    />
  ));

  return (
    <List>
      <p>추천 검색어</p>
      {ItemElements}
    </List>
  );
};

export default SuggestionList;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  margin-left: 15px;

  & > p {
    display: block;
    font-size: 0.8rem;
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
    padding: 15px 20px;
  }
`;
