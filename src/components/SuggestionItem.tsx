import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SuggestionItem = ({ name, isFocus }: any) => {
  return (
    <Item focus={isFocus ? "true" : "false"}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <span>{name}</span>
    </Item>
  );
};

export default SuggestionItem;

const Item = styled.li<{ focus: string }>`
  padding: 15px 20px;
  font-weight: ${({ focus }) => (focus === "true" ? 700 : 500)};

  & > svg {
    width: 12px;
  }

  & > span {
    margin-left: 10px;
  }
`;
