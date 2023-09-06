import { styled } from "styled-components";
import RecommendItem from "./RecommendItem";

const RecommendList = () => {
  return (
    <List>
      <p>추천 검색어</p>
      <RecommendItem />
      <RecommendItem />
      <RecommendItem />
      <RecommendItem />
      <RecommendItem />
    </List>
  );
};

export default RecommendList;

const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 16px;
  margin-left: 15px;

  & > p {
    display: block;
    font-size: 0.8rem;
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
