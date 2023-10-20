import styled from "styled-components";

export const ButtonAct = styled.button`
  padding: 0.3rem 1rem;
  font-weight: 700;
  font-size: 1.2rem;
  background: var(--text-secondary-color);
  color: var(--text-first-color);
  border-radius: 0.4rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    filter: brightness(90%);
  }

  &:after {
    content: "";
    position: absolute;
    top: -6px;
    left: -6px;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    background: transparent;
    border: 2px solid var(--text-secondary-color);
    border-radius: 0.6rem;
  }
`;
