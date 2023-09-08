import { useContext } from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import useSuggestions from "../hooks/useSuggestions";
import { SuggestionContext } from "../contexts/SuggestionContext";

const SearchBar = ({ handleKeyDown }: any) => {
  // const { fetchSuggestions, isLoading, error } = useSuggestions();
  const { setKeyword, handleSetSuggestions } = useContext(SuggestionContext);

  const handleFormSubmit = (event: any) => {
    event.preventDefault();
    const { value: keyword } = event.target.elements["keyword"];
    handleSetSuggestions(keyword);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input type="text" name="keyword" onKeyDown={handleKeyDown} />
      <button type="submit">검색</button>
    </Form>
  );
};

export default SearchBar;

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 55px;

  & > svg {
    position: relative;
    font-size: 15px;
    left: 8%;
    top: 36%;
    color: #333;
  }

  & > input {
    width: 80%;
    font-size: 15px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    padding-left: 10%;
  }

  & > button {
    width: 20%;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    color: #fff;
    background: #357ae1;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
`;
