import styled from "styled-components";

export const HomeContainer = styled.section`
  margin: 8rem auto;
  max-width: 900px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 790px) {
    grid-template-columns: 1fr;

    img {
      margin-top: 2rem;
    }
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 1.2rem !important;
      line-height: 1.6rem !important;
    }

    p {
      font-size: 1rem !important;
    }
  }
`;

export const LeftContent = styled.div`
  text-align: center;

  h1 {
    font-size: 2rem;
    color: var(--text-first-color);
    line-height: 2.8rem;
    margin-bottom: 15px;
  }

  span {
    color: var(--text-secondary-color);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: var(--text-first-color);
    font-weight: 300;
    margin-bottom: 60px;
  }
`;

export const RightContent = styled.div`
  text-align: right;

  img {
    max-width: 100%;
  }
`;
