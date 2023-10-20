import styled from "styled-components";

export const LoginContainer = styled.section`
  margin: 8rem auto;
  max-width: 900px;
  display: grid;
  align-items: center;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  text-align: center;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
  }
`;

export const LeftContainer = styled.div`
  p {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
    color: var(--text-first-color);
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  padding: 2rem;
  h2 {
    font-size: 1.6rem;
    color: var(--text-first-color);
    margin-bottom: 12px;
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--text-first-color);
  }

  @media (max-width: 420px) {
    h2,
    p {
      font-size: 1rem;
    }
  }
`;

export const FormContainer = styled.form``;

export const BottomButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
  margin: 3rem auto 1rem;

  a {
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: 700;
  }

  a:nth-of-type(1) {
    color: var(--dio-yellow);
  }

  a:nth-of-type(2) {
    color: var(--dio-green);
  }
`;
