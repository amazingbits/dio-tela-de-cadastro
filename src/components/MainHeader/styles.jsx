import styled from "styled-components";

export const MainHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--primary-color);
  padding: 1rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav a {
    text-decoration: none;
    margin-right: 12px;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-first-color);
    transition: all 0.3s linear;
  }

  nav a:hover {
    filter: brightness(90%);
  }

  nav a:last-of-type {
    margin-right: 0;
  }

  nav a.active {
    color: var(--text-secondary-color);
  }
`;
