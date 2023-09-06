import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const RecommendItem = () => {
  return (
    <Item>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <span>간세포암</span>
    </Item>
  );
};

export default RecommendItem;

const Item = styled.li`
  padding: 10px 0;
  font-weight: 500;

  & > svg {
    width: 12px;
  }

  & > span {
    margin-left: 10px;
  }
`;
