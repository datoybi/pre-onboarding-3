import { styled } from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h1>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 30px 0;

  & > h1 {
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;
    font-weight: bolder;
    letter-spacing: -0.07em;
  }
`;
