import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <Wrapper>
      <Form>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" />
        <button type="submit">검색</button>
      </Form>
      <List>
        <p>추천 검색어</p>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>간세포암</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>갑상선암종</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>고환암</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span>뼈암</span>
        </li>
      </List>
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
  }
`;

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

  & > li {
    /* border: 1px solid; */
    padding: 10px 0;
    font-weight: 500;

    svg {
      width: 12px;
    }

    span {
      margin-left: 10px;
    }
  }
`;
