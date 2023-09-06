import { ReactNode } from "react";
import { styled } from "styled-components";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Header>
        <h1>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h1>
      </Header>
      <>{children}</>
    </Wrapper>
  );
}

const Header = styled.header`
  padding: 30px 0;

  & > h1 {
    font-size: 2rem;
    line-height: 3rem;
    text-align: center;
    font-weight: bolder;
    letter-spacing: -0.07em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
