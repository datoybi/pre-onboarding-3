import { useContext } from "react";
import { styled } from "styled-components";
import SuggestionItem from "./SuggestionItem";
import { SuggestionContext } from "../contexts/SuggestionContext";

const SuggestionList = () => {
  const { suggestion, focusIndex } = useContext(SuggestionContext);

  const ItemElement = () => {
    if (!suggestion) {
      return <p>검색 결과가 없습니다.</p>;
    }

    const ItemElements = suggestion.map((suggestion: any, index: number) => (
      <SuggestionItem
        key={suggestion.sickCd}
        name={suggestion.sickNm}
        isFocus={focusIndex === index}
      />
    ));
    return ItemElements;
  };

  return (
    <List>
      <h3>추천 검색어</h3>
      {ItemElement()}
    </List>
  );
};

export default SuggestionList;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  background-color: #fff;
  border-radius: 16px;
  margin-left: 15px;

  & > h3 {
    display: block;
    font-size: 0.8rem;
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
    padding: 20px 10px 0 20px;
  }
`;
