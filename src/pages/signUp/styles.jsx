import styled from "styled-components";

export const Container = styled.section`
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

export const LeftContent = styled.div`
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

export const RightContent = styled.div`
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

  p:nth-of-type(2) {
    margin: 2.25rem 0 2rem;
    line-height: 2rem;
  }

  p:nth-of-type(3) {
    font-size: 0.85rem;
    font-weight: 700;
  }

  p:nth-of-type(3) a {
    text-decoration: none;
    color: var(--dio-green);
  }

  @media (max-width: 420px) {
    h2,
    p {
      font-size: 1rem;
    }
  }
`;

export const FormContainer = styled.form``;
