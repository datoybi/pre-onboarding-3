import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SuggestionItem = ({ name }: any) => {
  return (
    <Item>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <span>{name}</span>
    </Item>
  );
};

export default SuggestionItem;

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
