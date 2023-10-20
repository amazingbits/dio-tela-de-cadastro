import styled from "styled-components";

export const InputContainer = styled.div`
  margin: 4rem auto 2.4rem;
  max-width: 280px;

  label {
    display: block;
    color: var(--text-first-color);
    font-size: 0.8rem;
    margin-bottom: 2px;
    text-align: left;
  }

  div {
    display: grid;
    grid-template-columns: 14px 1fr;
    gap: 4px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 4px;
    transition: all 0.3s linear;
  }

  div input {
    width: 100%;
    padding: 0.6rem;
    background: transparent;
    outline: none;
    color: var(--text-first-color);
    font-size: 1.2rem;
    font-weight: 700;
  }

  div:has(input:focus) {
    border-bottom: 1px solid var(--text-secondary-color);
  }

  p {
    text-align: right;
    font-size: 0.75rem;
    margin-top: 5px;
  }
`;
